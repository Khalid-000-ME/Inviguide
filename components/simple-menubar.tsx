"use client"

import type React from "react"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

interface MenuItem {
  href: string
  label: string
  icon?: React.ReactNode
}

interface SimpleMenubarProps {
  items: MenuItem[]
  className?: string
}

export function SimpleMenubar({ items, className }: SimpleMenubarProps) {
  const pathname = usePathname()

  return (
    <nav
      className={cn(
        "flex flex-wrap gap-2 p-2 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200",
        className,
      )}
    >
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={cn(
            "flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200",
            pathname === item.href
              ? "bg-black text-white shadow-md"
              : "text-gray-700 hover:bg-gray-100 hover:text-black",
          )}
        >
          {item.icon}
          {item.label}
        </Link>
      ))}
    </nav>
  )
}
