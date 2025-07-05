import { redirect, notFound } from "next/navigation"
import { getPostById, updatePost } from "@/lib/posts"
import PostForm from "@/components/post-form"

interface EditPostPageProps {
  params: Promise<{ id: string }>
}

export default async function EditPostPage({ params }: EditPostPageProps) {
  const { id } = await params
  const post = await getPostById(id)

  if (!post) {
    notFound()
  }

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Edit Post</h1>
      <PostForm
        defaultValues={{
          id: post.id,
          title: post.title,
          content: post.content,
          author: post.author,
          status: post.status || "draft",
        }}
      />
    </div>
  )
}
