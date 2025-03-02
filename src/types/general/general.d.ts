type TImageGallery = {
  title?: string;
  image?: string;
  shortDesc?: string;
  longDesc?: string;
};

type TSkill = {
  name: string;
  percentage: number;
  thumb: string;
  level: string;
};

type TTool = {
  name: string;
  thumb: string;
};

type TGeneral = {
  name: string;
  title: string;
  bio?: string;
  about?: string; // Jodit data
  profilePic: string;
  imageGallery?: TImageGallery[];
  resume: string;
  contact?: {
    email?: string;
    whatsApp?: string;
    address?: string;
    city?: string;
    state?: string;
    zip?: string;
    country?: string;
  };
  social?: {
    facebook?: string;
    twitter?: string;
    linkedin?: string;
    instagram?: string;
  };
  skills: TSkill[];
  toots: TTool[];
  siteData: {
    name?: string;
    logo?: string;
    title?: string;
    description?: string;
  };
  seoData: {
    title?: string;
    description?: string;
    keywords?: string[];
    openGraph: {
      description?: string;
      imagesUrl?: string;
    };
    siteUrl?: string;
  };
};

export { TGeneral, TImageGallery, TSkill, TTool };
