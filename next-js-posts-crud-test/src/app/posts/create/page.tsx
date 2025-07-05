import { redirect } from "next/navigation"
import { createPost } from "@/lib/posts"
import PostForm from "@/components/post-form"

export default function CreatePostPage() {
  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Create New Post</h1>
      <PostForm />
    </div>
  )
}
