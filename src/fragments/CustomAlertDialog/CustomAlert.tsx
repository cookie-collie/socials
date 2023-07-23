import {
    Center,
    Flex,
    Heading,
    Icon,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalHeader,
    ModalOverlay,
    Stack,
    Text,
} from "@chakra-ui/react"
import { FaRegCheckCircle } from "react-icons/fa"
import { FaRegCircleXmark } from "react-icons/fa6"

interface CustomAlertProps {
    isOpen: boolean
    onClose: () => void
    sendStatus?: string
}

export const CustomAlert = ({
    isOpen,
    onClose,
    sendStatus,
}: CustomAlertProps) => {
    return (
        <Modal
            isOpen={isOpen && sendStatus ? true : false}
            onClose={onClose}
            size={"lg"}
            isCentered
        >
            <ModalOverlay />
            <ModalContent>
                <ModalCloseButton borderRadius={"full"} />
                <ModalHeader />
                <ModalBody py={8} px={12}>
                    <Center>
                        <Stack
                            justify={"center"}
                            color={"blackAlpha.700"}
                            fontSize={"xl"}
                            textAlign={"center"}
                            gap={4}
                        >
                            <Flex justify={"center"}>
                                <Icon
                                    as={
                                        sendStatus === "Error"
                                            ? FaRegCircleXmark
                                            : FaRegCheckCircle
                                    }
                                    boxSize={"12"}
                                    color={
                                        sendStatus === "Error"
                                            ? "red.500"
                                            : "green.500"
                                    }
                                />
                            </Flex>

                            <Heading
                                fontFamily={"Fredoka, Comfortaa, Arial"}
                                size={"xl"}
                                color={"blackAlpha.800"}
                                textAlign={"center"}
                            >
                                {sendStatus === "Error"
                                    ? "Error"
                                    : "Form Sent!"}
                            </Heading>

                            <Text>
                                {sendStatus === "Error" ? (
                                    <>
                                        There seems to be something wrong.
                                        Please try again later!
                                    </>
                                ) : (
                                    <>
                                        Thank you for commissioning me! I will
                                        be in contact with you soon!
                                    </>
                                )}
                            </Text>
                        </Stack>
                    </Center>
                </ModalBody>
            </ModalContent>
        </Modal>
    )
}
