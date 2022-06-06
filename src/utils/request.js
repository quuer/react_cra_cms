import session from './session'

const request = (url, options) => {
  const { method, body } = options
  const headers = {}
  Object.assign(headers,
    {
      ['Content-type']: 'application/json',
      token: session.get('session')?.token
    }
  )
  let newOptions = null
  // POST请求
  if (method === 'POST') {
    // 参数为FormData格式
    if (body?.data instanceof FormData) {
      Object.assign(headers, { ['Content-type']: 'multilpart/formdata' })
      newOptions = { ...options, headers }
    }
    else {
      newOptions = {
        headers,
        method,
        body: body.data ?? JSON.stringify(body)
      }
    }
  }
  // 非POST请求
  else {
    newOptions = {
      ...options,
      headers,
      body: body.data ?? JSON.stringify(body)
    }
  }
  return fetch(url, newOptions).
    then(res => res.json()).
    then(res => res.data).
    catch(err => {
      console.log(err, '◀◀◀err')
    })
}

export default request
