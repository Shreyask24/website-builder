import { sectionRegistry } from "@/registry/sectionRegistry";
import { Page } from "@/types/page";
import UnsupportedSection from "../sections/UnsuppportedSection";

type Props = {
    page: Page;
};

export default function PageRenderer({ page }: Props) {
    return (
        <>
            {page.sections.map((section) => {
                console.log(page)
                const entry =
                    sectionRegistry[
                    section.type as keyof typeof sectionRegistry
                    ];

                console.log("Entry: ", entry)

                if (!entry) {
                    return (
                        <UnsupportedSection
                            key={section.id}
                            type={section.type}
                        />
                    );
                }

                const Component = entry.component as React.ComponentType<typeof section.props>;

                return (
                    <Component
                        key={section.id}
                        {...section.props}
                    />
                );
            })}
        </>
    );
}