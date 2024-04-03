
export class BandSiteApi {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.baseUrl = "https://unit-2-project-api-25c1595833b2.herokuapp.com";
  }
  async postComment(name, comment) {
    try {
      const commentPost = await axios.post(
        `${this.baseUrl}/comments?api_key=${this.apiKey}`,
        { name: name, comment: comment }
      );
      return commentPost.data;
    } catch {}
  }

  async getComments() {
    try {
      const commentRespond = await axios.get(
        `${this.baseUrl}/comments?api_key=${this.apiKey}`
      );

      return commentRespond.data.sort((a, b) => b.timestamp - a.timestamp);
    } catch {}
  }

  async getShows() {
    try {
      const showSection = await axios.get(
        `${this.baseUrl}/showdates?api_key=${this.apiKey}`
      );
      return showSection.data;
    } catch {}
  }
}



