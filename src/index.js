import React from "react";
import ReactDOM from "react-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import {
	useQuery,
	useMutation,
	useQueryCache,
	QueryCache,
	ReactQueryCacheProvider,
} from "react-query";
import { ReactQueryDevtools } from "react-query-devtools";

import "./styles/index.css";
import App from "./components/App";

const queryCache = new QueryCache();

ReactDOM.render(
	<React.StrictMode>
		<ChakraProvider>
			<BrowserRouter>
				<ReactQueryCacheProvider queryCache={queryCache}>
					<App />
					<ReactQueryDevtools initialIsOpen />
				</ReactQueryCacheProvider>
			</BrowserRouter>
		</ChakraProvider>
	</React.StrictMode>,
	document.getElementById("root")
);
