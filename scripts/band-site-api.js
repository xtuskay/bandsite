export class BandSiteApi {
    constructor(apiKey) {
        this.apiKey = apiKey;
        this.baseUrl = "https://unit-2-project-api-25c1595833b2.herokuapp.com/";
    }
    async postComment(name, comment) {
        console.log(this.apiKey);
        try {
            const commentPost = await axios.post(`${this.baseUrl}/comments?api_key=${this.apiKey}`, { "name": name, "comment": comment });
            return commentPost.data;
        } catch (err) {
            console.error(err);

        }
    }
    
    async getComments() {
        console.log("Test");
        try {

            const commentRespond = await axios.get(`${this.baseUrl}/comments?api_key=${this.apiKey}`);
            return commmentRespond.data.sort((a, b) => b.timestamp - a.timestamp);
        } catch (err) {
            console.error(err);
            
        }

    }

    async getShows() {
        console.log(this.apiKey);
        try {
            console.log("Test")
            const showSection = await axios.get(`${this.baseUrl}/showdates?api_key=${this.apiKey}`);
            console.log(showSection);
            return showSection.data;
        } catch (err) {
            console.error(err);
            
        }
    }

}



