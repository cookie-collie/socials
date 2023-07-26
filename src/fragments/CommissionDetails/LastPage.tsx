import { Box, Heading, List, ListItem, Stack } from "@chakra-ui/react"
import { useEffect, useState } from "react"

interface FetchObject {
    CommissionDetails: ContentObject
}

interface ContentObject {
    willDraw: string[]
    willNotDraw: string[]
}

export const LastPage = () => {
    const [_willDraw, _setWillDraw] = useState<string[]>([])
    const [_willNotDraw, _setWillNotDraw] = useState<string[]>([])

    const [_isFetch, _setIsFetch] = useState<boolean>(false)

    useEffect(() => {
        fetch("resources/jsons/texts.json")
            .then((res) => res.json())
            .then((data: FetchObject) => {
                _setWillDraw(data.CommissionDetails.willDraw)
                _setWillNotDraw(data.CommissionDetails.willNotDraw)
                _setIsFetch(true)
            })
    }, [])

    return (
        <>
            {_isFetch ? (
                <Stack textAlign={"center"} gap={4}>
                    <Heading
                        fontFamily={"Fredoka, Comfortaa, Arial"}
                        size={"md"}
                        color={"blackAlpha.800"}
                    >
                        What I will draw
                    </Heading>

                    <List spacing={2}>
                        {_willDraw.map((item, i) => (
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
                        {_willNotDraw.map((item, i) => (
                            <ListItem key={"item-" + i}>{item}</ListItem>
                        ))}
                    </List>
                </Stack>
            ) : (
                <Box minH={60}/>
            )}
        </>
    )
}
