export interface PageData {
  id: number;
  pagename: string;
  name: string;
  link: string;
  header: string;
  subtitle: string;
  buttonText: string;
  topPanel: TopPanel;
}

export interface TopPanel {
  title: string;
  content: string;
}
