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
import { useEffect, useState } from "react"

interface ExtrasProps {
    setMaxPage?: (page: number) => void
}

interface FetchObject {
    Extras: ContentObject
}

interface ContentObject {
    background: string[]
    others: string[]
}

export const Extras = ({ setMaxPage }: ExtrasProps) => {
    const [_bgItems, _setBgItems] = useState<string[]>([])
    const [_otherItems, _setOtherItems] = useState<string[]>([])
    const [_isFetched, _setIsFetched] = useState<boolean>(false)

    useEffect(() => {
        setMaxPage?.(1)

        fetch("resources/jsons/texts.json")
            .then((res) => res.json())
            .then((data: FetchObject) => {
                _setBgItems(data.Extras.background)
                _setOtherItems(data.Extras.others)
                _setIsFetched(true)
            })
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
                        {_isFetched && (
                            <>
                                {_bgItems.map((item, i) => (
                                    <ListItem key={"bg-item-" + i}>
                                        <Text>{item}</Text>
                                    </ListItem>
                                ))}
                            </>
                        )}
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
                        {_isFetched && (
                            <>
                                {_otherItems.map((item, i) => (
                                    <ListItem key={"bg-item-" + i}>
                                        <Text>{item}</Text>
                                    </ListItem>
                                ))}
                            </>
                        )}
                    </List>
                </AccordionPanel>
            </AccordionItem>
        </Accordion>
    )
}
