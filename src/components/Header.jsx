import React from "react";
import { Link } from "react-router-dom";

import {
	Flex,
	Menu,
	MenuButton,
	MenuList,
	MenuItem,
	Heading,
	Button,
	Image,
} from "@chakra-ui/react";

import ico-menu from "../img/icon-menu.svg"

const Header = (props) => (
	<Flex
		bg="#065666"
		color="#C4F1F9"
		h="4rem"
		pl="4rem"
		pr="4rem"
		w="100%"
		justify="space-between"
		alignItems="center"
	>
		<Heading as="h1">{props.pagename}</Heading>
		<Flex>
		<Button
		bg="#065666" 
		color="#C4F1F9"
		_hover={{ bg: "#0987A0" }}
		_expanded={{ bg: "#0987A0" }}
		variant="ghost"
		borderRadius="8px"
		size="lg"
		>
		<Link to="/profile">
			Log in
		</ Link>
		</Button>
		<Menu>
			<Flex ml="1rem" flexDir="row">
				<MenuButton
					as={Button}
					color="#C4F1F9"
					_hover={{ bg: "#0987A0" }}
					_expanded={{ bg: "#0987A0" }}
					variant="ghost"
					// w="2rem"
					borderRadius="8px"
					size="lg"
				>
					<Image src=""/>
					Home
				</MenuButton>
				<MenuList bg="#065666" _expanded={{ bg: "#0987A0" }}>
					<Link to="/">
						<MenuItem _hover={{ bg: "#0987A0" }}>Home</MenuItem>
					</Link>
					<Link to="/about">
						<MenuItem _hover={{ bg: "#0987A0" }}>About</MenuItem>
					</Link>
					<Link to="/profile">
						<MenuItem _hover={{ bg: "#0987A0" }}>Profile</MenuItem>
					</Link>
				</MenuList>
			</Flex>
		</Menu>
		</Flex>
	</Flex>
);

export default Header;
