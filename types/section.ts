export type SectionType = "hero" | "featureGrid" | "testimonial" | "cta";

interface BaseSection {
  id: string;
  type: SectionType;
}

export interface HeroSection extends BaseSection {
  type: "hero";
  props: {
    heading: string;
    subHeading: string;
    image?: string;
  };
}

export interface FeatureGridSection extends BaseSection {
  type: "featureGrid";
  props: {
    title: string;
    items: string[];
  };
}

export interface TestimonialSection extends BaseSection {
  type: "testimonial";
  props: {
    quote: string;
    author: string;
  };
}

export interface CTASection extends BaseSection {
  type: "cta";
  props: {
    label: string;
    url: string;
  };
}

export type Section =
  | HeroSection
  | FeatureGridSection
  | TestimonialSection
  | CTASection;
