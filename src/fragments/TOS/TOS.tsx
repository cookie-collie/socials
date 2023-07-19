import { Heading, List, ListIcon, ListItem, Stack } from "@chakra-ui/react"
import { useEffect } from "react"
import { MdCookie } from "react-icons/md"

interface TOSProps {
    currentPage?: number
    setMaxPage?: (page: number) => void
}
export const TOS = (props: TOSProps) => {
    const { currentPage = 1, setMaxPage } = props

    useEffect(() => {
        setMaxPage?.(2)
    }, [])

    const _terms = [
        <>
            Details about commissions will be available on my Ko-fi. Please read
            them carefully before commissioning.
        </>,

        <>
            All of my finished artworks will be delivered exclusively in digital
            format, via either Ko-fi Direct Message, Twitter Direct Message,
            Discord, or email.
        </>,

        <>
            I do not have the right to reserve the finished commissions forever.
            It is the duty of the commissioner to save and reserve the artworks.
        </>,

        <>
            You may ask for changes, major or minor, to the WIPs/drafts I
            provided. Changes to the WIPs/drafts must be notified to me within
            48 hours after the WIPs/drafts are sent. Changes such as species
            changes or stylistic edits are strictly not allowed. After 48 hours,
            any changes or requests for edits will be charged a fee.
        </>,

        <>For YCHs, requests for changes to the poses are not allowed.</>,

        <>I maintain the right to deny any commissions for any reason.</>,

        <>
            I maintain the right to cancel a commission at any time. A full
            refund will be issued to the commissioner.
        </>,

        <>
            All the rights regarding the artworks belong to me, including
            posting them on social media platforms, streaming the process, or
            using them for promotional purposes. Commissioners can ask for
            non-disclosure of the artwork if it is private.
        </>,

        <>
            No party other than myself is allowed to alter, trace, copy, or
            remove the watermark from the completed artworks.
        </>,

        <>
            No alteration to the finished artworks should be made without my
            approval.
        </>,

        <>
            You can ask for a refund before I begin to line the artwork. The
            amount of the refund shall be discussed depends on the progress of
            the sketch(es). After the start of the lining process, a refund is
            NOT viable under any circumstances.
        </>,

        <>No refund is possible once the artwork is completed.</>,

        <>
            The completion time for a commission may vary. Please keep in mind
            that I am still in university and having a job at the same time.
        </>,
    ]

    const _important = [
        <>
            I am NOT consent to let my artworks be used for AI training purposes
            or be included in any AI datasets.
        </>,

        <>I am NOT consent to let my artworks be used for any NFT purposes.</>,

        <>
            I am NOT consent to let my artworks be used in AI related purposes
            in general, including completing or modifying sketches/raw
            sketches/incomplete artworks through AI.
        </>,

        <>
            You may ask for progress checks, but please be reasonable about the
            frequency. Attempting to push me or ask too frequently might result
            in your name appearing in the blacklist.
        </>,

        <>
            Please behave in a semi-professional or casual friendly manner when
            working with me. Poor behavior or harassment will result in
            termination of the commission and/or blacklisting.
        </>,
    ]

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
                {currentPage === 1 &&
                    _terms.map((term, i) => (
                        <ListItem key={"term-" + i}>
                            <ListIcon fontSize={"xl"}>
                                <MdCookie />
                            </ListIcon>
                            {term}
                        </ListItem>
                    ))}

                {currentPage === 2 &&
                    _important.map((term, i) => (
                        <ListItem key={"term-" + i}>
                            <ListIcon fontSize={"xl"}>
                                <MdCookie />
                            </ListIcon>
                            {term}
                        </ListItem>
                    ))}
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
