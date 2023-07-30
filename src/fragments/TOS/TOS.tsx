import { Heading, List, ListIcon, ListItem, Stack } from "@chakra-ui/react"
import { useEffect } from "react"
import { MdCookie } from "react-icons/md"
import { FetchObject } from "../../utils"

interface TOSProps {
    currentPage?: number
    setMaxPage?: (page: number) => void
    fetchedData: Pick<FetchObject, "TOS">
}

export const TOS = (props: TOSProps) => {
    const { currentPage = 1, setMaxPage, fetchedData } = props

    useEffect(() => {
        setMaxPage?.(2)
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
                {currentPage === 1 ? (
                    <>
                        {fetchedData.TOS.tos.map((item, i) => (
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
                        {fetchedData.TOS.importants.map((item, i) => (
                            <ListItem key={"importants-" + i}>
                                <ListIcon>
                                    <MdCookie />
                                </ListIcon>
                                {item}
                            </ListItem>
                        ))}
                    </>
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
