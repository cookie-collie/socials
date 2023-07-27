import {
    Heading,
    List,
    ListIcon,
    ListItem,
    ModalProps,
    Stack,
} from "@chakra-ui/react"
import { MdCookie } from "react-icons/md"
import { CustomModal } from "../../components"

interface FetchObject {
    fetchedContent: {
        guidelines: {
            field: string
            content: string
        }[]
    }
}

type props = Omit<FetchObject & ModalProps, "children">

export const FormGuide = ({ fetchedContent, isOpen, onClose }: props) => {
    return (
        <CustomModal
            isOpen={isOpen}
            onClose={onClose}
            header="Form Guide"
            body={
                <Stack gap={8}>
                    <Heading
                        fontFamily={"Fredoka, Comfortaa, Arial"}
                        size={"md"}
                        color={"blackAlpha.800"}
                        textAlign={"center"}
                    >
                        If you need help filling out the form, these guides will
                        do!
                    </Heading>

                    <List spacing={4}>
                        {fetchedContent.guidelines.map((item, i) => (
                            <ListItem key={"item-" + i}>
                                <ListIcon>
                                    <MdCookie />
                                </ListIcon>
                                <b>{item.field}</b>
                                {item.content}
                            </ListItem>
                        ))}
                    </List>
                </Stack>
            }
        />
    )
}
