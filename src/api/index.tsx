import axios from "axios"

export function testAPI() {
    return axios.get(process.env.REACT_APP_API_URL!).then((res) => {
        console.log(res)
    })
}
