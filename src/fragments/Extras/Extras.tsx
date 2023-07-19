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
}

export const Extras = ({ setMaxPage }: ExtrasProps) => {
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
                        <ListItem>
                            <Text>Simple background: $0</Text>
                        </ListItem>

                        <ListItem>
                            <Text>Detailed background: 5$</Text>
                        </ListItem>
                    </List>
                </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
                <AccordionButton>
                    <Text as={"b"}>Others</Text>
                    <AccordionIcon />
                </AccordionButton>

                <AccordionPanel>
                    <Text>Change request after approval: $5</Text>
                </AccordionPanel>
            </AccordionItem>
        </Accordion>
    )
}
