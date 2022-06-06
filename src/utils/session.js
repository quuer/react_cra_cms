// 简化sessionStorage操作

const session = {

  get(key) {
    return sessionStorage.getItem(key) ? JSON.parse(sessionStorage.getItem(key)) : null
  },
  set(key, value) {
    return typeof value === 'object' ? sessionStorage.setItem(key, JSON.stringify(value)) : JSON.parse(sessionStorage.getItem(key))
  },
  remove(key) {
    return sessionStorage.removeItem(key)
  },
  clear() {
    return sessionStorage.clear()
  }
}

export default session
