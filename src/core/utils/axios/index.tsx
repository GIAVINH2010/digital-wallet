import axios from 'axios'

const axiosInstance: any = axios.create({
  baseURL: process.env.REACT_APP_API_ENDPOINT,
  headers: {
    'Content-Type': 'application/json'
  }
})

const axiosExec = (config: any) => {
  return axiosInstance(config)
    .then((res: any) => ({ data: res.data, errors: null }))
    .catch((error: any) => ({ data: null, errors: error }))
}

export { axiosExec }