"use client"

import { useRouter } from "next/navigation"
import { deletePost } from "@/lib/posts"
import { showAlert, showConfirm } from "@/lib/utils"

interface DeletePostButtonProps {
  postId: string
}

export default function DeletePostButton({ postId }: DeletePostButtonProps) {
  const router = useRouter()

  const handleDelete = async () => {
    const response =  await showConfirm(
      "Delete Post",
      "Are you sure you want to delete this post? This action cannot be undone."
    )
    if (response.isConfirmed) {
      try {
        const success = await deletePost(postId)
        if (success) {
          showAlert("Success", "Post deleted successfully.", "success")
          router.push("/posts")
          router.refresh()
        } else {
          alert("Failed to delete post")
        }
      } catch (error) {
        console.error("Error deleting post:", error)
        showAlert(
          "Error",
          "Failed to delete post. Please try again later.",
          "error"
        )
      }
    }
  }

  return (
    <button onClick={handleDelete} className="btn btn-error btn-sm">
      Delete
    </button>
  )
}
