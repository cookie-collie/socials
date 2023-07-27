import { Flex, Grid, GridItem, Heading, Image, Stack } from "@chakra-ui/react"

interface props {
    imgLinks: string[]
}

export const RefSheetFragment = ({ imgLinks }: props) => {
    return (
        <Stack gap={8} paddingBottom={-8}>
            <Heading
                fontFamily={"Fredoka, Comfortaa, Arial"}
                size={"lg"}
                color={"blackAlpha.800"}
                textAlign={"center"}
            >
                Reference Sheet
            </Heading>

            <Flex flexGrow={1} w={"100%"} aspectRatio={"3/2"}>
                <Grid
                    w={"100%"}
                    templateColumns={"repeat(4, 1fr)"}
                    templateRows={"repeat(3, 1fr)"}
                    gap={4}
                >
                    <GridItem colSpan={4} rowSpan={2} bg={"pink.300"}>
                        <Image
                            src={imgLinks[0]}
                            h={"100%"}
                            objectFit={"cover"}
                        />
                    </GridItem>

                    <GridItem bg={"pink.300"}colSpan={2}>
                        <Image
                            src={imgLinks[1]}
                            h={"100%"}
                            objectFit={"cover"}
                        />
                    </GridItem>

                    <GridItem bg={"pink.300"} colSpan={2}>
                        <Image
                            src={imgLinks[2]}
                            h={"100%"}
                            objectFit={"cover"}
                        />
                    </GridItem>
                </Grid>
            </Flex>
        </Stack>
    )
}
