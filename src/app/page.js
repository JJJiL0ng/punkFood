// app/page.js
'use client'
import { useState } from 'react'
import { getFirestore, collection, addDoc, serverTimestamp } from 'firebase/firestore'
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

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

  const handleShopClick = () => {
    window.location.href = '/comingSoon'
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 gradient-bg">
      <div className="max-w-md w-full space-y-8 text-center">
        {/* Logo and Title */}
        <div className="space-y-4">
          <h1 className="text-4xl font-bold text-white">
            PUNK FOOD
          </h1>
          <p className="text-xl text-white/90">
            Your Gateway to Korean Fashion<br />
            in India
          </p>
        </div>

        {/* Main Content */}
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800">
            Get 25% Off<br />
            Your First Order
          </h2>
          
          <p className="text-gray-600">
            Unlock exclusive access <br />
            to trendy Korean fashion
          </p>

          {!couponVisible ? (
            <button
              onClick={handleGetDiscount}
              className="btn-primary w-full"
            >
              Get Discount Code
            </button>
          ) : (
            <div className="space-y-4">
              <p className="text-sm text-gray-600">Your discount code:</p>
              <div className="bg-gray-100 p-4 rounded-lg">
                <p className="text-2xl font-mono font-bold text-[#FC7E7A]">
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
      </div>
    </div>
  )
}