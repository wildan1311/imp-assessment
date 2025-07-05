import Link from "next/link"
import { getAllPosts } from "@/lib/posts"
import DeletePostButton from "@/components/delete-post-button"
import { ListPosts } from "@/components/pages/posts/list-posts";

export default async function PostsPage() {
  return (
    <ListPosts />
  );
}
