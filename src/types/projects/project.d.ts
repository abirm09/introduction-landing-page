type TProjectLinks = {
  name: string;
  link: string;
};

type TProjectType = "Web" | "Mobile" | "Desktop";

type TProjectVideoLinks = { link: string; order: number };

type TProject = {
  name: string; //Project name
  thumbnail: string; //Thumbnail image
  shortDescription?: string; //Short description
  description?: string; //Long description (Jodit Editor)
  projectType?: TProjectType; //Project type (Web, Mobile, Desktop)
  links?: TProjectLinks[]; // Github, Playstore, Appstore, etc.
  isActive: boolean; //Is project active
  tags?: string[]; //Tags
  techStack?: string[]; //Tech stack
  keyFeatures?: string[]; //Key features
  challenges?: string[]; //Challenges faced during development
  learnings?: string[]; //Learnings from the project
  screenshots?: string[]; //Screenshots of the project
  videoLinks?: TProjectVideoLinks[]; //Video links
  externalLink?: string; //External links
  redirectToExternalLink?: boolean; //Redirect to external link
  order: number; //Order of the project
};

export type { TProject, TProjectLinks };
