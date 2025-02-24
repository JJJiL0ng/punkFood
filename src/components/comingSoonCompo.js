'use client'
import { useState } from 'react'
import { FaInstagram } from 'react-icons/fa'

export default function Sorry() {
  const [couponCode] = useState('PUNK4U')

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
            We&apos;re Almost There!
          </h2>
          
          <p className="text-gray-600">
            We apologize, but our shop hasn&apos;t launched yet. We&apos;re working hard to bring you the best Korean fashion experience in India.
          </p>

          <div className="space-y-4">
            <p className="text-gray-600">
              Don&apos;t forget to save your exclusive discount code for our launch:
            </p>
            <div className="bg-gray-100 p-4 rounded-lg">
              <p className="text-2xl font-mono font-bold text-red-500">
                {couponCode}
              </p>
            </div>
            <p className="text-sm text-gray-500">
              Get 25% off on your first purchase when we launch!
            </p>
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

        {/* Footer */}
        <p className="text-sm text-white/80">
          Stay tuned - We&apos;re launching soon!
        </p>
      </div>
    </div>
  )
}
