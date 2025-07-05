import Link from "next/link"

export default function Navigation() {
  return (
    <div className="navbar bg-base-100 shadow-lg">
      <div className="container mx-auto">
        <div className="flex-1">
          <Link href="/" className="btn btn-ghost text-xl">
            Posts App
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link href="/posts">All Posts</Link>
            </li>
            <li>
              <Link href="/posts/create" className="btn btn-primary btn-sm">
                Create Post
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
