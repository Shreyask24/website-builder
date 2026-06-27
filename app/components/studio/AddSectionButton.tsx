"use client";

import { Plus } from "lucide-react";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Button } from "@/components/ui/button";

import { sectionRegistry } from "@/registry/sectionRegistry";

import { addSection } from "@/features/draftPage/slice";

import { useAppDispatch } from "@/hooks/redux";

import type { Section, SectionType } from "@/types/section";
import { selectSection } from "@/features/ui/slice";

export default function AddSectionButton() {
    const dispatch = useAppDispatch();

    const handleAdd = (type: SectionType) => {
        const registry = sectionRegistry[type];
        const newSection = {
            id: crypto.randomUUID(),
            type: type as any,
            props: {
                ...registry.defaultProps,
            },
        };

        dispatch(addSection(newSection as Section));
        dispatch(selectSection(newSection.id));


    };

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button className="w-full mb-4">
                    <Plus className="mr-2 h-4 w-4" />
                    Add Section
                </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent className="w-56">
                {(Object.keys(sectionRegistry) as SectionType[]).map((type) => (
                    <DropdownMenuItem
                        key={type}
                        onClick={() => handleAdd(type)}
                    >
                        {sectionRegistry[type].displayName}
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    );
}