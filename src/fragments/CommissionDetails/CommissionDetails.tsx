import { Heading, Stack } from "@chakra-ui/react"
import { useEffect } from "react"
import { FirstTwoPage } from "./FirstTwoPages"
import { LastPage } from "./LastPage"
import { FetchObject } from "../../utils"

interface CommDetailsProps {
    currentPage?: number
    setMaxPage?: (page: number) => void
    fetchedData: Pick<FetchObject, "CommissionDetails"> 
}

export const CommissionDetails = (props: CommDetailsProps) => {
    const { currentPage = 1, setMaxPage, fetchedData } = props

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
                <FirstTwoPage fetchedData={fetchedData.CommissionDetails.details} />
            ) : currentPage === 2 ? (
                <FirstTwoPage fetchedData={fetchedData.CommissionDetails.paymentProcess} />
            ) : (
                <LastPage
                    fetchedData={{
                        willDraw: fetchedData.CommissionDetails.willDraw,
                        willNotDraw: fetchedData.CommissionDetails.willNotDraw,
                    }}
                />
            )}
        </Stack>
    )
}
