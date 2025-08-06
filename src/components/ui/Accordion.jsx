import * as React from "react"
import { cn } from "@/lib/utils"

const AccordionContext = React.createContext()

function Accordion({ type = "single", collapsible = false, className, children, ...props }) {
 const [open, setOpen] = React.useState(type === "single" ? null : [])
 const contextValue = React.useMemo(() => ({ open, setOpen, type, collapsible }), [open, type, collapsible])
 return (
 <AccordionContext.Provider value={contextValue}>
 <div className={cn("space-y-2", className)} {...props}>
 {children}
 </div>
 </AccordionContext.Provider>
 )
}

function AccordionItem({ value, children, ...props }) {
 const { open, setOpen, type, collapsible } = React.useContext(AccordionContext)
 const isOpen = type === "single" ? open === value : open.includes(value)
 function toggle() {
 if (type === "single") {
 setOpen(isOpen && collapsible ? null : value)
 } else {
 setOpen(isOpen ? open.filter((v) => v !== value) : [...open, value])
 }
 }
 return (
 <div className="border rounded-lg bg-white shadow-sm" {...props}>
 {React.Children.map(children, (child) =>
 React.isValidElement(child)
 ? React.cloneElement(child, { isOpen, toggle })
 : child
 )}
 </div>
 )
}

function AccordionTrigger({ children, isOpen, toggle, ...props }) {
 return (
 <button
 className={cn(
 "w-full flex items-center justify-between px-4 py-3 text-left font-medium text-gray-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/80 transition-colors",
 isOpen ? "bg-primary/5" : "bg-white"
 )}
 aria-expanded={isOpen}
 onClick={toggle}
 {...props}
 >
 <span>{children}</span>
 <svg
 className={cn(
 "ml-2 h-5 w-5 text-primary transition-transform",
 isOpen ? "rotate-180" : "rotate-0"
 )}
 fill="none"
 viewBox="002424"
 stroke="currentColor"
 strokeWidth="2"
 >
 <path strokeLinecap="round" strokeLinejoin="round" d="M199l-77-7-7" />
 </svg>
 </button>
 )
}

function AccordionContent({ children, isOpen, ...props }) {
 return (
 <div
 className={cn(
 "px-4 pb-4 text-gray-700 text-sm transition-all duration-300",
 isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
 )}
 aria-hidden={!isOpen}
 {...props}
 >
 {children}
 </div>
 )
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
