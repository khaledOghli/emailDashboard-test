export enum EmailsFolderEnum {
  'inbox' = 1,
  'archive' = 2,
}
export interface Email {
  id: number;
  from: string;
  to: string;
  subject: string;
  content: string;
  folder: number;
  date: string;
  attachment: boolean;
  starred: boolean;
  important: boolean;
  unread: boolean;
  deleted: boolean;
}
