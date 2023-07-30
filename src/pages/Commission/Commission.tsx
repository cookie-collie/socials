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
import { FetchObject } from "../../utils"
import { usePaginationLogic } from "../../utils/usePaginationLogic"
import { useScrollToTop } from "../../utils/useScrollToTop"

interface props {
    fetchedData: Pick<
        FetchObject,
        "TOS" | "CommissionDetails" | "Extras" | "PriceSheet" | "ImgLinks"
    >
}

export const Commission = ({ fetchedData }: props) => {
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

    useEffect(() => {
        _transition.onToggle()
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
                    <PriceSheet
                        fetchedData={{
                            ImgLinks: fetchedData.ImgLinks,
                            PriceSheet: fetchedData.PriceSheet,
                        }}
                    />
                </Box>
            </Stack>

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
                            fetchedData={fetchedData}
                        />
                    ) : modalInnerComp === "details" ? (
                        <CommissionDetails
                            currentPage={currentPage}
                            setMaxPage={setMaxPage}
                            fetchedData={fetchedData}
                        />
                    ) : (
                        <Extras
                            setMaxPage={setMaxPage}
                            fetchedData={fetchedData}
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
        </ScaleFade>
    )
}
