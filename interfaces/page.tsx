export interface PageData {
  id: number;
  pagename: string;
  name: string;
  link: string;
  header: string;
  subtitle: string;
  buttonText: string;
  topPanel: TopPanel;
  gallery: Gallery;
}

export interface TopPanel {
  title: string;
  content: string;
}

export interface Gallery {
  title: string;
  content: string;
  galleryItem: GalleryItem;
}

export interface GalleryItem {
  name: string;
  image: string;
}
