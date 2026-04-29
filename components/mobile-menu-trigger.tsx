"use client";
import { DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

export default function MobileMenuTrigger() {
    return (
        <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon">
                <Menu />
            </Button>
        </DropdownMenuTrigger>
    );
}