import axios from 'axios'

const api = axios.create({
  baseURL: process.env.API_URL,
  headers: {
    Authorization: process.env.TOKEN
  }
})

export default api
