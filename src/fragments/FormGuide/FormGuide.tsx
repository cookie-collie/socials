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
import { FetchObject } from "../../utils"

interface ModifiedFetchObject {
    fetchedData: Pick<FetchObject, "FormGuide">
}

type props = Omit<ModifiedFetchObject & ModalProps, "children">

export const FormGuide = ({ fetchedData, isOpen, onClose }: props) => {
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
                        {fetchedData.FormGuide.guidelines.map((item, i) => (
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
