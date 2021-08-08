import axios from 'axios'

export const BASE_API_URL = process.env.NEXT_PUBLIC_BASE_API_URL
export const GA_TRACKING_ID = process.env.GA_TRACKING_ID

export const AxiosClient = axios.create({
  baseURL: BASE_API_URL,
  withCredentials: true,
})
