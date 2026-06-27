"use client";

import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { selectSection } from "@/features/ui/slice";
import { sectionRegistry } from "@/registry/sectionRegistry";
import AddSectionButton from "./AddSectionButton";

import {
    DndContext,
    closestCenter,
} from "@dnd-kit/core";

import {
    SortableContext,
    verticalListSortingStrategy,
    arrayMove,
} from "@dnd-kit/sortable";

import type { DragEndEvent } from "@dnd-kit/core";

import SortableSectionItem from "./SortableSectionItem";

import { reorderSections } from "@/features/draftPage/slice";
import { nextVersion } from "@/lib/publish/semver";

export default function SectionList() {
    const dispatch = useAppDispatch();

    const page = useAppSelector(
        (state) => state.draftPage.page
    );

    const selectedSectionId = useAppSelector(
        (state) => state.ui.selectedSectionId
    );



    if (!page) {
        return null;
    }


    const handleDragEnd = (event: DragEndEvent) => {
        const { active, over } = event;

        if (!over || active.id === over.id) return;

        const oldIndex = page.sections.findIndex(
            (s) => s.id === active.id
        );

        const newIndex = page.sections.findIndex(
            (s) => s.id === over.id
        );

        dispatch(
            reorderSections({
                fromIndex: oldIndex,
                toIndex: newIndex,
            })
        );
    };


    return (
        <aside className="overflow-auto border-r bg-white p-6">
            <div className="mb-6">
                <h2 className="text-xl font-bold">
                    Sections
                </h2>

                <p className="text-sm text-slate-500">
                    Drag to reorder
                </p>
            </div>

            <AddSectionButton />

            <div className="space-y-2">
                <DndContext
                    collisionDetection={closestCenter}
                    onDragEnd={handleDragEnd}
                >
                    <SortableContext
                        items={page.sections.map((s) => s.id)}
                        strategy={verticalListSortingStrategy}
                    >
                        {page.sections.map((section) => {
                            const registry =
                                sectionRegistry[section.type];

                            return (
                                <SortableSectionItem
                                    key={section.id}
                                    id={section.id}
                                    label={registry.displayName}
                                    selected={
                                        selectedSectionId === section.id
                                    }
                                    onClick={() =>
                                        dispatch(selectSection(section.id))
                                    }
                                />
                            );
                        })}
                    </SortableContext>
                </DndContext>
            </div>
        </aside>
    );
}