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
    .catch((error: any) => {
      if (error.response) {
        console.log('Error reponse: ', error.response.data);
        return { data: null, errors: error.response.data }
      } else {
        return { data: null, errors: error }
      }
    })
}

const setAxiosToken = (token: string) => {
  axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`
  localStorage.setItem('token', token)
}

const resetAxiosToken = () => {
  const token = localStorage.getItem('token')
  if (token) {
    axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`
  }
}

const removeAxiosToken = () => {
  localStorage.removeItem('token')
  axiosInstance.defaults.headers.common['Authorization'] = null

}

export { axiosExec, setAxiosToken, resetAxiosToken, removeAxiosToken }