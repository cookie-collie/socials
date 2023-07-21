import { useState } from "react"

export function useRadioOnChange(defaultValue: string) {
    const [value, setValue] = useState(defaultValue)
    return { value, setValue }
}
