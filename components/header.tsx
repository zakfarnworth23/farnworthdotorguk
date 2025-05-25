"use client"

import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import { usePathname } from "next/navigation"

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (path: string) => pathname === path

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/#achievements", label: "Achievements" },
    { href: "/#roles", label: "Roles" },
    { href: "/#contact", label: "Contact" },
  ]

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-[#1d70b8] text-white h-16 shadow-md">
        <div className="container mx-auto max-w-5xl px-4 h-full">
          <div className="flex items-center justify-between h-full">
            <div className="flex items-center">
              <Image
                src="/crown-white.svg"
                alt="Crown logo"
                width={36}
                height={25}
                className="mr-3"
                priority
              />
              <Link href="/" className="text-2xl font-bold">
                Zak Farnworth
              </Link>
            </div>

            <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`hover:underline transition ${
                    isActive(link.href) ? "underline" : ""
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <button
              className="md:hidden p-2"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu + Overlay */}
      {menuOpen && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40"
            onClick={() => setMenuOpen(false)}
          />
          <div className="fixed top-16 left-0 w-full bg-[#1d70b8] text-white px-4 py-6 z-50 transition-all">
            <nav className="flex flex-col space-y-4 text-lg font-medium">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-2 py-2 rounded hover:bg-[#1478c8] transition"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </>
      )}
    </>
  )
}
