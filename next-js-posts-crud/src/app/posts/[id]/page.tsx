import Link from "next/link"
import { notFound } from "next/navigation"
import { getPostById } from "@/lib/posts"
import DeletePostButton from "@/components/delete-post-button"

interface PostPageProps {
  params: Promise<{ id: string }>
}

export default async function PostPage({ params }: PostPageProps) {
  const { id } = await params
  const post = await getPostById(id)

  if (!post) {
    notFound()
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-6">
        <Link href="/posts" className="btn btn-ghost">
          ← Back to Posts
        </Link>
      </div>

      <article className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <h1 className="text-4xl font-bold mb-4">{post.title}</h1>

          <div className="flex justify-between items-center mb-6 text-sm text-gray-600">
            <div>
              <p>By {post.author}</p>
              <p>
                Published:{" "}
                {post.published_at
                  ? new Date(post.published_at).toLocaleDateString()
                  : "Draft"}
              </p>
              <p>
                Updated:{" "}
                {post.updated_at
                  ? new Date(post.updated_at).toLocaleDateString()
                  : "Draft"}
              </p>
            </div>
            <div className="flex gap-2">
              <Link href={`/posts/${post.id}/edit`} className="btn btn-outline btn-sm">
                Edit Post
              </Link>
              <DeletePostButton postId={post.id} />
            </div>
          </div>

            <div className="prose max-w-none">
            <div
              className="text-lg leading-relaxed whitespace-pre-wrap"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
            </div>
        </div>
      </article>
    </div>
  )
}
