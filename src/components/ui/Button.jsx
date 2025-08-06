import * as React from "react"
import { cn } from "@/lib/utils"

const Button = React.forwardRef(({ className, variant = "default", size = "default", asChild = false, ...props }, ref) => {
 const Comp = asChild ? Slot : "button"
 return (
 <Comp
 className={cn(
 "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/80 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background",
 variant === "default" && "bg-primary text-white hover:bg-primary/90",
 variant === "accent" && "bg-accent text-accent-foreground hover:bg-accent/90",
 variant === "outline" && "border border-input bg-transparent hover:bg-accent hover:text-accent-foreground",
 size === "default" && "h-10 px-4 py-2",
 size === "sm" && "h-9 px-3",
 size === "lg" && "h-11 px-8",
 className
 )}
 ref={ref}
 {...props}
 />
 )
})
Button.displayName = "Button"

export { Button }
