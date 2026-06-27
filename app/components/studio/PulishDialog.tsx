"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";

import { useAppSelector } from "@/hooks/redux";

export default function PublishDialog() {
    const page = useAppSelector(
        (state) => state.draftPage.page
    );

    const [loading, setLoading] =
        useState(false);

    const handlePublish = async () => {
        if (!page) return;

        setLoading(true);

        const response = await fetch(
            "/api/publish",
            {
                method: "POST",

                headers: {
                    "Content-Type":
                        "application/json",
                },

                body: JSON.stringify({
                    page,
                }),
            }
        );

        const data = await response.json();

        console.log(data);

        alert(
            `Published ${data.version}`
        );

        setLoading(false);
    };

    return (
        <Button
            onClick={handlePublish}
            disabled={loading}
        >
            {loading
                ? "Publishing..."
                : "Publish"}
        </Button>
    );
}