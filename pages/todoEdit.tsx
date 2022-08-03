import React from "react";
import Head from "next/head";
import {
  Box,
  Button,
  Container,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Spacer,
  Text,
  Textarea,
  VStack,
} from "@chakra-ui/react";

import { Header } from "../components/Header";

export default function TodoEdit() {
  return (
    <>
      <Head>
        <title>Todo Edit</title>
      </Head>
      <Header />
      <Container mt="16px" p="0" w="84.375%" maxW="1080px">
        <VStack>
          <Flex w="100%">
            <Text
              fontSize="28px"
              fontWeight="bold"
              lineHeight="33px"
              color="blackAlpha.800"
            >
              EDIT TODO
            </Text>
            <Spacer />
            <Button
              w="112px"
              h="40px"
              mt="8px"
              fontSize="18px"
              fontWeight="bold"
              bg="green.300"
              color="blackAlpha.800"
              borderWidth="1px"
              borderColor="blackAlpha.800"
              borderRadius="50px"
            >
              Back
            </Button>
          </Flex>
          <FormControl>
            <FormLabel
              m="0"
              fontSize="24px"
              fontWeight="bold"
              lineHeight="24px"
              color="blackAlpha.800"
            >
              TITLE
            </FormLabel>
            <Input
              h="71px"
              mt="5px"
              p="8px 16px"
              fontSize="20px"
              fontWeight="bold"
              color="blackAlpha.800"
              borderWidth="1px"
              borderColor="blackAlpha.800"
              borderRadius="10px"
            />
          </FormControl>
          <FormControl>
            <FormLabel
              // FormControlにmt:8pxがあるため、FormLabelのmtは8pxに設定
              m="8px 0 0 0"
              fontSize="24px"
              fontWeight="bold"
              lineHeight="24px"
              color="blackAlpha.800"
            >
              DETAIL
            </FormLabel>
            <Textarea
              h="287px"
              mt="4px"
              fontSize="20px"
              fontWeight="bold"
              color="blackAlpha.800"
              borderWidth="1px"
              borderColor="blackAlpha.800"
              borderRadius="10px"
            />
          </FormControl>
          <Flex w="100%">
            <Flex
              // Flexにmt:8pxがあるため、Buttonのmtは16pxに設定
              mt="16px"
            >
              <Flex direction="column">
                <Text
                  fontSize="16px"
                  fontWeight="bold"
                  lineHeight="16px"
                  color="blackAlpha.800"
                >
                  Create
                </Text>
                <Text
                  mt="4px"
                  fontSize="20px"
                  fontWeight="bold"
                  lineHeight="20px"
                  color="blackAlpha.800"
                >
                  2020-11-8 18:55
                </Text>
              </Flex>
              <Flex ml="27px" direction="column">
                <Text
                  fontSize="16px"
                  fontWeight="bold"
                  lineHeight="16px"
                  color="blackAlpha.800"
                >
                  Update
                </Text>
                <Text
                  mt="4px"
                  fontSize="20px"
                  fontWeight="bold"
                  lineHeight="20px"
                  color="blackAlpha.800"
                >
                  2020-11-8 18:55
                </Text>
              </Flex>
            </Flex>
            <Spacer />
            <Button
              w="112px"
              h="40px"
              // Flexにmt:8pxがあるため、Buttonのmtは16pxに設定
              mt="16px"
              p="0"
              fontSize="18px"
              fontWeight="bold"
              bg="green.600"
              color="green.50"
              borderWidth="1px"
              borderColor="blackAlpha.800"
              borderRadius="50px"
            >
              UPDATE
            </Button>
          </Flex>
        </VStack>
      </Container>
    </>
  );
}
