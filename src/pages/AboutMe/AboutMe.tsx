import {
    Box,
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

interface FetchObject {
    AboutMe: {
        content: string[]
    }
}

export const AboutMe = () => {
    const [isLoaded, setIsLoaded] = useState(false)
    const _scaleFadeDisclosure = useDisclosure()

    const [_isFetched, _setIsFetched] = useState<boolean>(false)
    const [_fetchedData, _setFetchedData] = useState<string[]>([])

    useEffect(() => {
        _scaleFadeDisclosure.onToggle()

        fetch(process.env.PUBLIC_URL + "/resources/jsons/texts.json")
            .then((res) => res.json())
            .then((data: FetchObject) => {
                _setFetchedData(data.AboutMe.content)
                _setIsFetched(true)
            })
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

                                {_isFetched ? (
                                    <>
                                        {_fetchedData.map((item, i) => (
                                            <Text key={"item-" + i}>
                                                {item}
                                            </Text>
                                        ))}
                                    </>
                                ) : (
                                    <Skeleton>
                                        <Box minH={60} />
                                    </Skeleton>
                                )}

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
