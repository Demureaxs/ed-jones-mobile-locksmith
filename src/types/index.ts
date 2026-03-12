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
