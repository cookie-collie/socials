import {
    Box,
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
import { useEffect, useState } from "react"
import { MdCookie } from "react-icons/md"

interface FetchObject {
    FormGuide: ContentObject
}

interface ContentObject {
    guidelines: GuidelineObject[]
}

interface GuidelineObject {
    field: string
    content: string
}

export const FormGuide = ({
    isOpen,
    onClose,
}: Omit<ModalProps, "children">) => {
    const [_guidelines, _setGuidelines] = useState<GuidelineObject[]>([])
    const [_isFetched, _setIsFetched] = useState<boolean>(false)

    useEffect(() => {
        fetch("resources/jsons/texts.json")
            .then((res) => res.json())
            .then((data: FetchObject) => {
                _setGuidelines(data.FormGuide.guidelines)
                _setIsFetched(true)
            })
    }, [])

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
                            {_isFetched ? (
                                _guidelines.map((item, i) => (
                                    <ListItem key={"item-" + i}>
                                        <ListIcon>
                                            <MdCookie />
                                        </ListIcon>
                                        <b>{item.field}</b>
                                        {item.content}
                                    </ListItem>
                                ))
                            ) : (
                                <Box minH={60} />
                            )}
                        </List>
                    </Stack>
                </ModalBody>
            </ModalContent>
        </Modal>
    )
}
