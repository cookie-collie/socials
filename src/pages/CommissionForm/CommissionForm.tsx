import {
    Box,
    Button,
    Card,
    CardBody,
    CardHeader,
    Divider,
    Flex,
    Heading,
    List,
    ListItem,
    ScaleFade,
    Stack,
    useDisclosure,
} from "@chakra-ui/react"
import { useEffect } from "react"
import { Link } from "react-router-dom"

export const CommissionForm = () => {
    const _info = [
        <>
            Ready to have a drawing made by me? Go ahead and fill out the form
            below!
        </>,

        <>
            Be sure to read the TOS and my price sheet carefully before
            proceeding!
        </>,

        <>
            Click the button below to visit the Commission Details page to take
            a look at my TOS and everything else if you haven&apos;t
        </>,
    ]

    const _transition = useDisclosure()
    useEffect(() => {
        _transition.onToggle()
    }, [])

    return (
        <ScaleFade in={_transition.isOpen} delay={0.3}>
            <Card
                variant={"outline"}
                px={{ sm: 8, md: 16 }}
                py={10}
                color={"blackAlpha.700"}
                fontSize={"xl"}
            >
                <CardHeader>
                    <Heading
                        fontFamily={"Fredoka, Comfortaa, Arial"}
                        size={"xl"}
                        color={"blackAlpha.800"}
                        textAlign={"center"}
                    >
                        Commission Form
                    </Heading>
                </CardHeader>

                <Divider />

                <CardBody>
                    <Stack gap={8}>
                        <List textAlign={"center"} spacing={4}>
                            {_info.map((item, i) => (
                                <ListItem key={"item-" + i}>{item}</ListItem>
                            ))}
                        </List>

                        <Flex justify={"center"}>
                            <Button
                                as={Link}
                                to={"/commission"}
                                variant={"solid"}
                                colorScheme="pink"
                                justifySelf={"center"}
                            >
                                Commission Details
                            </Button>
                        </Flex>

                        <Box />
                    </Stack>
                </CardBody>
            </Card>
        </ScaleFade>
    )
}
