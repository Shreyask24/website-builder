"use client";

import { useRouter } from "next/navigation";
import { Shield, Pencil, Rocket } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function RoleSwitcher() {
    const router = useRouter();

    function setRole(role: string) {
        document.cookie = `role=${role}; path=/`;
        router.refresh();
    }

    return (
        <div className="fixed bottom-6 right-6 z-50 rounded-xl border bg-white/90 p-3 shadow-xl backdrop-blur">
            <div className="mb-3 flex items-center justify-between">
                <span className="text-sm font-semibold">
                    Demo Role
                </span>

                <Badge variant="secondary">
                    RBAC
                </Badge>
            </div>

            <div className="flex gap-2">
                <Button
                    size="sm"
                    variant="outline"
                    onClick={() => setRole("viewer")}
                >
                    <Shield className="mr-2 h-4 w-4" />
                    Viewer
                </Button>

                <Button
                    size="sm"
                    variant="outline"
                    onClick={() => setRole("editor")}
                >
                    <Pencil className="mr-2 h-4 w-4" />
                    Editor
                </Button>

                <Button
                    size="sm"
                    onClick={() => setRole("publisher")}
                >
                    <Rocket className="mr-2 h-4 w-4" />
                    Publisher
                </Button>
            </div>
        </div>
    );
}