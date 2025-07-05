// In-memory storage for demo purposes

import { Post } from "@/types/post"
import { apiRequest } from "./utils"
import { PostsResponse } from "@/types/post-response";

export async function getAllPosts(page: number = 1): Promise<PostsResponse> {
  const response = await apiRequest({
    method: "GET",
    url: `/posts?page=${page}`,
  })
  return response.data;
}

export async function getPostById(id: string): Promise<Post | null> {
  const response = await apiRequest({
    method: "GET",
    url: `/posts/${id}`,
  })
  return response.data.data;
}

export async function createPost(data: Omit<Post, "id" | "created_at" | "updated_at">) {
  const response = await apiRequest({
    method: "POST",
    url: `/posts`,
    data: {
      ...data,
    },
  })
  return response.data;
}

export async function updatePost(
  id: string,
  data: Partial<Omit<Post, "id" | "created_at" | "updated_at">>,
): Promise<Post | null> {
  const response = await apiRequest({
    method: "PUT",
    url: `/posts/${id}`,
    data: {
      ...data,
    },
  })
  return response.data;
}

export async function deletePost(id: string): Promise<boolean> {
  const response = await apiRequest({
    method: "DELETE",
    url: `/posts/${id}`,
  })
  return true;
}
