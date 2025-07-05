"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import QuillEditor from "./quill-editor";
import { useState } from "react";
import { createPost, updatePost } from "@/lib/posts";
import { showAlert } from "@/lib/utils";

interface PostFormProps {
  defaultValues?: {
    id?: string;
    title: string;
    content: string;
    author: string;
    status?: "draft" | "published";
  };
}

export default function PostForm({ defaultValues }: PostFormProps) {
  const [title, setTitle] = useState(defaultValues?.title || "");
  const [author, setAuthor] = useState(defaultValues?.author || "");
  const [status, setStatus] = useState(defaultValues?.status || "draft");
  const [content, setContent] = useState(defaultValues?.content || "");

  async function handleSubmit() {
    if (!title || !content || !author || !status) {
      showAlert(
        "Error",
        "Please fill in all fields before submitting.",
        "error"
      );
    }

    try {
      let post;
      if (defaultValues?.id) {
        post = await updatePost(defaultValues!.id, {
          title,
          content,
          author,
          status,
        });
      } else {
        post = await createPost({ title, content, author, status });
      }
      window.location.href = `/posts/${post.data.id}`;
    } catch (error) {
      showAlert(
        "Error",
        "Failed to save post. Please try again later.",
        "error"
      );
    }
  }

  return (
    <div className="space-y-6">
      <div className="form-control">
        <label className="label">
          <span className="label-text">Title</span>
        </label>
        <input
          type="text"
          name="title"
          defaultValue={title}
          className="input input-bordered w-full"
          placeholder="Enter post title"
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>

      <div className="form-control">
        <label className="label">
          <span className="label-text">Author</span>
        </label>
        <input
          type="text"
          name="author"
          defaultValue={author}
          className="input input-bordered w-full"
          placeholder="Enter author name"
          onChange={(e) => setAuthor(e.target.value)}
          required
        />
      </div>

      <div className="form-control">
        <label className="label">
          <span className="label-text">Status</span>
        </label>
        <select
          title="Select post status"
          name="status"
          defaultValue={status}
          className="select select-bordered w-full"
          onChange={(e) => setStatus(e.target.value as "draft" | "published")}
        >
          <option value="draft">Draft</option>
          <option value="published">Published</option>
        </select>
      </div>

      <div className="form-control">
        <label className="label">
          <span className="label-text">Content</span>
        </label>
        <QuillEditor
          name="content"
          defaultValue={content}
          onChange={setContent}
        />
      </div>

      <div className="flex gap-4">
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleSubmit}
        >
          {defaultValues ? "Update Post" : "Create Post"}
        </button>
        <Link href="/posts" className="btn btn-outline">
          Cancel
        </Link>
      </div>
    </div>
  );
}
