export default class Adapter {
  constructor(base_url) {
    this.BASE_URL = base_url
  }

  getAll(endpoint) {
    return fetch(`${this.BASE_URL}/${endpoint}`)
      .then(res => res.json())
  }

  post(endpoint, body) {
    return fetch(`${this.BASE_URL}/${endpoint}`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(body)
    })
      .then(res => res.json())
  }

  loginUser(body) {
    return fetch(`${this.BASE_URL}/login`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(body)
    })
      .then(res => {
        if (res.ok) {
          return res.json()
        } else {
          throw res
        }
      })
    }
  // Will need to refactor all fetches to user-specific resources to include this authorization header

  // End of Adapter class
}
