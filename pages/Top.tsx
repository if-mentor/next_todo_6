import { Layout } from "../components/Layout";

import {
	DeleteIcon,
	EditIcon,
	ExternalLinkIcon,
	SearchIcon,
	ChevronLeftIcon,
	ChevronRightIcon,
} from "@chakra-ui/icons";

import {
	Center,
	Container,
	Flex,
	HStack,
	Spacer,
	Stack,
	Text,
	VStack,
	InputGroup,
	InputRightElement,
	Input,
	Select,
	IconButton,
	TableContainer,
	Tr,
	Thead,
	Table,
	Th,
	Button,
	Td,
	Tbody,
	ButtonProps,
} from "@chakra-ui/react";

import { useState } from "react";

import {
	Paginator,
	// Container,
	Previous,
	Next,
	PageGroup,
	usePaginator,
} from "chakra-paginator";

const Top = () => {
	const [input, setInput] = useState("Text");
	const [selectOne, setSelectOne] = useState("high");
	const [selectTwo, setSelectTwo] = useState("low");
	const [selectThree, setSelectThree] = useState("middle");
	const [selectFour, setSelectFour] = useState("high");
	const [selectFive, setSelectFive] = useState("high");
	const [selectSix, setSelectSix] = useState("low");
	const [buttonOne, setbuttonOne] = useState("NOT STARTED");

	const pagesQuantity = 5;
	const { currentPage, setCurrentPage } = usePaginator({
		initialState: { currentPage: 1 },
	});

	const normalStyles: ButtonProps = {
		w: "40px",
		fontSize: "sm",
		_hover: {
			bg: "green.300",
		},
	};

	const activeStyles: ButtonProps = {
		w: "40px",
		fontSize: "sm",
		_hover: {
			bg: "green.300",
		},
	};

	const separatorStyles: ButtonProps = {
		w: 7,
		bg: "green.200",
	};

	return (
		<Layout title="TOP">
			<Container mt={`16px`}>
				<Center>
					<VStack>
						<Flex w={`1080px`}>
							<Stack>
								<Text
									fontSize="28px"
									fontWeight="bold"
									lineHeight="33px"
									color="blackAlpha.800">
									TODO LIST
								</Text>
								<Flex w={`624px`} mt={`15px`}>
									<Text fontSize={`18px`} fontWeight={`bold`} w={`165px`}>
										SEARCH
									</Text>
									<Text fontSize={`18px`} fontWeight={`bold`} w={`160px`}>
										STATUS
									</Text>
									<Text fontSize={`18px`} fontWeight={`bold`}>
										PRIORITY
									</Text>
								</Flex>
								<Flex>
									<HStack spacing={4}>
										<InputGroup>
											<InputRightElement pointerEvents="none">
												<SearchIcon color={`gray.300`} />
											</InputRightElement>
											<Input
												value={input}
												type={`text`}
												onChange={(e) => setInput(e.target.value)}
											/>
										</InputGroup>
										<Select placeholder="-------">
											<option value="notStarted">NOT STARTED</option>
											<option value="doing">DOING</option>
											<option value="done">DONE</option>
										</Select>
										<Select placeholder="-------">
											<option value="high">High</option>
											<option value="middle">Middle</option>
											<option value="low">Low</option>
										</Select>
									</HStack>
									<Button
										color={`blackAlpha.800`}
										variant={`outline`}
										bgColor={`blackAlpha.500`}
										w={`104px`}
										h={`40px`}
										borderRadius={`3xl`}
										borderColor={`black.800`}
										fontSize={`18px`}
										fontFamily={`roboto`}
										fontWeight={`bold`}
										ml={`24px`}>
										RESET
									</Button>
								</Flex>
							</Stack>
							<Spacer />
							<Stack
								mt={`16px`}
								spacing={`16px`}
								direction="row"
								align="center">
								<IconButton
									bgColor="yellow.300"
									aria-label="Delete"
									icon={<DeleteIcon />}
									borderRadius={`full`}
									variant={`outline`}
									borderColor={`gray.400`}
									h={`40px`}
									w={`40px`}
								/>
								<IconButton
									aria-label="Edit"
									bgColor="pink.100"
									h={`40px`}
									w={`40px`}
									borderRadius={`full`}
									variant={`outline`}
									borderColor={`gray.400`}
									icon={<EditIcon />}
								/>
								<IconButton
									aria-label="Edit"
									bgColor="green.300"
									h={`40px`}
									w={`40px`}
									borderRadius={`full`}
									variant={`outline`}
									borderColor={`gray.400`}
									icon={<ExternalLinkIcon />}
								/>
							</Stack>
						</Flex>
						<TableContainer w={`1080px`}>
							<Table variant="simple">
								<Thead bgColor={`green.300`}>
									<Tr>
										<Th
											fontFamily={`roboto`}
											fontWeight={`bold`}
											fontSize={`24px`}
											color={`blackAlpha.800`}
											py={`19px`}>
											Task
										</Th>
										<Th
											fontFamily={`roboto`}
											fontWeight={`bold`}
											fontSize={`24px`}
											color={`blackAlpha.800`}
											py={`19px`}>
											Status
										</Th>
										<Th
											fontFamily={`roboto`}
											fontWeight={`bold`}
											fontSize={`24px`}
											color={`blackAlpha.800`}
											py={`19px`}>
											Priority
										</Th>
										<Th
											fontFamily={`roboto`}
											fontWeight={`bold`}
											fontSize={`24px`}
											color={`blackAlpha.800`}
											py={`19px`}>
											Create
										</Th>
										<Th
											fontFamily={`roboto`}
											fontWeight={`bold`}
											fontSize={`24px`}
											color={`blackAlpha.800`}
											py={`19px`}>
											Update
										</Th>
										<Th
											fontFamily={`roboto`}
											fontWeight={`bold`}
											fontSize={`24px`}
											color={`blackAlpha.800`}
											py={`19px`}>
											Action
										</Th>
									</Tr>
								</Thead>
								<Tbody>
									<Tr>
										<Td fontWeight={`bold`} w={`384px`}>
											Github
										</Td>
										<Td
											w={`139.2px`}
											p={`0`}
											textAlign={`center`}
											lineHeight={`56px`}>
											<Button
												color={`blackAlpha.800`}
												variant={`outline`}
												bgColor={`green.50`}
												w={`104px`}
												h={`40px`}
												borderRadius={`3xl`}
												borderColor={`blackAlpha.800`}
												fontSize={`12px`}
												fontWeight={`bold`}
												fontFamily={`roboto`}
												p={`0`}>
												{buttonOne}
											</Button>
										</Td>
										<Td w={`139.2px`} p={`0`} lineHeight={`56px`}>
											<Select
												placeholder="-------"
												h={`40px`}
												w={`112px`}
												mx={`auto`}
												borderColor={`red.500`}
												borderRadius={`10px`}
												value={selectOne}
												onChange={(e) => {
													setSelectOne(e.target.value);
												}}>
												<option value="high">High</option>
												<option value="middle">Middle</option>
												<option value="low">Low</option>
											</Select>
										</Td>
										<Td w={`139.2px`}>2020-11-8 18:55</Td>
										<Td w={`139.2px`}>2020-11-8 18:55</Td>
										<Td w={`139.2px`}>
											<HStack w={`56px`} mx={`auto`}>
												<EditIcon h={`24px`} w={`24px`} />
												<DeleteIcon h={`24px`} w={`24px`} />
											</HStack>
										</Td>
									</Tr>
									<Tr>
										<Td fontWeight={`bold`}>React Todo</Td>
										<Td
											w={`139.2px`}
											p={`0`}
											textAlign={`center`}
											lineHeight={`56px`}>
											<Button
												color={`green.50`}
												variant={`outline`}
												bgColor={`green.600`}
												w={`104px`}
												h={`40px`}
												borderRadius={`3xl`}
												borderColor={`blackAlpha.800`}>
												DOING
											</Button>
										</Td>
										<Td w={`139.2px`} p={`0`} lineHeight={`56px`}>
											<Select
												placeholder="-------"
												h={`40px`}
												w={`112px`}
												mx={`auto`}
												borderColor={`red.500`}
												borderRadius={`10px`}
												value={selectTwo}
												onChange={(e) => {
													setSelectTwo(e.target.value);
												}}>
												<option value="high">High</option>
												<option value="middle">Middle</option>
												<option value="low">Low</option>
											</Select>
										</Td>
										<Td>2020-11-8 18:55</Td>
										<Td>2020-11-8 18:55</Td>
										<Td>
											<HStack w={`56px`} mx={`auto`}>
												<EditIcon h={`24px`} w={`24px`} />
												<DeleteIcon h={`24px`} w={`24px`} />
											</HStack>
										</Td>
									</Tr>
									<Tr>
										<Td fontWeight={`bold`}>Firebase Hosting</Td>
										<Td
											w={`139.2px`}
											p={`0`}
											textAlign={`center`}
											lineHeight={`56px`}>
											<Button
												color={`blackAlpha.800`}
												variant={`outline`}
												bgColor={`green.300`}
												w={`104px`}
												h={`40px`}
												borderRadius={`3xl`}
												borderColor={`blackAlpha.800`}>
												DONE
											</Button>
										</Td>
										<Td w={`139.2px`} p={`0`} lineHeight={`56px`}>
											<Select
												placeholder="-------"
												h={`40px`}
												w={`112px`}
												mx={`auto`}
												borderColor={`red.500`}
												borderRadius={`10px`}
												value={selectThree}
												onChange={(e) => {
													setSelectThree(e.target.value);
												}}>
												<option value="high">High</option>
												<option value="middle">Middle</option>
												<option value="low">Low</option>
											</Select>
										</Td>
										<Td>2020-11-8 18:55</Td>
										<Td>2020-11-8 18:55</Td>
										<Td>
											<HStack w={`56px`} mx={`auto`}>
												<EditIcon h={`24px`} w={`24px`} />
												<DeleteIcon h={`24px`} w={`24px`} />
											</HStack>
										</Td>
									</Tr>
									<Tr>
										<Td></Td>
										<Td
											w={`139.2px`}
											p={`0`}
											textAlign={`center`}
											lineHeight={`56px`}>
											<Button
												color={`green.50`}
												variant={`outline`}
												bgColor={`green.600`}
												w={`104px`}
												h={`40px`}
												borderRadius={`3xl`}
												borderColor={`blackAlpha.800`}>
												DOING
											</Button>
										</Td>
										<Td w={`139.2px`} p={`0`} lineHeight={`56px`}>
											<Select
												placeholder="-------"
												h={`40px`}
												w={`112px`}
												mx={`auto`}
												borderColor={`red.500`}
												borderRadius={`10px`}
												value={selectFour}
												onChange={(e) => {
													setSelectFour(e.target.value);
												}}>
												<option value="high">High</option>
												<option value="middle">Middle</option>
												<option value="low">Low</option>
											</Select>
										</Td>
										<Td>2020-11-8 18:55</Td>
										<Td>2020-11-8 18:55</Td>
										<Td>
											<HStack w={`56px`} mx={`auto`}>
												<EditIcon h={`24px`} w={`24px`} />
												<DeleteIcon h={`24px`} w={`24px`} />
											</HStack>
										</Td>
									</Tr>
									<Tr>
										<Td></Td>
										<Td
											w={`139.2px`}
											p={`0`}
											textAlign={`center`}
											lineHeight={`56px`}>
											<Button
												color={`blackAlpha.800`}
												variant={`outline`}
												bgColor={`green.300`}
												w={`104px`}
												h={`40px`}
												borderRadius={`3xl`}
												borderColor={`blackAlpha.800`}>
												DONE
											</Button>
										</Td>
										<Td w={`139.2px`} p={`0`} lineHeight={`56px`}>
											<Select
												placeholder="-------"
												h={`40px`}
												w={`112px`}
												mx={`auto`}
												borderColor={`red.500`}
												borderRadius={`10px`}
												value={selectFive}
												onChange={(e) => {
													setSelectFive(e.target.value);
												}}>
												<option value="high">High</option>
												<option value="middle">Middle</option>
												<option value="low">Low</option>
											</Select>
										</Td>
										<Td>2020-11-8 18:55</Td>
										<Td>2020-11-8 18:55</Td>
										<Td>
											<HStack w={`56px`} mx={`auto`}>
												<EditIcon h={`24px`} w={`24px`} />
												<DeleteIcon h={`24px`} w={`24px`} />
											</HStack>
										</Td>
									</Tr>
									<Tr>
										<Td></Td>
										<Td
											w={`139.2px`}
											p={`0`}
											textAlign={`center`}
											lineHeight={`56px`}>
											<Button
												color={`green.50`}
												variant={`outline`}
												bgColor={`green.600`}
												w={`104px`}
												h={`40px`}
												borderRadius={`3xl`}
												borderColor={`blackAlpha.800`}>
												DOING
											</Button>
										</Td>
										<Td w={`139.2px`} p={`0`} lineHeight={`56px`}>
											<Select
												placeholder="-------"
												h={`40px`}
												w={`112px`}
												mx={`auto`}
												borderColor={`red.500`}
												borderRadius={`10px`}
												value={selectSix}
												onChange={(e) => {
													setSelectSix(e.target.value);
												}}>
												<option value="high">High</option>
												<option value="middle">Middle</option>
												<option value="low">Low</option>
											</Select>
										</Td>
										<Td>2020-11-8 18:55</Td>
										<Td>2020-11-8 18:55</Td>
										<Td>
											<HStack w={`56px`} mx={`auto`}>
												<EditIcon h={`24px`} w={`24px`} />
												<DeleteIcon h={`24px`} w={`24px`} />
											</HStack>
										</Td>
									</Tr>
								</Tbody>
							</Table>
						</TableContainer>
						<Paginator
							pagesQuantity={pagesQuantity}
							currentPage={currentPage}
							onPageChange={setCurrentPage}
							activeStyles={activeStyles}
							normalStyles={normalStyles}
							separatorStyles={separatorStyles}>
							<Flex
								alignItems={`center`}
								justifyContent={`space-between`}
								w={`352px`}
								p={`12px`}>
								<Previous>
									<ChevronLeftIcon />
								</Previous>
								<PageGroup isInline align={`center`} />
								<Next>
									<ChevronRightIcon />
								</Next>
							</Flex>
						</Paginator>
					</VStack>
				</Center>
			</Container>
		</Layout>
	);
};

export default Top;
