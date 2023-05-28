export interface Action {
  id: string | number;
  label: string;
  icon?: any;
  action: () => void;
}

export interface Activity {
  id: string;
  title: string;
  date: string;
  status: 'completed' | 'pending';
  author: string;
}

export interface Article {
  id: string;
  title: string;
  slug: string;
  author: string;
  date: string;
  content: any;
  publishedAt: string;
}

export interface Category {
  id: string;
  title: string;
  slug: string;
}

export interface NFT {
  id: string | number;
  name: string;
  owner: string;
  chain: string;
  image: any;
  ranking: string;
  rarity: string;
  link: string;
}

export interface Option {
  value: number | string;
  label: string;
}

export interface Question {
  question: string;
  answers: string[];
}

export interface Route {
  id: string;
  label: string;
  path: string;
  icon?: any;
  children?: { id: string; label: string; path: string }[];
}

export interface SpaceObject {
  id: any;
  name: string;
  constellation: string;
  image: any;
  abbreviation: string;
  rightAccession: string;
  declination: string;
  stellar: string;
  bvColor: string;
}

export interface Tab {
  id: string;
  name: string;
}

export interface Trivia {
  id: any;
  title: string;
  date: string;
  // status: 'Live' | 'Pending' | 'draft';
  status: string;
  author: string;
  questionCount: number;
  publishedAt: string;
  // init: () => void;
}
