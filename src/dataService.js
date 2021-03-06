export default {
  searchId: null,
  url: "https://front-test.beta.aviasales.ru",
  async getData() {
    if (this.searchId === null) {
      let searchId = await this.getSearchId();
      this.searchId = searchId;
    }

    return fetch(`${this.url}/tickets?searchId=${this.searchId}`)
  },
  async getSearchId() {
    let searchId = fetch(`${this.url}/search`)
    .then(res => res.json())
    .then(({searchId}) => searchId = searchId);

    return searchId;
  }
}

