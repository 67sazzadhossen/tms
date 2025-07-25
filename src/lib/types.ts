// ========== Base Interfaces ==========

export interface Media {
  name: string;
  resource_type: string;
  resource_value: string;
  thumbnail_url: string;
}

export interface Checklist {
  color: string;
  icon: string;
  id: string;
  list_page_visibility: boolean;
  text: string;
}

export interface Seo {
  title: string;
  description: string;
  keywords: string;
  image: string;
  url: string;
}

export interface CtaText {
  name: string;
  value: string;
}

export interface OldInfo {
  cat_id: number;
  course_id: number;
  platform: string;
  skills_cat_id: number;
  slug: string;
}

// ========== Value Interfaces ==========

export interface OfferValue {
  background_color: string;
  background_img: string;
  checklist_text_color: string;
  end_at: string;
  id: string;
  start_at: string;
  template: string;
  text: string;
}

export interface InstructorValue {
  description: string;
  image: string;
  name: string;
  short_description: string;
  slug: string;
  has_instructor_page: boolean;
}

export interface FeatureValue {
  icon: string;
  id: string;
  subtitle: string;
  title: string;
}

export interface PointerValue {
  color: string;
  icon: string;
  id: string;
  text: string;
}

export interface AboutValue {
  description: string;
  icon: string;
  id: string;
  title: string;
}

export interface FeatureExplanationValue {
  checklist: string[];
  file_type: string;
  file_url: string;
  id: string;
  title: string;
  video_thumbnail: string;
}

export interface TestimonialValue {
  description: string;
  id: string;
  name: string;
  profile_image: string;
  testimonial: string;
  thumb: string;
  video_type: string;
  video_url: string;
}

export interface FaqValue {
  answer: string;
  id: string;
  question: string;
}

export interface Background {
  image: string;
  primary_color: string;
  secondary_color: string;
}

export interface Cta {
  clicked_url: string;
  color: string;
  text: string;
}

export interface GroupJoinEngagementValue {
  background: Background;
  cta: Cta;
  description: string;
  description_color: string;
  id: string;
  thumbnail: string;
  title: string;
  title_color: string;
  top_left_icon_img: string;
}

// ========== Section Interfaces (Discriminated Union) ==========

export interface InstructorsSection {
  type: "instructors";
  name: string;
  description: string;
  bg_color: string;
  order_idx: number;
  values: InstructorValue[];
}

export interface OffersSection {
  type: "offers";
  name: string;
  description: string;
  bg_color: string;
  order_idx: number;
  values: OfferValue[];
}

export interface FeaturesSection {
  type: "features";
  name: string;
  description: string;
  bg_color: string;
  order_idx: number;
  values: FeatureValue[];
}

export interface PointersSection {
  type: "pointers";
  name: string;
  description: string;
  bg_color: string;
  order_idx: number;
  values: PointerValue[];
}

export interface AboutSection {
  type: "about";
  name: string;
  description: string;
  bg_color: string;
  order_idx: number;
  values: AboutValue[];
}

export interface FeatureExplanationSection {
  type: "feature_explanations";
  name: string;
  description: string;
  bg_color: string;
  order_idx: number;
  values: FeatureExplanationValue[];
}

export interface GroupJoinEngagementSection {
  type: "group_join_engagement";
  name: string;
  description: string;
  bg_color: string;
  order_idx: number;
  values: GroupJoinEngagementValue[];
}

export interface TestimonialSection {
  type: "testimonial";
  name: string;
  description: string;
  bg_color: string;
  order_idx: number;
  values: TestimonialValue[];
}

export interface FaqSection {
  type: "faq";
  name: string;
  description: string;
  bg_color: string;
  order_idx: number;
  values: FaqValue[];
}

// ========== Unified Value Type ==========

export type Value =
  | InstructorValue
  | OfferValue
  | FeatureValue
  | PointerValue
  | AboutValue
  | FeatureExplanationValue
  | GroupJoinEngagementValue
  | TestimonialValue
  | FaqValue;

// ========== Unified Section Type ==========

export type Section =
  | InstructorsSection
  | OffersSection
  | FeaturesSection
  | PointersSection
  | AboutSection
  | FeatureExplanationSection
  | GroupJoinEngagementSection
  | TestimonialSection
  | FaqSection;

// ========== Main Product & API ==========

export interface ProductData {
  slug: string;
  id: number;
  title: string;
  description: string;
  platform: string;
  type: string;
  modality: string;
  old_info: OldInfo;
  start_at: string;
  media: Media[];
  checklist: Checklist[];
  seo: Seo; // Was Seo[] — corrected to a single Seo object
  cta_text: CtaText;
  sections: Section[];
  is_cohort_based_course: boolean;
  secondary_cta_group: unknown[]; // can be refined later
  delivery_method: string;
}

export interface ApiResponse {
  code: number;
  data: ProductData;
  error: unknown[]; // can be refined if structure known
  message: string;
  payload: unknown[];
  status_code: number;
}
