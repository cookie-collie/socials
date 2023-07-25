import {
    Button,
    ButtonGroup,
    Card,
    CardBody,
    CardFooter,
    Heading,
    Image,
    Link,
    ScaleFade,
    Skeleton,
    Stack,
    Text,
    useDisclosure,
} from "@chakra-ui/react"
import { useEffect, useState } from "react"

import { FaTwitch, FaTwitter } from "react-icons/fa"

export const AboutMe = () => {
    const [isLoaded, setIsLoaded] = useState(false)
    const _scaleFadeDisclosure = useDisclosure()

    useEffect(() => {
        _scaleFadeDisclosure.onToggle()
    }, [])

    return (
        <ScaleFade in={_scaleFadeDisclosure.isOpen} delay={0.3}>
            <Skeleton isLoaded={isLoaded} borderRadius={"md"}>
                <Card
                    variant={"outline"}
                    overflow={"hidden"}
                    direction={{ base: "column", md: "row" }}
                >
                    <Image
                        onLoad={() => setIsLoaded(true)}
                        src="/img/fgx.png"
                        objectFit={"cover"}
                        maxW={{ base: "100%", md: "300px" }}
                    />

                    <Stack>
                        <CardBody px={8}>
                            <Stack gap={4} color={"blackAlpha.700"}>
                                <Heading
                                    fontFamily={"Fredoka, Comfortaa, Arial"}
                                    size={"xl"}
                                    color={"blackAlpha.800"}
                                >
                                    Hi there! I&apos;m Cookie, nice to meet ya!
                                </Heading>

                                <Text fontSize={"xl"}>
                                    Welcome to my page! My name is Cookie and
                                    I&apos;m a part deer, part collie doggo who
                                    loves to draw. Other than that, I&apos;m a
                                    part-time doggo on Twitch, too!
                                </Text>

                                <Text fontSize={"xl"}>
                                    Feel free to navigate the site however you
                                    want! You can click on the links below to
                                    visit my Twitter and Twitch. If you want to
                                    know more about my commissions and arts,
                                    feel free to use the bar on the top!
                                </Text>

                                <Text as={"i"} fontSize={"sm"}>
                                    &larr; Artwork by{" "}
                                    <Link
                                        href="https://twitter.com/InformalScout"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        @InformalScout
                                    </Link>
                                </Text>
                            </Stack>
                        </CardBody>

                        <CardFooter px={8}>
                            <ButtonGroup gap={2} variant={"outline"}>
                                <Button
                                    leftIcon={<FaTwitter />}
                                    color={"#00acee"}
                                    borderColor={"#00acee"}
                                    as={Link}
                                    href="https://twitter.com/CookieCollie"
                                    style={{ textDecoration: "none" }}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Twitter
                                </Button>
                                <Button
                                    leftIcon={<FaTwitch />}
                                    color={"#6441a5"}
                                    borderColor={"#6441a5"}
                                    as={Link}
                                    href="https://www.twitch.tv/cookiecollie"
                                    style={{ textDecoration: "none" }}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Twitch
                                </Button>
                            </ButtonGroup>
                        </CardFooter>
                    </Stack>
                </Card>
            </Skeleton>
        </ScaleFade>
    )
}
