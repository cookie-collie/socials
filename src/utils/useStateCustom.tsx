import { useState } from "react"

export function useStateCustom(defaultValue: any) {
    const [value, setValue] = useState(defaultValue)
    return { value, setValue }
}
