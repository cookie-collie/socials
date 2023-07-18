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
    ModalContent,
    ModalOverlay,
    Stack,
    Text,
    useDisclosure,
} from "@chakra-ui/react"
import { useState } from "react"
import { CommissionProcess } from "../../fragments/CommissionProcess"
import PriceSheet from "../../fragments/PriceSheet"
import TOS from "../../fragments/TOS"

export const Commission = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [modalInnerComp, setModalInnerComp] = useState("")

    const handleButtonOnClick = (innerComp: "tos" | "process") => {
        onOpen()
        setModalInnerComp(innerComp)
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
                    {modalInnerComp === "tos" && <TOS />}
                    {modalInnerComp === "process" && <CommissionProcess />}
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
                                                handleButtonOnClick("process")
                                            }
                                        >
                                            Commission Process
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
