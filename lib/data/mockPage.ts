import { Page } from "@/types/page";

export const mockPage: Page = {
  pageId: "1",
  slug: "home",
  title: "Landing Page",

  sections: [
    {
      id: "hero-1",
      type: "hero",
      props: {
        heading: "Welcome to Page Studio",
        subHeading: "Schema Driven Landing Pages",
      },
    },

    {
      id: "feature-1",
      type: "featureGrid",
      props: {
        title: "Features",
        items: ["Next.js", "Redux Toolkit", "Contentful"],
      },
    },

    {
      id: "testimonial-1",
      type: "testimonial",
      props: {
        quote: "This assignment is fun!",
        author: "Shreyas",
      },
    },

    {
      id: "cta-1",
      type: "cta",
      props: {
        label: "Get Started",
        url: "#",
      },
    },
  ],
};
