import axios from "axios"

const API_URL = process.env.REACT_APP_API_URL?.replace(/["]+/g, "")

export function testAPI() {
    return axios.get(`${API_URL}`).then((res) => {
        console.log(res)
    })
}

export function testSend(form: any) {
    return axios.post(`${API_URL}/test-send`, form)
}

export async function sendRequestForm(
    form: any,
    CAPTCHAToken: string,
    setStatus?: (status: string) => void
) {
    return await axios
        .post(`${API_URL}/api/request`, {
            form: form,
            CAPTCHAToken: CAPTCHAToken,
        })
        .then(() => {
            setStatus?.("OK")
        })
        .catch(() => {
            setStatus?.("Error")
        })
}
