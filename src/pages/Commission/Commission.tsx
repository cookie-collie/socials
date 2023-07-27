import {
    Box,
    Button,
    ButtonGroup,
    Card,
    CardBody,
    CardHeader,
    Center,
    Divider,
    Heading,
    List,
    ListItem,
    ScaleFade,
    Stack,
    Text,
    useDisclosure,
} from "@chakra-ui/react"
import { useEffect, useRef, useState } from "react"
import { CustomModal, Pagination } from "../../components"
import { CommissionDetails, Extras, PriceSheet, TOS } from "../../fragments"
import { usePaginationLogic } from "../../utils/usePaginationLogic"
import { useScrollToTop } from "../../utils/useScrollToTop"

interface FetchObject {
    TOS: {
        tos: string[]
        importants: string[]
    }
    CommissionDetails: {
        details: string[]
        paymentProcess: string[]
        willDraw: string[]
        willNotDraw: string[]
    }
    Extras: {
        background: string[]
        others: string[]
    }
    PriceSheet: {
        description: {
            emotes: string[]
            allBody: string[]
            refSheet: string[]
            plushPhoneBG: string[]
        }
    }

    ImgLinks: {
        halfBody: string[]
        fullBody: string[]
        emotes: string[]
        plushPhoneBG: string[]
        refSheet: string[]
    }
}

export const Commission = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const { currentPage, setCurrentPage, maxPage, setMaxPage } =
        usePaginationLogic(1)

    const _modalBodyRef = useRef<HTMLDivElement>(null)
    const _scrollToTop = useScrollToTop(_modalBodyRef)

    const [modalInnerComp, setModalInnerComp] = useState<
        "tos" | "details" | "extras"
    >("tos")

    const handleButtonOnClick = (innerComp: "tos" | "details" | "extras") => {
        onOpen()
        setModalInnerComp(innerComp)
        setCurrentPage(1)
    }

    const _transition = useDisclosure()

    const [_fetchedData, _setFetchedData] = useState<FetchObject>({
        CommissionDetails: {
            details: [],
            paymentProcess: [],
            willDraw: [],
            willNotDraw: [],
        },

        TOS: {
            importants: [],
            tos: [],
        },

        Extras: {
            background: [],
            others: [],
        },

        PriceSheet: {
            description: {
                emotes: [],
                allBody: [],
                plushPhoneBG: [],
                refSheet: [],
            },
        },

        ImgLinks: {
            emotes: [],
            fullBody: [],
            halfBody: [],
            plushPhoneBG: [],
            refSheet: [],
        },
    })
    const [_isFetched, _setIsFetched] = useState<boolean>(false)

    useEffect(() => {
        _transition.onToggle()

        fetch("resources/jsons/texts.json")
            .then((res) => res.json())
            .then((data: FetchObject) => {
                _setFetchedData(data)
                _setIsFetched(true)
            })
    }, [])

    return (
        <ScaleFade in={_transition.isOpen} delay={0.3}>
            <Stack gap={8} color={"blackAlpha.700"}>
                <Box>
                    <Card
                        direction={"column"}
                        px={{ sm: 8, md: 16 }}
                        py={10}
                        variant={"outline"}
                    >
                        <CardHeader>
                            <Heading
                                fontFamily={"Fredoka, Comfortaa, Arial"}
                                size={"xl"}
                                color={"blackAlpha.800"}
                                textAlign={"center"}
                            >
                                My Commissions
                            </Heading>
                        </CardHeader>

                        <Divider />

                        <CardBody>
                            <Stack
                                fontSize={"xl"}
                                textAlign={"center"}
                                gap={8}
                                color={"blackAlpha.700"}
                            >
                                <List spacing={4}>
                                    <ListItem>
                                        <Text>
                                            Commissions are open with unlimited
                                            slots until further notice
                                        </Text>
                                    </ListItem>

                                    <ListItem>
                                        <Text>
                                            Please refer thoroughly through the
                                            TOS and the process before
                                            commissioning me
                                        </Text>
                                    </ListItem>
                                </List>

                                <ButtonGroup
                                    justifyContent={"center"}
                                    colorScheme="pink"
                                    variant={"solid"}
                                >
                                    <Stack>
                                        <Button
                                            onClick={() =>
                                                handleButtonOnClick("tos")
                                            }
                                        >
                                            Terms of Service
                                        </Button>

                                        <Button
                                            onClick={() =>
                                                handleButtonOnClick("details")
                                            }
                                        >
                                            Commission Details
                                        </Button>

                                        <Button
                                            onClick={() =>
                                                handleButtonOnClick("extras")
                                            }
                                        >
                                            Extras
                                        </Button>
                                    </Stack>
                                </ButtonGroup>
                            </Stack>
                        </CardBody>
                    </Card>
                </Box>

                <Box>
                    {_isFetched && (
                        <PriceSheet
                            fetchedData={{
                                ImgLinks: _fetchedData.ImgLinks,
                                PriceSheet: _fetchedData.PriceSheet,
                            }}
                        />
                    )}
                </Box>
            </Stack>

            {_isFetched && (
                <CustomModal
                    isOpen={isOpen}
                    onClose={onClose}
                    bodyRef={_modalBodyRef}
                    header={
                        modalInnerComp === "tos"
                            ? "Terms of Service"
                            : modalInnerComp === "details"
                            ? "Commission Details"
                            : "Extras and Fees"
                    }
                    body={
                        modalInnerComp === "tos" ? (
                            <TOS
                                currentPage={currentPage}
                                setMaxPage={setMaxPage}
                                fetchedContent={_fetchedData.TOS}
                            />
                        ) : modalInnerComp === "details" ? (
                            <CommissionDetails
                                currentPage={currentPage}
                                setMaxPage={setMaxPage}
                                fetchedContent={_fetchedData.CommissionDetails}
                            />
                        ) : (
                            <Extras
                                setMaxPage={setMaxPage}
                                fetchedContent={_fetchedData.Extras}
                            />
                        )
                    }
                    footer={
                        <Center flexGrow={1}>
                            <Pagination
                                maxPage={maxPage}
                                currentPage={currentPage}
                                setPageCallback={setCurrentPage}
                                onNext={_scrollToTop}
                                onPrevious={_scrollToTop}
                            />
                        </Center>
                    }
                />
            )}
        </ScaleFade>
    )
}
