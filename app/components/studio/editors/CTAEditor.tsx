"use client";

import { Input } from "@/components/ui/input";
import { useAppDispatch } from "@/hooks/redux";
import { updateSectionProps } from "@/features/draftPage/slice";

type Props = {
    sectionId: string;

    props: {
        label: string;
        url: string;
    };
};

export default function CTAEditor({
    sectionId,
    props,
}: Props) {

    const dispatch = useAppDispatch();

    return (
        <div className="space-y-5">

            <Input
                value={props.label}
                placeholder="CTA Label"
                onChange={(e) =>
                    dispatch(
                        updateSectionProps({
                            sectionId,

                            props: {
                                label: e.target.value
                            }
                        })
                    )
                }
            />

            <Input
                value={props.url}
                placeholder="URL"
                onChange={(e) =>
                    dispatch(
                        updateSectionProps({
                            sectionId,

                            props: {
                                url: e.target.value
                            }
                        })
                    )
                }
            />

        </div>
    );

}