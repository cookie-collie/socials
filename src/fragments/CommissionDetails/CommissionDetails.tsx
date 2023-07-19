import { Heading, List, ListIcon, ListItem, Stack } from "@chakra-ui/react"
import { MdCookie } from "react-icons/md"

interface CommDetailsProps {
    currentPage?: number
}
export const CommissionDetails = (props: CommDetailsProps) => {
    const { currentPage = 1 } = props
    const _commDetails = [
        <>
            Please include your contacts (Discord, Twitter, ...) when
            commissioning me.
        </>,

        <>
            A proper reference or visual representation of your character must
            be provided.
        </>,

        <>
            Please try to refrain from using a shaded reference for the
            commission. If you do not have a reference of any kind, the artwork
            depicting your character visually must not be heavily shaded. I am
            not responsible for wrong color usage due to heavily shaded
            references.
        </>,

        <>
            I only accept references in either PNG or JPEG format. Any
            references that do not conform to the format will be discarded.
        </>,

        <>
            A draft will be sent to you before the lining and coloring process.
            Please confirm the approval or request for any changes within 48
            hours after the draft is sent.
        </>,

        <>
            After your approval, any requests for changes will be charged a fee.
        </>,

        <>
            You may ask for the progress of the commission, but please be
            reasonable about the frequency.
        </>,

        <>
            After I send you the completed artwork, please make sure to check
            for any errors and details before confirming the final approval.
            Keep in mind that any errors made by me (e.g. Forget to color a
            part, patterns on the wrong side, missing accessories, …) are not
            charged any fees.
        </>,
    ]

    const _paymentProcess = [
        <>
            I accept payments via either Ko-fi or PayPal, preferably Ko-fi. For
            half body and full body commissions, please wait for the finalized
            price given by me before proceeding with any payment.
        </>,

        <>
            Payment must be paid in full before I start working on the
            commission.
        </>,

        <>
            (For local Vietnamese only) Payments can be made via local bank
            transfer or e-wallets. Please contact me for the payment details and
            methods.
        </>,
    ]

    const _willDraw = [<>SFW</>, <>Furries</>, <>Chibi-ish</>]
    const _willNotDraw = [
        <>NSFW</>,
        <>Overly complex characters</>,
        <>Human</>,
        <>Realistic</>,
        <>Gore</>,
        <>Mechs</>,
        <>Fetishes</>,
        <>Muscles</>,
        <>Religions</>,
        <>Licensed character</>,
        <>Self-harm</>,
        <>Any hateful content towards anyone or community</>,
    ]

    const _list =
        currentPage === 1
            ? _commDetails
            : currentPage === 2
            ? _paymentProcess
            : []
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

            {currentPage != 3 ? (
                <List spacing={4}>
                    {_list.map((item, i) => (
                        <ListItem key={"item-" + i}>
                            <ListIcon fontSize={"xl"}>
                                <MdCookie />
                            </ListIcon>
                            {item}
                        </ListItem>
                    ))}
                </List>
            ) : (
                <Stack textAlign={"center"} gap={4}>
                    <Heading
                        fontFamily={"Fredoka, Comfortaa, Arial"}
                        size={"md"}
                        color={"blackAlpha.800"}
                    >
                        What I will draw
                    </Heading>

                    <List spacing={2}>
                        {_willDraw.map((item, i) => (
                            <ListItem key={"item-" + i}>{item}</ListItem>
                        ))}
                    </List>

                    <Heading
                        fontFamily={"Fredoka, Comfortaa, Arial"}
                        size={"md"}
                        color={"blackAlpha.800"}
                    >
                        What I will not draw
                    </Heading>

                    <List spacing={2}>
                        {_willNotDraw.map((item, i) => (
                            <ListItem key={"item-" + i}>{item}</ListItem>
                        ))}
                    </List>
                </Stack>
            )}
        </Stack>
    )
}
