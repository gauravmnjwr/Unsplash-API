import axios from "axios";

export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers:{
        Authorization : 'Client-ID _bU6n_jr-6-0dY4nTj2Nvus9LZvYp8RGTolBNvbYA40'
    }
})