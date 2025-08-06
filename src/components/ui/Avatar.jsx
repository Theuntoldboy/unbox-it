import * as React from "react"
import { cn } from "@/lib/utils"

const Avatar = React.forwardRef(({ className, ...props }, ref) => (
 <span
 ref={ref}
 className={cn(
 "inline-flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-muted",
 className
 )}
 {...props}
 />
))
Avatar.displayName = "Avatar"

const AvatarImage = React.forwardRef(({ className, ...props }, ref) => (
 <img
 ref={ref}
 className={cn("aspect-square h-full w-full object-cover", className)}
 {...props}
 />
))
AvatarImage.displayName = "AvatarImage"

const AvatarFallback = React.forwardRef(({ className, children, ...props }, ref) => (
 <span
 ref={ref}
 className={cn("flex h-full w-full items-center justify-center rounded-full bg-muted text-xs font-medium", className)}
 {...props}
 >
 {children}
 </span>
))
AvatarFallback.displayName = "AvatarFallback"

export { Avatar, AvatarImage, AvatarFallback }
