export interface Article {
  id: number;
  title: string;
  date: string;
  description: string;
  tag: string;
  image: string;
  slug?: string;
  content?: string;
}

export interface BlogCategory {
  id: string;
  label: string;
  count?: number;
}
