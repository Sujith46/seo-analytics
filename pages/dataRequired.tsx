import { NextPage } from "next";
import {
    Stack,
    Button,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    InputRightElement,
    Select,
    Heading,
} from "@chakra-ui/react";

const DataRequired: NextPage = () => {
    return (
        <div className="form-data-container">
            <Stack maxWidth={600} margin="auto" spacing={5} marginTop={5} p={4}>
                <Heading as="h2" size='md' mb={8}>Please add your article attributes for maximum seo</Heading>
                <FormControl>
                    <FormLabel>Add title for your article</FormLabel>
                    <Input isRequired type="text" mb={3}>
                    </Input>
                    <FormLabel>Keyword</FormLabel>
                    <Input isRequired type="text" mb={3}></Input>
                    <FormLabel>Platform</FormLabel>
                    <Select placeholder='Select platform' variant="outline"  mb={16}>
                        <option value='Google'>Google</option>
                        <option value='Facebook'>Facebook</option>
                        <option value='Instagram'>Instagram</option>
                        <option value='Linkedin'>LinkedIn</option>
                        <option value='Snapchat'>Snapchat</option>
                    </Select>
                    <Button bg="blue.700" color="white" width="100%">Submit attributes</Button>
                </FormControl>
            </Stack>
        </div>
    );
};

export default DataRequired;
