"use client";

import { Box, Button, Flex, Heading, Spacer } from "@chakra-ui/react";

const Header = () => {
    return (
        <Box as="header" bg="blue.500" color="white" px={6} py={4}>
            <Flex align="center">
                {/* タイトル */}
                <Heading size="md">My App</Heading>

                <Spacer />

                {/* ログインボタン */}
                <Button colorScheme="teal" variant="solid">
                    ログイン
                </Button>
            </Flex>
        </Box>
    );
};

export default Header;
