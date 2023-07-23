import axios, { AxiosError } from "axios"

const DEV_URL = process.env.REACT_APP_DEV_API_URL

export function testAPI() {
    return axios.get(`${DEV_URL}`).then((res) => {
        console.log(res)
    })
}

export function testSend(form: any) {
    return axios.post(`${DEV_URL}/test-send`, form)
}

export async function sendRequestForm(
    form: any,
    setStatus?: (status: string) => void
) {
    return await axios
        .post(`${DEV_URL}/api/request`, form)
        .then((res) => {
            setStatus?.("OK")
            console.log(res)
        })
        .catch((error: AxiosError | Error) => {
            setStatus?.("Error")
            console.log("Error: ", error.message)
        })
}
