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
import { FetchObject } from "../../utils"

interface props {
    fetchedData: Pick<FetchObject, "AboutMe">
}

export const AboutMe = ({ fetchedData }: props) => {
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

                                {fetchedData.AboutMe.content.map((item, i) => (
                                    <Text key={"item-" + i}>{item}</Text>
                                ))}

                                <Text
                                    as={"i"}
                                    fontSize={"sm"}
                                    order={{ base: -1, md: 1 }}
                                >
                                    Artwork by{" "}
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
