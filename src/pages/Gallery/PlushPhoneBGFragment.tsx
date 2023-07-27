import { Flex, Grid, GridItem, Heading, Image, Stack } from "@chakra-ui/react"

interface props {
    imgLinks: string[]
}

export const PlushPhoneBGFragment = ({ imgLinks }: props) => {
    return (
        <Flex flexGrow={1} w={"100%"} aspectRatio={"3/2"}>
            <Stack gap={8}>
                <Heading
                    fontFamily={"Fredoka, Comfortaa, Arial"}
                    size={"lg"}
                    color={"blackAlpha.800"}
                    textAlign={"center"}
                >
                    Plush Phone Wallpaper
                </Heading>

                <Grid
                    w={"100%"}
                    templateColumns={"repeat(3, 1fr)"}
                    templateRows={"repeat(1, 1fr)"}
                    gap={4}
                >
                    <GridItem colStart={2} bg={"pink.300"}>
                        <Image
                            src={imgLinks[0]}
                            h={"100%"}
                            objectFit={"cover"}
                        />
                    </GridItem>

                    <GridItem bg={"whiteAlpha.900"}>
                        <Image
                            src={imgLinks[1]}
                            h={"100%"}
                            objectFit={"cover"}
                        />
                    </GridItem>

                    <GridItem bg={"whiteAlpha.900"}>
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
