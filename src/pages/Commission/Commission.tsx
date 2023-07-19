import {
    Box,
    Button,
    ButtonGroup,
    Card,
    CardBody,
    CardHeader,
    Divider,
    Heading,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Stack,
    Text,
    useDisclosure,
} from "@chakra-ui/react"
import { useRef, useState } from "react"
import { Pagination } from "../../components/Pagination"
import { CommissionDetails } from "../../fragments/CommissionDetails/CommissionDetails"
import PriceSheet from "../../fragments/PriceSheet"
import TOS from "../../fragments/TOS"
import { usePaginationLogic } from "../../utils/usePaginationLogic"
import { useScrollToTop } from "../../utils/useScrollToTop"

export const Commission = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const { currentPage, setCurrentPage } = usePaginationLogic(1)

    const _modalBodyRef = useRef<HTMLDivElement>(null)
    const _scrollToTop = useScrollToTop(_modalBodyRef)

    const [modalInnerComp, setModalInnerComp] = useState("")

    const handleButtonOnClick = (innerComp: "tos" | "details" | "extras") => {
        onOpen()
        setModalInnerComp(innerComp)
        setCurrentPage(1)
    }

    return (
        <>
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
                            {modalInnerComp === "tos" && "Terms of Service"}
                            {modalInnerComp === "details" &&
                                "Commission Details"}
                        </Heading>
                    </ModalHeader>

                    <ModalBody py={8} ref={_modalBodyRef}>
                        {modalInnerComp === "tos" && (
                            <TOS currentPage={currentPage} />
                        )}
                        {modalInnerComp === "details" && (
                            <CommissionDetails currentPage={currentPage} />
                        )}
                    </ModalBody>

                    <ModalFooter justifyContent={"center"}>
                        <Box>
                            <Pagination
                                maxPage={modalInnerComp === "details" ? 3 : 2}
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
                            <Stack fontSize={"xl"} textAlign={"center"} gap={4}>
                                <Text>
                                    Commissions are open with unlimited slots
                                    until further notice
                                </Text>

                                <Text>
                                    Please refer thoroughly through the TOS and
                                    the process before commissioning me
                                </Text>

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
        </>
    )
}