import Hero from "@/app/components/sections/Hero";
import CTA from "@/app/components/sections/CTA";
import FeatureGrid from "@/app/components/sections/FeatureGrid";
import Testimonial from "@/app/components/sections/Testimonial";

import { heroSchema } from "@/schemas/heroSchema";
import { ctaSchema } from "@/schemas/ctaSchema";
import { featureGridSchema } from "@/schemas/featureGridSchema";
import { testimonialSchema } from "@/schemas/testimonialSchema";
import HeroEditor from "@/app/components/studio/editors/HeroEditor";
import CTAEditor from "@/app/components/studio/editors/CTAEditor";
import FeatureGridEditor from "@/app/components/studio/editors/FeatureEditor";
import TestimonialEditor from "@/app/components/studio/editors/TestimonialEditor";

export const sectionRegistry = {
  hero: {
    component: Hero,
    editor: HeroEditor,
    schema: heroSchema,
    displayName: "Hero",
    defaultProps: {
      heading: "New Hero",
      subHeading: "Hero Subtitle",
    },
  },

  featureGrid: {
    component: FeatureGrid,
    editor: FeatureGridEditor,
    schema: featureGridSchema,
    displayName: "Feature Grid",
    defaultProps: {
      title: "Features",
      items: [],
    },
  },

  testimonial: {
    component: Testimonial,
    editor: TestimonialEditor,
    schema: testimonialSchema,
    displayName: "Testimonial",
    defaultProps: {
      quote: "",
      author: "",
    },
  },

  cta: {
    component: CTA,
    editor: CTAEditor,
    schema: ctaSchema,
    displayName: "CTA",
    defaultProps: {
      label: "Click Here",
      url: "/",
    },
  },
} as const;
