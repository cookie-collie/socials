import { Flex, Grid, GridItem, Heading, Image, Stack } from "@chakra-ui/react"

interface props {
    imgLinks: string[]
}

export const EmotesFragment = ({ imgLinks }: props) => {
    return (
        <Flex flexGrow={1} w={"100%"} aspectRatio={"3/2"}>
            <Stack gap={8}>
                <Heading
                    fontFamily={"Fredoka, Comfortaa, Arial"}
                    size={"lg"}
                    color={"blackAlpha.800"}
                    textAlign={"center"}
                >
                    Emotes
                </Heading>

                <Grid
                    w={"100%"}
                    templateColumns={"repeat(3, 1fr)"}
                    templateRows={"repeat(3, 1fr)"}
                    gap={4}
                >
                    <GridItem colSpan={2} rowSpan={2} bg={"blackAlpha.100"}>
                        <Image
                            src={imgLinks[0]}
                            h={"100%"}
                            objectFit={"cover"}
                        />
                    </GridItem>

                    <GridItem bg={"blackAlpha.100"}>
                        <Image
                            src={imgLinks[1]}
                            h={"100%"}
                            objectFit={"cover"}
                        />
                    </GridItem>

                    <GridItem bg={"blackAlpha.100"}>
                        <Image
                            src={imgLinks[8]}
                            h={"100%"}
                            objectFit={"cover"}
                        />
                    </GridItem>

                    <GridItem bg={"blackAlpha.100"}>
                        <Image
                            src={imgLinks[6]}
                            h={"100%"}
                            objectFit={"cover"}
                        />
                    </GridItem>

                    <GridItem bg={"blackAlpha.100"}>
                        <Image
                            src={imgLinks[7]}
                            h={"100%"}
                            objectFit={"cover"}
                        />
                    </GridItem>

                    <GridItem bg={"blackAlpha.100"}>
                        <Image
                            src={imgLinks[2]}
                            h={"100%"}
                            objectFit={"cover"}
                        />
                    </GridItem>
                </Grid>
            </Stack>
        </Flex>
    )
}
