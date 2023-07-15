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
    FaExternalLinkAlt,
    FaTumblr,
    FaTwitch,
    FaTwitter,
    FaYoutube,
} from "react-icons/fa"
import { SiKofi } from "react-icons/si"

export const MySocials = () => {
    const _buttonContent = [
        {
            href: "https://twitter.com/CookieCollie",
            color: "#00acee",
            borderColor: "#00acee",
            leftIcon: <FaTwitter />,
            children: "Twitter",
        },

        {
            href: "https://www.twitch.tv/cookiecollie",
            color: "#6441a5",
            borderColor: "#6441a5",
            leftIcon: <FaTwitch />,
            children: "Twitch",
        },

        {
            href: "https://www.youtube.com/channel/UC_d-mYXMM9ZY_XNnI7Qu-yw",
            color: "#c4302b",
            borderColor: "#c4302b",
            leftIcon: <FaYoutube />,
            children: "Youtube",
        },

        {
            href: "https://discord.gg/YrhgDeSZDX",
            color: "#7289DA",
            borderColor: "#7289DA",
            leftIcon: <FaDiscord />,
            children: "Discord Server",
        },

        {
            href: "https://www.tumblr.com/cookiecollie",
            color: "#36465D",
            borderColor: "#36465D",
            leftIcon: <FaTumblr />,
            children: "Tumblr",
        },

        {
            href: "https://ko-fi.com/cookiecollie",
            color: "#FF5E5B",
            borderColor: "#FF5E5B",
            leftIcon: <SiKofi />,
            children: "Ko-fi",
        },
    ]

    return (
        <Stack>
            <Box>
                <Card variant={"outline"}>
                    <CardBody px={{ base: 4, md: 16 }} py={10}>
                        <Stack gap={10} align={"center"}>
                            <Heading
                                fontFamily={"Fredoka, Comfortaa, Arial"}
                                size={"xl"}
                                color={"blackAlpha.800"}
                            >
                                Find me here!
                            </Heading>

                            <ButtonGroup w={"100%"} variant={"outline"}>
                                <SimpleGrid
                                    columns={{ base: 1, md: 2, lg: 3 }}
                                    gap={5}
                                    w={"100%"}
                                >
                                    {_buttonContent.map((content) => (
                                        <Button
                                            key={content.children}
                                            as={Link}
                                            href={content.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            style={{ textDecoration: "none" }}
                                            color={content.color}
                                            borderColor={content.borderColor}
                                            leftIcon={content.leftIcon}
                                            rightIcon={<FaExternalLinkAlt />}
                                        >
                                            {content.children}
                                        </Button>
                                    ))}
                                </SimpleGrid>
                            </ButtonGroup>
                        </Stack>
                    </CardBody>
                </Card>
            </Box>
        </Stack>
    )
}
