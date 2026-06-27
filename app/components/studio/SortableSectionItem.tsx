"use client";

import { CSS } from "@dnd-kit/utilities";
import { useSortable } from "@dnd-kit/sortable";

type Props = {
    id: string;
    selected: boolean;
    label: string;
    onClick: () => void;
};

export default function SortableSectionItem({
    id,
    selected,
    label,
    onClick,
}: Props) {
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
    } = useSortable({ id });

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
    };

    return (
        <div
            ref={setNodeRef}
            style={style}
            className={`group flex items-center justify-between rounded-xl border p-4 transition-all ${selected
                    ? "border-blue-500 bg-blue-50 shadow"
                    : "bg-white hover:border-blue-300 hover:shadow"
                }`}
        >
            <button
                onClick={onClick}
                className="flex-1 text-left"
            >
                <p className="font-semibold">
                    {label}
                </p>

                <p className="mt-1 text-xs text-slate-500">
                    Click to edit
                </p>
            </button>

            <div
                {...attributes}
                {...listeners}
                className="cursor-grab rounded p-2 text-slate-400 hover:bg-slate-100"
            >
                ☰
            </div>
        </div>
    );
}