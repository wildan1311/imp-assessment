import Link from "next/link"

export default function HomePage() {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Posts CRUD App</h1>
          <p className="py-6">
            A simple blog application built with Next.js App Router and DaisyUI. Create, read, update, and delete posts
            with ease.
          </p>
          <div className="space-x-4">
            <Link href="/posts" className="btn btn-primary">
              View All Posts
            </Link>
            <Link href="/posts/create" className="btn btn-outline">
              Create New Post
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
