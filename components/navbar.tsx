import Link from "next/link"
import { Button } from "./ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import MobileMenuTrigger from "./mobile-menu-trigger";

export default function Navbar() {
    return (
        <nav className="w-full border-b bg-white">
            <div className="container mx-auto flex h-16 items-center justify-between px-4">

                {/* Logo */}
                <Link href="/" className="text-lg font-bold">
                    TaskFlow
                </Link>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-6 text-sm">
                    <Link href="/tasks" className="hover:text-black/70">
                        Tasks
                    </Link>
                </div>

                {/* Auth Buttons */}
                <div className="hidden md:flex items-center gap-2">
                    <Link href="/login">
                        <Button variant="ghost">Login</Button>
                    </Link>
                    <Link href="/register">
                        <Button>Register</Button>
                    </Link>
                </div>

                {/* Mobile Menu */}
                <div className="md:hidden">
                    <DropdownMenu>
                        <MobileMenuTrigger />
                        <DropdownMenuContent align="end">
                            <DropdownMenuItem asChild>
                                <Link href="/dashboard">Dashboard</Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem asChild>
                                <Link href="/calendar">Calendar</Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem asChild>
                                <Link href="/projects">Projects</Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem asChild>
                                <Link href="/admin">Admin</Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem asChild>
                                <Link href="/login">Login</Link>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>
        </nav>
    )
}