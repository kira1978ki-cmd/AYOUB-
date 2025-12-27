
export interface VisualProject {
  id: string;
  image: string;
  category: 'code' | 'design' | 'motion';
  color: string;
}

export enum AppSection {
  HOME = 'home',
  GALLERY = 'gallery',
  INTERACT = 'interact',
  CONTACT = 'contact'
}
