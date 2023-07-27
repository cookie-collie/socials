import {
    Accordion,
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Flex,
    Icon,
    Link,
    List,
    ListIcon,
    ListItem,
    Text,
} from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { FaExternalLinkAlt } from "react-icons/fa"
import { MdCookie } from "react-icons/md"

interface FetchedObject {
    AboutWebsite: {
        items: string[]
        references: {
            href: string
            title: string
            key: string
        }[]
    }
}

export const AboutWebsite = () => {
    const [_fetchedData, _setFetchedData] = useState<FetchedObject>({
        AboutWebsite: {
            items: [],
            references: [
                {
                    href: "",
                    key: "",
                    title: "",
                },
            ],
        },
    })
    const [_isFetched, _setIsFetched] = useState<boolean>(false)

    useEffect(() => {
        fetch("resources/jsons/texts.json")
            .then((res) => res.json())
            .then((data: FetchedObject) => {
                _setFetchedData(data)
                _setIsFetched(true)
            })
    }, [])

    return (
        <Accordion allowToggle color={"blackAlpha.700"} fontSize={"lg"}>
            <AccordionItem>
                <AccordionButton>
                    <Text
                        as={"b"}
                        flexGrow={1}
                        textAlign={"start"}
                        color={"blackAlpha.800"}
                    >
                        What I used to build
                    </Text>
                    <AccordionIcon />
                </AccordionButton>

                <AccordionPanel>
                    <List>
                        {_isFetched && (
                            <>
                                {_fetchedData.AboutWebsite.items.map(
                                    (item, i) => (
                                        <ListItem key={"item-" + i}>
                                            <ListIcon>
                                                <MdCookie />
                                            </ListIcon>
                                            {item}
                                        </ListItem>
                                    )
                                )}
                            </>
                        )}
                    </List>
                </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
                <AccordionButton>
                    <Text
                        as={"b"}
                        flexGrow={1}
                        textAlign={"start"}
                        color={"blackAlpha.800"}
                    >
                        References
                    </Text>
                    <AccordionIcon />
                </AccordionButton>

                <AccordionPanel>
                    <List>
                        {_isFetched && (
                            <>
                                {_fetchedData.AboutWebsite.references.map(
                                    (item) => (
                                        <ListItem key={item.key}>
                                            <ListIcon>
                                                <MdCookie />
                                            </ListIcon>
                                            <Link
                                                href={item.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                {item.title}
                                            </Link>
                                            &nbsp;
                                            <ListIcon>
                                                <FaExternalLinkAlt />
                                            </ListIcon>
                                        </ListItem>
                                    )
                                )}
                            </>
                        )}
                    </List>
                </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
                <AccordionButton>
                    <Text
                        as={"b"}
                        flexGrow={1}
                        textAlign={"start"}
                        color={"blackAlpha.800"}
                    >
                        Source code
                    </Text>
                    <AccordionIcon />
                </AccordionButton>

                <AccordionPanel>
                    <Flex
                        align={"center"}
                        as={Link}
                        href="https://github.com/cookie-collie/socials"
                        target="_blank"
                        rel="noopener noreferrer"
                        gap={2}
                    >
                        <Text as={"span"}>cookie-collie/socials</Text>
                        <Icon as={FaExternalLinkAlt} boxSize={3} />
                    </Flex>
                </AccordionPanel>
            </AccordionItem>
        </Accordion>
    )
}
