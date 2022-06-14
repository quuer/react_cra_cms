import session from './session'
import ErrorNotice from './error'

const request = (url, options) => {
  const { method, body } = options
  const headers = {}
  Object.assign(headers,
    {
      'Content-type': 'application/json',
      token: session.get('session')?.token
    }
  )
  let newOptions
  // POST请求
  if (method === 'POST') {
    // 参数为FormData格式
    if (body?.data instanceof FormData) {
      Object.assign(headers, { 'Content-type': 'multilpart/form-data' })
      newOptions = { ...options, headers }
    }
    else {
      newOptions = {
        headers,
        method,
        body: body ? JSON.stringify(body.data) : null
      }
    }
  }
  // 非POST请求
  else {
    newOptions = {
      ...options,
      headers,
      body: body ? JSON.stringify(body.data) : null
    }
  }
  return fetch(url, newOptions).then(res => res.json()).then(res => res).catch(err => {
    ErrorNotice('网络请求错误', err.message)
  })
}

export default request
