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
import { FaExternalLinkAlt } from "react-icons/fa"
import { MdCookie } from "react-icons/md"

export const AboutWebsite = () => {
    const _listItem = [
        <>React with Typescript template</>,
        <>Chakra UI component library</>,
        <>react-icons for icons</>,
        <>Github Page for hosting</>,
    ]

    const _references = [
        {
            href: "https://create-react-app.dev/docs/adding-typescript/",
            title: "Create React App Installation - Typescript Template",
            key: "cra",
        },

        {
            href: "https://chakra-ui.com/docs/components",
            title: "Chakra UI Components Documentation",
            key: "chakra-ui-doc",
        },

        {
            href: "https://react-icons.github.io/react-icons/",
            title: "React Icons Main Page",
            key: "react-icons",
        },

        {
            href: "https://github.com/gitname/react-gh-pages",
            title: "Deploy React App to GitHub Pages Tutorial",
            key: "github-page",
        },
    ]

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
                        {_listItem.map((item, i) => (
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
                        {_references.map((item) => (
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
                        <Icon as={FaExternalLinkAlt} boxSize={3}/>
                    </Flex>
                </AccordionPanel>
            </AccordionItem>
        </Accordion>
    )
}
