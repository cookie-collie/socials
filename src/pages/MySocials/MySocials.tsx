import {
    Box,
    Button,
    ButtonGroup,
    Card,
    CardBody,
    Heading,
    Link,
    SimpleGrid,
    Stack,
} from "@chakra-ui/react"
import {
    FaDiscord,
    FaTumblr,
    FaTwitch,
    FaTwitter,
    FaYoutube,
} from "react-icons/fa"
import { SiKofi } from "react-icons/si"

export const MySocials = () => {
    return (
        <Stack>
            <Box>
                <Card variant={"outline"}>
                    <CardBody>
                        <Stack gap={10} px={{base: 4, md: 16}} align={"center"}>
                            <Heading
                                fontFamily={"Fredoka, Comfortaa, Arial"}
                                size={"xl"}
                                color={"blackAlpha.800"}
                            >
                                Find me here!
                            </Heading>

                            <ButtonGroup w={"100%"} variant={"outline"}>
                                <SimpleGrid columns={{base: 1, md: 2, lg: 3}} gap={5} w={"100%"}>
                                    <Button
                                        href="https://twitter.com/CookieCollie"
                                        as={Link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        color={"#00acee"}
                                        style={{ textDecoration: "none" }}
                                        borderColor={"#00acee"}
                                        leftIcon={<FaTwitter />}
                                    >
                                        Twitter
                                    </Button>

                                    <Button
                                        as={Link}
                                        href="https://www.twitch.tv/cookiecollie"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        color={"#6441a5"}
                                        style={{ textDecoration: "none" }}
                                        borderColor={"#6441a5"}
                                        leftIcon={<FaTwitch />}
                                    >
                                        Twitch
                                    </Button>

                                    <Button
                                        as={Link}
                                        href="https://www.youtube.com/channel/UC_d-mYXMM9ZY_XNnI7Qu-yw"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        color={"#c4302b"}
                                        style={{ textDecoration: "none" }}
                                        borderColor={"#c4302b"}
                                        leftIcon={<FaYoutube />}
                                    >
                                        Youtube
                                    </Button>

                                    <Button
                                        as={Link}
                                        href="https://discord.gg/YrhgDeSZDX"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        color={"#7289DA"}
                                        style={{ textDecoration: "none" }}
                                        borderColor={"#7289DA"}
                                        leftIcon={<FaDiscord />}
                                    >
                                        Discord Server
                                    </Button>

                                    <Button
                                        as={Link}
                                        href="https://www.tumblr.com/cookiecollie"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        color={"#36465D"}
                                        style={{ textDecoration: "none" }}
                                        borderColor={"#36465D"}
                                        leftIcon={<FaTumblr />}
                                    >
                                        Tumblr
                                    </Button>

                                    <Button
                                        as={Link}
                                        href="https://ko-fi.com/cookiecollie"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        color={"#FF5E5B"}
                                        style={{ textDecoration: "none" }}
                                        borderColor={"#FF5E5B"}
                                        leftIcon={<SiKofi />}
                                    >
                                        Ko-fi
                                    </Button>
                                </SimpleGrid>
                            </ButtonGroup>
                        </Stack>
                    </CardBody>
                </Card>
            </Box>
        </Stack>
    )
}
