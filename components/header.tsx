"use client"

import React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu } from "lucide-react"
import {
    Sheet,
    SheetContent,
    SheetTrigger,
    SheetHeader,
    SheetTitle,
    SheetClose,
} from "@/components/ui/sheet"
import { ThemeToggle } from "@/components/theme-toggle"
import { cn } from "@/lib/utils"

export default function Header() {
    const pathname = usePathname()

    const navItems = [
        { name: "Projects", href: "/projects" },
        { name: "Experience", href: "/experience" },
        { name: "Education", href: "/education" },
        { name: "Blog", href: "/blog" },
    ]

    return (
        <header className="w-full border-b bg-background/80 backdrop-blur ">
            <div className="flex items-center justify-between py-3 px-4 md:px-8 max-w-6xl mx-auto">

                {/* Logo */}
                <Link href="/" className="flex-shrink-0">
                    <p className="font-serif text-sm md:text-lg font-medium tracking-tight leading-none">
                        Roshan Magar
                    </p>
                    <span className="text-[8px] md:text-[10px] font-light tracking-[0.25em] uppercase text-muted-foreground">
                        Software Engineer
                    </span>
                </Link>

                {/* Desktop Menu */}
                <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={cn(
                                "transition-colors hover:text-primary",
                                pathname === item.href && "text-primary font-semibold"
                            )}
                        >
                            {item.name}
                        </Link>
                    ))}

                    {/* Theme Toggle */}
                    <ThemeToggle />
                </nav>

                {/* Mobile Menu */}
                <div className="flex items-center gap-2 md:hidden">
                    <ThemeToggle />

                    <Sheet>
                        <SheetTrigger asChild>
                            <button
                                className="p-2 rounded-md hover:bg-muted transition"
                                aria-label="Open menu"
                            >
                                <Menu className="w-5 h-5" />
                            </button>
                        </SheetTrigger>

                        <SheetContent side="right" className="w-[260px]">
                            <SheetHeader>
                                <SheetTitle>Menu</SheetTitle>
                            </SheetHeader>

                            <div className="flex flex-col gap-6 mt-6 text-base font-medium px-6">
                                {navItems.map((item) => (
                                    <SheetClose asChild key={item.href}>
                                        <Link
                                            href={item.href}
                                            className={cn(
                                                "transition hover:text-primary",
                                                pathname === item.href && "text-primary font-semibold"
                                            )}
                                        >
                                            {item.name}
                                        </Link>
                                    </SheetClose>
                                ))}
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    )
}