"use client";

import { Input } from "@/components/ui/input";
import { useAppDispatch } from "@/hooks/redux";
import { updateSectionProps } from "@/features/draftPage/slice";

type Props = {
    sectionId: string;

    props: {
        heading: string;
        subHeading: string;
    };
};

export default function HeroEditor({
    sectionId,
    props,
}: Props) {
    const dispatch = useAppDispatch();

    return (
        <div className="space-y-5">

            <div>

                <label className="mb-2 block text-sm font-medium">
                    Heading
                </label>

                <Input
                    value={props.heading}
                    onChange={(e) =>
                        dispatch(
                            updateSectionProps({
                                sectionId,

                                props: {
                                    heading: e.target.value,
                                },
                            })
                        )
                    }
                />

            </div>

            <div>

                <label className="mb-2 block text-sm font-medium">
                    Sub Heading
                </label>

                <Input
                    value={props.subHeading}
                    onChange={(e) =>
                        dispatch(
                            updateSectionProps({
                                sectionId,

                                props: {
                                    subHeading:
                                        e.target.value,
                                },
                            })
                        )
                    }
                />

            </div>

        </div>
    );
}