import { Flex, Box, Text, Avatar} from "@chakra-ui/react"

interface ProfileProps {
    showProfileData?: boolean;
}

export function Profile({showProfileData = true }: ProfileProps) {
    return (
        <Flex align="center">
            { showProfileData && (
                <Box mr="4" textAlign="right">
                <Text>Afonso Gouveia</Text>
                <Text color="gray.300" fontSize="samll">
                    gouvei44@gmail.com
                    </Text>
            </Box>
            )}

             <Avatar size="md" name="Afonso Gouveia" src="https://github.com/gouvei4.png"/>
         </Flex>
    );
}