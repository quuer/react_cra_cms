import request from '../utils/request'

export const getApiTest = (data) => {
  return request('/api/free/day?appid=65785499&appsecret=I1sN3GMv&unescape=1', { method: 'POST', body: data })
}
