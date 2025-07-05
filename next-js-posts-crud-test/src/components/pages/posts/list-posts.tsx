"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Post } from "@/types/post";
import { apiRequest, showAlert } from "@/lib/utils";
import { getAllPosts } from "@/lib/posts";
import DeletePostButton from "@/components/delete-post-button";
import Pagination from '../../pagination';

export function ListPosts() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [dataRequest, setDataRequest] = useState<any>(null);

  async function fetchPosts(page=1) {
      try {
        const response = await getAllPosts(page);
        setDataRequest(response);
        setPosts(response.data);
      } catch (error) {
        showAlert('Error', 'Failed to fetch posts. Please try again later.', 'error');
      }
    }

  useEffect(() => {
    fetchPosts();
  }, []);

  if (posts.length === 0) {
    return (
      <div className="text-center py-12">
        <h1 className="text-3xl font-bold mb-4">No Posts Found</h1>
        <p className="text-gray-600 mb-6">Get started by creating your first post.</p>
        <Link href="/posts/create" className="btn btn-primary">
          Create First Post
        </Link>
      </div>
    );
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">All Posts</h1>
        <Link href="/posts/create" className="btn btn-primary">
          Create New Post
        </Link>
      </div>

      <div className="grid gap-6">
        {posts.map((post) => (
          <div key={post.id} className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">{post.title}</h2>
              <div dangerouslySetInnerHTML={{ __html: post.content.length > 150 ? `${post.content.substring(0, 150)}...` : post.content }} className="text-gray-600">
              </div>
              <div className="flex justify-between items-center mt-4">
                <div className="text-sm text-gray-500">
                  <p>By {post.author}</p>
                  <p>
                    {typeof post.created_at === "string"
                      ? new Date(post.created_at).toLocaleDateString()
                      : post.created_at}
                  </p>
                </div>
                <div className="card-actions">
                  <Link href={`/posts/${post.id}`} className="btn btn-primary btn-sm">
                    Read More
                  </Link>
                  <Link href={`/posts/${post.id}/edit`} className="btn btn-outline btn-sm">
                    Edit
                  </Link>
                  <DeletePostButton postId={post.id} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Pagination links={dataRequest.meta.links} onPageChange={fetchPosts} />
    </div>
  );
}