"use client";

import { useEffect } from "react";


import { Page } from "@/types/page";

import { useAppDispatch, useAppSelector } from "@/hooks/redux";

import { setDraftPage, updateSectionProps } from "@/features/draftPage/slice";
import PageRenderer from "@/app/components/preview/PageRenderer";
import SectionList from "@/app/components/studio/SectionList";
import PropertyEditor from "@/app/components/studio/PropertyEditor";
import { loadDraft, saveDraft } from "@/lib/utils/localDraft";
import PublishDialog from "@/app/components/studio/PulishDialog";

type Props = {
    initialPage: Page;
};

export default function StudioClient({
    initialPage,
}: Props) {
    const dispatch = useAppDispatch();

    const draftPage = useAppSelector(
        (state) => state.draftPage.page
    );

    useEffect(() => {
        const savedDraft = loadDraft();

        if (savedDraft) {
            dispatch(setDraftPage(savedDraft));
        } else {
            dispatch(setDraftPage(initialPage));
        }
    }, [dispatch, initialPage]);

    useEffect(() => {
        if (draftPage) {
            saveDraft(draftPage);
        }
    }, [draftPage]);

    if (!draftPage) {
        return <div className="p-8">Loading draft...</div>;
    }

    return (
        <main className="min-h-screen bg-slate-100">
            <header className="sticky top-0 z-50 flex items-center justify-between border-b bg-white px-8 py-4 shadow-sm">
                <div>
                    <h1 className="text-2xl font-bold tracking-tight">
                        Page Studio
                    </h1>

                    <p className="text-sm text-slate-500">
                        Editing: {draftPage.title}
                    </p>
                </div>

                <PublishDialog />
            </header>

            <div className="grid h-[calc(100vh-73px)] grid-cols-[320px_1fr_350px]">
                <SectionList />

                <div className="overflow-auto bg-slate-50 p-10">
                    <div className="mx-auto max-w-5xl rounded-xl border bg-white p-10 shadow-lg">
                        <PageRenderer page={draftPage} />
                    </div>
                </div>

                <PropertyEditor />
            </div>
        </main>
    );
}