"use client";

import * as React from "react";
import {cn} from "@/lib/utils";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
    className?: string;
    size?: "default" | "large";
}

export function Modal({isOpen, onClose, children, className, size = "default"}: ModalProps) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm overflow-y-auto">
            <div className="min-h-full flex items-center justify-center p-4">
                <div className="fixed inset-0 bg-black/30" aria-hidden="true" onClick={onClose} />
                <div className={cn(
                    "relative w-full bg-background p-6 shadow-lg sm:rounded-lg",
                    size === "large" ? "max-w-5xl" : "max-w-lg",
                )}>
                    <div className={cn("relative", className)}>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
} 
