export interface ConfigData {
  businessName: string;
  industry: string;
  phone: string;
  email: string;
  address: string;
  services: ServicePage[];
  blogPosts: BlogPost[];
}

export interface ServicePage {
  id: string;
  title: string;
  summary: string;
  htmlContent?: string;
  iconName?: string;
  tag?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  publishedAt: string;
  excerpt?: string;
  htmlContent?: string;
}

export interface GmbMicroService {
  name: string;
  price?: string;
  description: string;
}

export interface HubService {
  slug: string;
  title: string;
  shortSummary: string;
  metaDescription: string;
  microServices: GmbMicroService[];
  richBaseContent: string; // Contains placeholders like {location} and {postcode}
  iconName?: string;
}

export interface LocationData {
  slug: string;
  name: string;
  postcode?: string;
  lat: number;
  lng: number;
  keyRoute: string;
  parentLocation?: string;
}

export interface LocalReview {
  name: string;
  role: string;
  quote: string;
  location: string;
}

