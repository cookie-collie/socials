export function useScrollToTop(ref: any) {
    const _scrollToTop = () => {
        if (ref.current) {
            ref.current.scroll({
                top: 0,
                behavior: "smooth",
            })
        }
    }

    return _scrollToTop
}
