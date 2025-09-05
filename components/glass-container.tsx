import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface GlassContainerProps {
  children: ReactNode
  className?: string
}

export function GlassContainer({ children, className }: GlassContainerProps) {
  return <div className={cn("glass-container m-10 p-8", className)}>{children}</div>
}
