import request from '../utils/request'

export const getUserData = (data) => {
  return request('/api/koa/user/query', { method: 'POST', body: data })
}
