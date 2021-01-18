import axios from "axios";

const KEY = 'AIzaSyCFhh3aWLls_WDYGxZLCNv-8mdizQ7ibD8';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResult: 5,
        key: KEY
    }
}) 