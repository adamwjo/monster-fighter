export default class Adapter {
  constructor(base_url) {
    this.BASE_URL = base_url
  }

  getAll(endpoint) {
    return fetch(`${this.BASE_URL}/${endpoint}`)
      .then(res => res.json())
  }
}
