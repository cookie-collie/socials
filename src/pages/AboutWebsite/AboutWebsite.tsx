import { Heading, List, ListIcon, ListItem, Stack } from "@chakra-ui/react"
import { MdCookie } from "react-icons/md"

export const AboutWebsite = () => {
    const _listItem = [
        <>React with Typescript template</>,
        <>Chakra UI component library</>,
        <>react-icons for icons</>,
        <>Github Page for hosting</>,
    ]
    return (
        <Stack color={"blackAlpha.700"} fontSize={"lg"}>
            <Heading
                fontFamily={"Fredoka, Comfortaa, Arial"}
                size={"md"}
                color={"blackAlpha.800"}
            >
                What I used to build
            </Heading>
            <List>
                {_listItem.map((item, i) => (
                    <ListItem key={"item-" + i}>
                        <ListIcon>
                            <MdCookie />
                        </ListIcon>
                        {item}
                    </ListItem>
                ))}
            </List>
        </Stack>
    )
}
