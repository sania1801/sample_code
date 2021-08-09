import { AxiosClient } from '../constants'

function getAllCategories() {
  return AxiosClient.get('/faq_categories')
}
const api = {
  getAllCategories,
}

export default api
