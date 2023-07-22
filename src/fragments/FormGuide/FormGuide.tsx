import {
    Heading,
    List,
    ListIcon,
    ListItem,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalHeader,
    ModalOverlay,
    ModalProps,
    Stack,
} from "@chakra-ui/react"
import { MdCookie } from "react-icons/md"

export const FormGuide = ({
    isOpen,
    onClose,
}: Omit<ModalProps, "children">) => {
    const _guidelines = [
        <>
            <b>Email: </b>Your email. I will use this to reply if your form is
            accepted or not, and to send you the finished drawing.
        </>,

        <>
            <b>Name: </b>What you want me to call you.
        </>,

        <>
            <b>Commission type: </b>The type of commission you want. Please
            refer to the Commissions page for the price and description.
        </>,

        <>
            <b>Reference sheet links: </b>The links to the reference sheets of
            your characters. Please provide at least one reference per
            character.
        </>,

        <>
            <b>Secret commission?: </b>Mark your commission as a secret one or
            not, based on the selection. Secret commission will only be sent to
            you when it is finished.
        </>,

        <>
            <b>Other means of contact: </b>Other places that I can contact you,
            e.g. Discord, Twitter,...
        </>,

        <>
            <b>Extra information: </b>Other things that you want to provide me
            about the commission, e.g. pose idea, background idea,... Or if you
            want to leave me a nice message, that is okay too!
        </>,
    ]
    return (
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
                fontSize={"lg"}
                color={"blackAlpha.700"}
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
                        Form Guide
                    </Heading>
                </ModalHeader>

                <ModalBody py={8}>
                    <Stack gap={8}>
                        <Heading
                            fontFamily={"Fredoka, Comfortaa, Arial"}
                            size={"md"}
                            color={"blackAlpha.800"}
                            textAlign={"center"}
                        >
                            If you need help filling out the form, these guides
                            will do!
                        </Heading>

                        <List spacing={4}>
                            {_guidelines.map((item, i) => (
                                <ListItem key={"item-" + i}>
                                    <ListIcon>
                                        <MdCookie />
                                    </ListIcon>
                                    {item}
                                </ListItem>
                            ))}
                        </List>
                    </Stack>
                </ModalBody>
            </ModalContent>
        </Modal>
    )
}
