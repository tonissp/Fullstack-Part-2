import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
  return axios.get(baseUrl)
}

const create = newObject => {
  return axios.post(baseUrl, newObject)
}

const remove = personId => {
  const request = axios.delete(`${baseUrl}/${personId}`)
  return request.then(response => response.data)
}

const put = (newObject, personId) => {
  const request = axios.put(`${baseUrl}/${personId}`, newObject)
  return request.then(response => response.data)
}


export default { 
  getAll: getAll, 
  create: create,
  remove: remove,
  put: put
}