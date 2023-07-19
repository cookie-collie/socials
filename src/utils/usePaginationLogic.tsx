import { useState } from "react"

export function usePaginationLogic(defaultPage: number) {
    const [currentPage, setCurrentPage] = useState(defaultPage)
    return { currentPage, setCurrentPage }
}
