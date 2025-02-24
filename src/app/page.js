// app/page.js
'use client'
import { useState } from 'react'
import { getFirestore, collection, addDoc, serverTimestamp } from 'firebase/firestore'
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import Image from 'next/image'
import { FaInstagram } from 'react-icons/fa'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Analytics는 클라이언트 사이드에서만 초기화해야 합니다
if (typeof window !== 'undefined') {
  const analytics = getAnalytics(app);
}

export default function Home() {
  const [couponVisible, setCouponVisible] = useState(false)
  const [couponCode] = useState('PUNK4U')
  const db = getFirestore(app)

  const handleGetDiscount = async () => {
    setCouponVisible(true)
    try {
      await addDoc(collection(db, 'coupon_clicks'), {
        couponCode: couponCode,
        timestamp: serverTimestamp(),
      })
    } catch (error) {
      console.error('Error logging coupon click:', error)
    }
  }

  const handleShopClick = async () => {
    try {
      await addDoc(collection(db, 'shop_clicks'), {
        timestamp: serverTimestamp(),
      })
    } catch (error) {
      console.error('Error logging shop click:', error)
    }
    window.location.href = '/comingSoon'
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 gradient-bg">
      <div className="max-w-md w-full space-y-8 text-center">
        {/* Logo and Title */}
        <div className="space-y-4">
          <div className="relative mx-auto" style={{ width: '256px', height: '192px' }}>
            <Image
              src="/PUNK FOOD LOGO.png"
              alt="PUNK FOOD"
              fill
              style={{ objectFit: 'contain' }}
              priority
            />
          </div>
          <p className="text-xl text-white/90">
            At PUNK FOOD,<br />
            we don&apos;t just go meatless—we go stronger. 💪
          </p>
        </div>

        {/* Main Content */}
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">
            Get 25% Off<br />
            Your First Order
          </h2>

          <p className="text-gray-600">
            🔥 No compromise on flavor.<br />
            🔥 No compromise on style.<br />
            🔥 Just bold, rebellious bites<br />
             for those who live louder.
          </p>

          {!couponVisible ? (
            <button
              onClick={handleGetDiscount}
              className="btn-primary w-full mt-2"
            >
              Get Discount Code
            </button>
          ) : (
            <div className="space-y-3">
              <p className="text-sm text-gray-600">Your discount code:</p>
              <div className="bg-gray-100 p-3 rounded-lg">
                <p className="text-2xl font-mono font-bold text-red-500">
                  {couponCode}
                </p>
              </div>
              <p className="text-xs text-gray-500">
                *Valid for your first purchase only
              </p>
              <button
                onClick={handleShopClick}
                className="btn-primary w-full"
              >
                Go to Shop
              </button>
            </div>
          )}
        </div>
        
        {/* Instagram Button */}
        <div className="px-8 w-full">
          <a
            href="https://www.instagram.com/altmeat_official/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary w-full flex items-center justify-center gap-2"
          >
            <FaInstagram className="text-xl" />
            Follow us on Instagram
          </a>
        </div>
      </div>
    </div>
  )
}