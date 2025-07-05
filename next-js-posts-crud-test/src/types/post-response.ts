import { Meta } from "./meta";
import { NavigationLinks } from "./navigation-links";
import { Post } from "./post";

export interface PostsResponse {
  data: Post[];
  links: NavigationLinks;
  meta: Meta;
  status: 'success' | 'error';
  message: string;
}
