"use client";

import { sectionRegistry } from "@/registry/sectionRegistry";
import { useAppSelector } from "@/hooks/redux";

export default function PropertyEditor() {
    const page = useAppSelector((state) => state.draftPage.page);

    const selectedSectionId = useAppSelector(
        (state) => state.ui.selectedSectionId
    );

    if (!page || !selectedSectionId) {
        return (
            <aside className="w-80 border-l p-5">
                <p className="text-sm text-muted-foreground">
                    Select a section to edit.
                </p>
            </aside>
        );
    }

    const section = page.sections.find(
        (section) => section.id === selectedSectionId
    );

    if (!section) {
        return null;
    }

    const registry =
        sectionRegistry[
        section.type as keyof typeof sectionRegistry
        ];

    if (!registry.editor) {
        return (
            <aside className="overflow-auto border-l bg-white p-6">
                <div className="mb-8 border-b pb-4">
                    <h3 className="text-xl font-bold">
                        {registry.displayName}
                    </h3>

                    <p className="text-sm text-slate-500">
                        Edit section properties
                    </p>
                </div>
            </aside>
        );
    }

    const Editor = registry.editor;

    return (
        <aside className="w-80 border-l p-5">
            <h3 className="mb-6 text-xl font-semibold">
                {registry.displayName}
            </h3>

            <Editor
                sectionId={section.id}
                props={section.props as any}
            />
        </aside>
    );
}