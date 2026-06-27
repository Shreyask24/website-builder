"use client";

import { Input } from "@/components/ui/input";
import { useAppDispatch } from "@/hooks/redux";
import { updateSectionProps } from "@/features/draftPage/slice";

type Props = {
    sectionId: string;
    props: {
        title: string;
        items: string[];
    };
};

export default function FeatureGridEditor({
    sectionId,
    props,
}: Props) {
    const dispatch = useAppDispatch();

    const updateItem = (index: number, value: string) => {
        const updatedItems = [...props.items];
        updatedItems[index] = value;

        dispatch(
            updateSectionProps({
                sectionId,
                props: {
                    items: updatedItems,
                },
            })
        );
    };

    return (
        <div className="space-y-5">
            <div>
                <label className="mb-2 block text-sm font-medium">
                    Title
                </label>

                <Input
                    value={props.title}
                    onChange={(e) =>
                        dispatch(
                            updateSectionProps({
                                sectionId,
                                props: {
                                    title: e.target.value,
                                },
                            })
                        )
                    }
                />
            </div>

            {props.items.map((item, index) => (
                <div key={index}>
                    <label className="mb-2 block text-sm font-medium">
                        Feature {index + 1}
                    </label>

                    <Input
                        value={item}
                        onChange={(e) =>
                            updateItem(index, e.target.value)
                        }
                    />
                </div>
            ))}
        </div>
    );
}