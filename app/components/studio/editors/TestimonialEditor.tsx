"use client";

import { Input } from "@/components/ui/input";
import { useAppDispatch } from "@/hooks/redux";
import { updateSectionProps } from "@/features/draftPage/slice";

type Props = {
    sectionId: string;
    props: {
        quote: string;
        author: string;
    };
};

export default function TestimonialEditor({
    sectionId,
    props,
}: Props) {
    const dispatch = useAppDispatch();

    return (
        <div className="space-y-5">
            <div>
                <label className="mb-2 block text-sm font-medium">
                    Quote
                </label>

                <Input
                    value={props.quote}
                    onChange={(e) =>
                        dispatch(
                            updateSectionProps({
                                sectionId,
                                props: {
                                    quote: e.target.value,
                                },
                            })
                        )
                    }
                />
            </div>

            <div>
                <label className="mb-2 block text-sm font-medium">
                    Author
                </label>

                <Input
                    value={props.author}
                    onChange={(e) =>
                        dispatch(
                            updateSectionProps({
                                sectionId,
                                props: {
                                    author: e.target.value,
                                },
                            })
                        )
                    }
                />
            </div>
        </div>
    );
}