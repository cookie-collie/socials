import {
    Box,
    Button,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Input,
    Radio,
    RadioGroup,
    Select,
    Stack,
    Textarea,
} from "@chakra-ui/react"
import { useInputValidate } from "../../utils/useInputValidate"
import { useRadioOnChange } from "../../utils/useRadioOnChange"

export const RequestForm = () => {
    const _validateEmail = useInputValidate({ validationType: "email" })
    const _validateRefLinks = useInputValidate({})
    const _handleRadioValue = useRadioOnChange("No")

    const _handleSubmit = (e: any) => {
        e.preventDefault()
    }

    const _commTypes = [
        "Emotes",
        "Half Body",
        "Full Body",
        "Reference Sheet",
        "Plush Phone Wallpaper",
    ]

    return (
        <form onSubmit={_handleSubmit}>
            <Stack gap={6}>
                <Box>
                    <FormControl isRequired isInvalid={_validateEmail.isError}>
                        <FormLabel>Email</FormLabel>
                        <Input
                            type="email"
                            onChange={_validateEmail.setInputValue}
                            name="email"
                        />
                        {_validateEmail.isEmpty ? (
                            <FormErrorMessage>
                                Field cannot be empty
                            </FormErrorMessage>
                        ) : !_validateEmail.isMatch ? (
                            <FormErrorMessage>
                                Input is not a valid email
                            </FormErrorMessage>
                        ) : (
                            <></>
                        )}
                    </FormControl>
                </Box>

                <Box>
                    <FormControl>
                        <FormLabel>Name</FormLabel>
                        <Input name="name" />
                    </FormControl>
                </Box>

                <Box>
                    <FormControl isRequired>
                        <FormLabel>Commission type</FormLabel>
                        <Select placeContent={"asdad"} name="comm-type">
                            {_commTypes.map((item) => (
                                <option key={item} value={item}>
                                    {item}
                                </option>
                            ))}
                        </Select>
                    </FormControl>
                </Box>

                <Box>
                    <FormControl
                        isRequired
                        isInvalid={_validateRefLinks.isError}
                    >
                        <FormLabel>Reference sheet links</FormLabel>
                        <Textarea
                            onChange={_validateRefLinks.setInputValue}
                            name="ref-links"
                        />
                        {_validateRefLinks.isEmpty && (
                            <FormErrorMessage>
                                Field cannot be empty
                            </FormErrorMessage>
                        )}
                    </FormControl>
                </Box>

                <Box>
                    <FormControl>
                        <FormLabel>Secret commission?</FormLabel>
                        <RadioGroup
                            onChange={_handleRadioValue.setValue}
                            value={_handleRadioValue.value}
                        >
                            <Stack direction={"row"}>
                                <Radio value="Yes" name="is-secret">
                                    Yes
                                </Radio>
                                <Radio value="No" name="not-secret">
                                    No
                                </Radio>
                            </Stack>
                        </RadioGroup>
                    </FormControl>
                </Box>

                <Box>
                    <FormControl>
                        <FormLabel>Other means of contact</FormLabel>
                        <Textarea name="contacts" />
                    </FormControl>
                </Box>

                <Box>
                    <FormControl>
                        <FormLabel>Extra information</FormLabel>
                        <Textarea name="extra-info" />
                    </FormControl>
                </Box>

                <Box>
                    <Button type="submit">Submit</Button>
                </Box>
            </Stack>
        </form>
    )
}
