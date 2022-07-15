// // Completed IImagePost interface
export interface IImagePost {
  id: number;
  imageUrl: string;
  caption: string;
  comments: Array<string>;
  publishedAt: string;
}