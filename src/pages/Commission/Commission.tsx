import {
    Box,
    Button,
    ButtonGroup,
    Card,
    CardBody,
    CardHeader,
    Divider,
    Heading,
    List,
    ListItem,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    ScaleFade,
    Stack,
    Text,
    useDisclosure,
} from "@chakra-ui/react"
import { useEffect, useRef, useState } from "react"
import { Pagination } from "../../components/Pagination"
import { CommissionDetails } from "../../fragments/CommissionDetails"
import { Extras } from "../../fragments/Extras"
import PriceSheet from "../../fragments/PriceSheet"
import TOS from "../../fragments/TOS"
import { usePaginationLogic } from "../../utils/usePaginationLogic"
import { useScrollToTop } from "../../utils/useScrollToTop"

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
    useEffect(() => {
        _transition.onToggle()
    }, [])

    return (
        <ScaleFade in={_transition.isOpen} delay={0.3}>
            <Modal
                isOpen={isOpen}
                onClose={onClose}
                scrollBehavior="inside"
                size={"3xl"}
            >
                <ModalOverlay />

                <ModalContent
                    fontFamily={"Fredoka, Comfortaa, Arial"}
                    overflow={"hidden"}
                >
                    <ModalCloseButton
                        borderRadius={"full"}
                        color={"whiteAlpha.900"}
                    />

                    <ModalHeader
                        backgroundColor={"pink.400"}
                        borderBottomRadius={"2xl"}
                    >
                        <Heading
                            fontFamily={"Fredoka, Comfortaa, Arial"}
                            size={"xl"}
                            color={"whiteAlpha.900"}
                            textAlign={"center"}
                        >
                            {modalInnerComp === "tos"
                                ? "Terms of Service"
                                : modalInnerComp === "details"
                                ? "Commission Details"
                                : modalInnerComp === "extras"
                                ? "Extras and Fees"
                                : ""}
                        </Heading>
                    </ModalHeader>

                    <ModalBody py={8} ref={_modalBodyRef}>
                        {modalInnerComp === "tos" ? (
                            <TOS
                                currentPage={currentPage}
                                setMaxPage={setMaxPage}
                            />
                        ) : modalInnerComp === "details" ? (
                            <CommissionDetails
                                currentPage={currentPage}
                                setMaxPage={setMaxPage}
                            />
                        ) : modalInnerComp === "extras" ? (
                            <Extras setMaxPage={setMaxPage} />
                        ) : (
                            <></>
                        )}
                    </ModalBody>

                    <ModalFooter justifyContent={"center"}>
                        <Box>
                            <Pagination
                                maxPage={maxPage}
                                currentPage={currentPage}
                                setPageCallback={setCurrentPage}
                                onNext={_scrollToTop}
                                onPrevious={_scrollToTop}
                            />
                        </Box>
                    </ModalFooter>
                </ModalContent>
            </Modal>

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
                    <PriceSheet />
                </Box>
            </Stack>
        </ScaleFade>
    )
}
