import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios"
import Swal from "sweetalert2"

const axiosInstance: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || "",
  headers: {
    "Content-Type": "application/json",
  },
})

export function apiRequest<T = any>(config: AxiosRequestConfig): Promise<AxiosResponse<T>> {
  try {
    console.log("API Request Config:", process.env.NEXT_PUBLIC_API_BASE_URL)
    if (!config.url) {
      throw new Error("Request URL is required")
    }
    return axiosInstance.request<T>(config)
  } catch (error) {
    console.error("API Request Error:", error)
    return Promise.reject(error)
  }
}

export function showAlert(
  title: string,
  text?: string,
  icon: "success" | "error" | "warning" | "info" | "question" = "info"
) {
  return Swal.fire({
    title,
    text,
    icon,
    confirmButtonText: "OK",
  })
}

export async function showConfirm(
  title: string,
  text?: string,
  confirmButtonText: string = "Yes",
  cancelButtonText: string = "No"
) {
  return await Swal.fire({
    title,
    text,
    icon: "warning",
    showCancelButton: true,
    confirmButtonText,
    cancelButtonText,
  })
}

export { axiosInstance }
