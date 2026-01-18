export interface Speaker {
  name: string;
  role?: string;
  avatar?: string;
}

export interface Webinar {
  id: string;
  title: string;
  description: string;
  videoEmbedId: string;
  videoThumbnail: string;
  type: string;
  speakers: Speaker[];
  learnPoints: string[];
  program: string[];
  targetAudience: string[];
  materialsUrl: string;
  relatedWebinars: {
    upcoming: RelatedWebinar[];
    past: RelatedWebinar[];
  };
}

export interface RelatedWebinar {
  id: number;
  title: string;
  date: string;
  image: string;
  speakers?: Speaker[];
}
