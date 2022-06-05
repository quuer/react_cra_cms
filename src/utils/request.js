
const request = (url, options) => {

  const headers = {}
  headers['Content-type'] = 'application/json'
  headers['token'] = 'testtoken'

  const defaultOptions = {
    headers,
    method: 'POST'
  }
  let newOptions = null
  if (options.method === 'POST') {
    newOptions = {
      ...defaultOptions,
      ...options,
      body: JSON.stringify(options.body)
    }
  }
}

export default request
