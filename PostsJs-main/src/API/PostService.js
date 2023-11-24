import axios from "axios";

export default class PostService {
    static async getAll(limit = 10, page = 1) {
        return await axios.get('http://127.0.0.1:8000/posts/?format=json', {
            params: {
                _limit: limit,
                _page: page
            }
        });
    }

    static async getById(id) {
        return await axios.get(`http://127.0.0.1:8000/posts/${id}/?format=json`);
    }

    static async getCommentsByPostId(id) {
        return await axios.get(`http://127.0.0.1:8000/posts/${id}/comments/?format=json`);
    }
}
