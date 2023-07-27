import {
    Accordion,
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    List,
    ListItem,
    Text,
} from "@chakra-ui/react"
import { useEffect } from "react"

interface ExtrasProps {
    setMaxPage?: (page: number) => void
    fetchedContent: {
        background: string[]
        others: string[]
    }
}

export const Extras = ({ setMaxPage, fetchedContent }: ExtrasProps) => {
    useEffect(() => {
        setMaxPage?.(1)
    }, [])

    return (
        <Accordion
            allowToggle
            color={"blackAlpha.700"}
            fontSize={"lg"}
            px={{ base: 4, sm: 16, md: 32 }}
        >
            <AccordionItem>
                <AccordionButton>
                    <Text as={"b"}>Background</Text>
                    <AccordionIcon />
                </AccordionButton>

                <AccordionPanel>
                    <List>
                        {fetchedContent.background.map((item, i) => (
                            <ListItem key={"bg-item-" + i}>
                                <Text>{item}</Text>
                            </ListItem>
                        ))}
                    </List>
                </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
                <AccordionButton>
                    <Text as={"b"}>Others</Text>
                    <AccordionIcon />
                </AccordionButton>

                <AccordionPanel>
                    <List>
                        {fetchedContent.others.map((item, i) => (
                            <ListItem key={"bg-item-" + i}>
                                <Text>{item}</Text>
                            </ListItem>
                        ))}
                    </List>
                </AccordionPanel>
            </AccordionItem>
        </Accordion>
    )
}
