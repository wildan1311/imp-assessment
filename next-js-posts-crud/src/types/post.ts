export interface Post {
  id: string
  title: string
  content: string
  author: string
  status: "draft" | "published"
  published_at?: string
  created_at: string
  updated_at: string
}