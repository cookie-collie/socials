import { List, ListIcon, ListItem } from "@chakra-ui/react"
import { MdCookie } from "react-icons/md"

interface props {
    fetchedData: string[]
}

export const FirstTwoPage = ({ fetchedData }: props) => {
    return (
        <>
            <List spacing={4}>
                {fetchedData.map((item, i) => (
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
