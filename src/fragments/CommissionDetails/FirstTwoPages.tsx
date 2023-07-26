import { Box, List, ListIcon, ListItem } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { MdCookie } from "react-icons/md"

interface FetchObject {
    CommissionDetails: ContentObject
}

interface ContentObject {
    details: string[]
    paymentProcess: string[]
}

interface props {
    pageName: "comm-details" | "payment-process"
}

export const FirstTwoPage = ({ pageName }: props) => {
    const [_commDetails, _setCommDetails] = useState<string[]>([])
    const [_paymentProcess, _setPaymentProcess] = useState<string[]>([])
    const [_isFetched, _setIsFetched] = useState<boolean>(false)

    useEffect(() => {
        fetch("resources/jsons/texts.json")
            .then((res) => res.json())
            .then((data: FetchObject) => {
                _setCommDetails(data.CommissionDetails.details)
                _setPaymentProcess(data.CommissionDetails.paymentProcess)
                _setIsFetched(true)
            })
    }, [])

    return (
        <>
            {_isFetched ? (
                <List spacing={4}>
                    {(pageName === "comm-details"
                        ? _commDetails
                        : _paymentProcess
                    ).map((item, i) => (
                        <ListItem key={"comm-details-" + i}>
                            <ListIcon>
                                <MdCookie />
                            </ListIcon>
                            {item}
                        </ListItem>
                    ))}
                </List>
            ) : (
                <Box minH={60} />
            )}
        </>
    )
}
