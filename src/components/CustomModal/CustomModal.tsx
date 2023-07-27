import {
    Heading,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    ModalProps,
} from "@chakra-ui/react"

type CustomModalProps = Omit<
    ModalProps & {
        header?: React.ReactNode
        body?: React.ReactNode
        footer?: React.ReactNode
        bodyRef?: React.RefObject<HTMLDivElement>
    },
    "children"
>

export const CustomModal = (props: CustomModalProps) => {
    const { header, body, footer, bodyRef } = props
    return (
        <Modal {...props} scrollBehavior="inside" size={"3xl"}>
            <ModalOverlay />

            <ModalContent
                overflow={"hidden"}
                fontFamily={"Fredoka, Comfortaa, Arial"}
                color={"blackAlpha.700"}
                fontSize={"lg"}
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
                        {header}
                    </Heading>
                </ModalHeader>

                <ModalBody py={8} ref={bodyRef}>
                    {body}
                </ModalBody>

                <ModalFooter>{footer}</ModalFooter>
            </ModalContent>
        </Modal>
    )
}
