import {
    Accordion,
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Heading,
    Link,
    List,
    ListIcon,
    ListItem,
} from "@chakra-ui/react"
import { FaExternalLinkAlt } from "react-icons/fa"
import { MdCookie } from "react-icons/md"
import { FetchObject } from "../../utils"

interface props {
    fetchedData: Pick<FetchObject, "AboutWebsite">
}

export const AboutWebsite = ({ fetchedData }: props) => {
    return (
        <Accordion allowToggle color={"blackAlpha.700"} fontSize={"lg"}>
            <AccordionItem>
                <AccordionButton>
                    <Heading
                        flexGrow={1}
                        textAlign={"start"}
                        color={"blackAlpha.800"}
                        fontFamily={"Fredoka, Comfortaa, Arial"}
                        size={"md"}
                    >
                        What I used to build
                    </Heading>
                    <AccordionIcon />
                </AccordionButton>

                <AccordionPanel>
                    <List>
                        {fetchedData.AboutWebsite.items.map((item, i) => (
                            <ListItem key={"item-" + i}>
                                <ListIcon>
                                    <MdCookie />
                                </ListIcon>
                                {item}
                            </ListItem>
                        ))}
                    </List>
                </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
                <AccordionButton>
                    <Heading
                        flexGrow={1}
                        textAlign={"start"}
                        color={"blackAlpha.800"}
                        fontFamily={"Fredoka, Comfortaa, Arial"}
                        size={"md"}
                    >
                        References
                    </Heading>
                    <AccordionIcon />
                </AccordionButton>

                <AccordionPanel>
                    <List>
                        {fetchedData.AboutWebsite.references.map((item) => (
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
                        ))}
                    </List>
                </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
                <AccordionButton>
                    <Heading
                        flexGrow={1}
                        textAlign={"start"}
                        color={"blackAlpha.800"}
                        fontFamily={"Fredoka, Comfortaa, Arial"}
                        size={"md"}
                    >
                        Source code
                    </Heading>
                    <AccordionIcon />
                </AccordionButton>

                <AccordionPanel>
                    <List>
                        <ListItem>
                            <Link
                                href={
                                    "https://github.com/cookie-collie/socials"
                                }
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                cookie-collie/socials
                            </Link>
                            &nbsp;
                            <ListIcon>
                                <FaExternalLinkAlt />
                            </ListIcon>
                        </ListItem>
                    </List>
                </AccordionPanel>
            </AccordionItem>
        </Accordion>
    )
}
