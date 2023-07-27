import { List, ListIcon, ListItem } from "@chakra-ui/react"
import { MdCookie } from "react-icons/md"

interface props {
    fetchedContent: string[]
}

export const FirstTwoPage = ({ fetchedContent }: props) => {
    return (
        <>
            <List spacing={4}>
                {fetchedContent.map((item, i) => (
                    <ListItem key={"comm-details-" + i}>
                        <ListIcon>
                            <MdCookie />
                        </ListIcon>
                        {item}
                    </ListItem>
                ))}
            </List>
        </>
    )
}
