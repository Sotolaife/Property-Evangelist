export type Property = {
  id: string;
  title: string;
  price: number;
  location: string;
  type: 'Villa' | 'Apartment' | 'House' | 'Penthouse' | 'Cottage';
  beds: number;
  baths: number;
  area: number;
  description: string;
  features: string[];
  imageIds: string[];
  isFeatured?: boolean;
};

export type Testimonial = {
  id: number;
  name: string;
  location: string;
  rating: number;
  quote: string;
  imageId: string;
};

export type TeamMember = {
  id: number;
  name: string;
  role: string;
  bio: string;
  imageId: string;
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  content: string;
  imageId: string;
  isPopular?: boolean;
};

export type FaqItem = {
  id: string;
  question: string;
  answer: string;
};
