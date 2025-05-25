"use client"

import { useState, useEffect } from "react"
import { setCookie, getCookie } from "@/lib/cookies"

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const cookieConsent = getCookie("cookie_consent")
    if (cookieConsent === null) {
      setVisible(true)
    }
  }, [])

  const acceptCookies = () => {
    setCookie("cookie_consent", "accepted", 365)
    setCookie("analytics_enabled", "true", 365)
    console.log("Cookies accepted")
    setVisible(false)
  }

  const rejectCookies = () => {
    setCookie("cookie_consent", "rejected", 365)
    document.cookie = "analytics_enabled=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"
    console.log("Additional cookies rejected")
    setVisible(false)
  }

  const viewCookies = () => {
    console.log("View cookies clicked")
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="fixed top-0 left-0 w-full z-[100] bg-white border-b border-gray-300 p-4 shadow">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-xl font-bold mb-2">Cookies on this website</h2>
        <p className="mb-4">We use some essential cookies to make this website work.</p>
        <p className="mb-4">
          We'd like to set additional cookies to understand how you use this website, remember your settings, and improve
          government services.
        </p>
        <div className="flex flex-wrap gap-4">
          <button
            onClick={acceptCookies}
            className="bg-green-700 text-white font-semibold py-2 px-4 rounded hover:bg-green-800 transition"
          >
            Accept additional cookies
          </button>
          <button
            onClick={rejectCookies}
            className="bg-green-700 text-white font-semibold py-2 px-4 rounded hover:bg-green-800 transition"
          >
            Reject additional cookies
          </button>
          <button
            onClick={viewCookies}
            className="text-[#1d70b8] underline hover:text-[#003078] focus:outline-none focus:text-black focus:bg-yellow-400 focus:no-underline"
          >
            View cookies
          </button>
        </div>
      </div>
    </div>
  )
}
