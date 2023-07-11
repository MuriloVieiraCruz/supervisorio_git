import axios from "axios";

const blogFetch = axios.create({
    baseURL:"https://supervisorio-production.up.railway.app/",
    headers: {
        "Content-Type" : "application/json",
    },
});

export default blogFetch;