// 简化sessionStorage操作
const SESSION = 'session'
const session = {

  get(key) {
    return sessionStorage.getItem(key) ? JSON.parse(sessionStorage.getItem(key)) : null
  },
  set(key, value) {
    return typeof value === 'object' ? sessionStorage.setItem(key, JSON.stringify(value)) : sessionStorage.setItem(key, value)
  },
  remove(key) {
    return sessionStorage.removeItem(key)
  },
  clear() {
    return sessionStorage.clear()
  },
  getToken() {
    return sessionStorage.getItem(SESSION) && JSON.parse(sessionStorage.getItem(SESSION)).token
  }
}

export default session
