import * as React from "react"
import { cn } from "@/lib/utils"

function Badge({ className, variant = "default", ...props }) {
 return (
 <span
 className={cn(
 "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
 variant === "default" && "bg-primary text-primary-foreground border-transparent",
 variant === "secondary" && "bg-accent text-accent-foreground border-transparent",
 variant === "outline" && "text-foreground border-input",
 className
 )}
 {...props}
 />
 )
}

export { Badge }
