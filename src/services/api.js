// api.js

import axios from 'axios'

// Create a new Axios instance with custom configurations if needed
const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000/', // Replace this with your API base URL
  timeout: 10000, // Request timeout in milliseconds
  headers: {
    'Content-Type': 'application/json' // Specify the request content type
  }
})

// Export functions to make GET and POST requests
export const apiGet = (url, params) => axiosInstance.get(url, { params })
export const apiPost = (url, data) => axiosInstance.post(url, data)
