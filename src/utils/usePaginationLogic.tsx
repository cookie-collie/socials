import { useState } from "react"

export function usePaginationLogic(defaultPage: number) {
    const [currentPage, setCurrentPage] = useState(defaultPage)
    const [maxPage, setMaxPage] = useState(1)
    return { currentPage, setCurrentPage, maxPage, setMaxPage }
}
