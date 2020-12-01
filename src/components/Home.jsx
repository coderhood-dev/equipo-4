import React, { useState } from "react";
import { Flex, Box, Button, Heading } from "@chakra-ui/react";
import Header from "./Header";

export const Home = () => {
	return (
		<div>
			<Header pagename="Home" />
			<h1>Home</h1>
			<p> if we see this, master protection is broken</p>
		</div>
	);
};
