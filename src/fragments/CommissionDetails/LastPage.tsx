import { Heading, List, ListItem, Stack } from "@chakra-ui/react"

interface props {
    fetchedContent: {
        willDraw: string[]
        willNotDraw: string[]
    }
}

export const LastPage = ({ fetchedContent }: props) => {
    return (
        <>
            <Stack textAlign={"center"} gap={4}>
                <Heading
                    fontFamily={"Fredoka, Comfortaa, Arial"}
                    size={"md"}
                    color={"blackAlpha.800"}
                >
                    What I will draw
                </Heading>

                <List spacing={2}>
                    {fetchedContent.willDraw.map((item, i) => (
                        <ListItem key={"item-" + i}>{item}</ListItem>
                    ))}
                </List>

                <Heading
                    fontFamily={"Fredoka, Comfortaa, Arial"}
                    size={"md"}
                    color={"blackAlpha.800"}
                >
                    What I will not draw
                </Heading>

                <List spacing={2}>
                    {fetchedContent.willNotDraw.map((item, i) => (
                        <ListItem key={"item-" + i}>{item}</ListItem>
                    ))}
                </List>
            </Stack>
        </>
    )
}
