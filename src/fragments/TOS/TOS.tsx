import { Box, Heading, List, ListIcon, ListItem, Stack } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { MdCookie } from "react-icons/md"

interface TOSProps {
    currentPage?: number
    setMaxPage?: (page: number) => void
}

interface FetchObject {
    TOS: {
        tos: string[]
        importants: string[]
    }
}

export const TOS = (props: TOSProps) => {
    const [_isFetched, _setIsFetched] = useState<boolean>(false)
    const [_fetchedData, _setFetchedData] = useState<FetchObject>({
        TOS: { tos: [], importants: [] },
    })

    const { currentPage = 1, setMaxPage } = props

    useEffect(() => {
        setMaxPage?.(2)

        fetch("resources/jsons/texts.json")
            .then((res) => res.json())
            .then((data: FetchObject) => {
                _setFetchedData(data)
                _setIsFetched(true)
            })
    }, [])

    return (
        <Stack color={"blackAlpha.700"} fontSize={"lg"} gap={8}>
            <Heading
                fontFamily={"Fredoka, Comfortaa, Arial"}
                size={"md"}
                color={"blackAlpha.800"}
                textAlign={"center"}
            >
                {currentPage === 1 && (
                    <>
                        By commissioning me, you confirm that you have read and
                        agree to the ToS below:
                    </>
                )}

                {currentPage === 2 && (
                    <>
                        READ THESE CAREFULLY IF YOU DO NOT WANT TO BE
                        BLACKLISTED
                    </>
                )}
            </Heading>

            <List spacing={4}>
                {_isFetched ? (
                    currentPage === 1 ? (
                        <>
                            {_fetchedData.TOS.tos.map((item, i) => (
                                <ListItem key={"tos-" + i}>
                                    <ListIcon>
                                        <MdCookie />
                                    </ListIcon>
                                    {item}
                                </ListItem>
                            ))}
                        </>
                    ) : (
                        <>
                            {_fetchedData.TOS.importants.map((item, i) => (
                                <ListItem key={"importants-" + i}>
                                    <ListIcon>
                                        <MdCookie />
                                    </ListIcon>
                                    {item}
                                </ListItem>
                            ))}
                        </>
                    )
                ) : (
                    <Box minH={60} />
                )}
            </List>

            <Heading
                fontFamily={"Fredoka, Comfortaa, Arial"}
                size={"md"}
                color={"blackAlpha.800"}
            >
                This ToS is subjected to changes. Please read it carefully every
                time you commission me.
            </Heading>
        </Stack>
    )
}
