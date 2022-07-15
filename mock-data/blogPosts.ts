import { IBlogPost } from "../interfaces/IBlogPost";

// Defined mocked data:
export const blogPosts: Array<IBlogPost> = [
  {
    id: 0,
    title: "Blog Post 0",
    description: "This is the description for blog post 0",
    viewCount: 103,
    publishedAt: "2020-03-15T10:00:00.000Z",
  },
  {
    id: 1,
    title: "Blog Post 1",
    description: "This is the description for blog post 1",
    viewCount: 295,
    publishedAt: "2020-06-07T12:30:00.000Z",
  },
  {
    id: 2,
    title: "Blog Post 2",
    description: "This is the description for blog post 2",
    viewCount: 592,
    publishedAt: "2020-07-15T09:12:34.000Z",
  },
  {
    id: 3,
    title: "Blog Post 3",
    description: "This is the description for blog post 3",
    viewCount: 122,
    publishedAt: "2020-01-01T00:00:00.000Z",
  },
];
