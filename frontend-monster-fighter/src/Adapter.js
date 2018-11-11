export default class Adapter {
  constructor(base_url) {
    this.BASE_URL = base_url
  }

  getAll(endpoint) {
    return fetch(`${this.BASE_URL}/${endpoint}`)
      .then(res => res.json())
  }

  login(token) {
    return fetch(`${this.BASE_URL}/login`, {
      method: 'get',
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
  }

  post(endpoint, body) {
    return fetch(`${this.BASE_URL}/${endpoint}`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    })
      .then(res => res.json())
  }
  // End of Adapter class
}
