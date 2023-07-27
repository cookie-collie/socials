import { Heading, Stack } from "@chakra-ui/react"
import { useEffect } from "react"
import { FirstTwoPage } from "./FirstTwoPages"
import { LastPage } from "./LastPage"

interface CommDetailsProps {
    currentPage?: number
    setMaxPage?: (page: number) => void
    fetchedContent: {
        details: string[]
        paymentProcess: string[]
        willDraw: string[]
        willNotDraw: string[]
    }
}

export const CommissionDetails = (props: CommDetailsProps) => {
    const { currentPage = 1, setMaxPage, fetchedContent } = props

    useEffect(() => {
        setMaxPage?.(3)
    }, [])

    return (
        <Stack color={"blackAlpha.700"} fontSize={"lg"} gap={8}>
            <Heading
                fontFamily={"Fredoka, Comfortaa, Arial"}
                size={"lg"}
                color={"blackAlpha.800"}
                textAlign={"center"}
            >
                {currentPage === 1
                    ? "Process Details"
                    : currentPage === 2
                    ? "Payment Details"
                    : currentPage === 3
                    ? "What I will/will not draw"
                    : ""}
            </Heading>

            {currentPage === 1 ? (
                <FirstTwoPage fetchedContent={fetchedContent.details} />
            ) : currentPage === 2 ? (
                <FirstTwoPage fetchedContent={fetchedContent.paymentProcess} />
            ) : (
                <LastPage
                    fetchedContent={{
                        willDraw: fetchedContent.willDraw,
                        willNotDraw: fetchedContent.willNotDraw,
                    }}
                />
            )}
        </Stack>
    )
}
