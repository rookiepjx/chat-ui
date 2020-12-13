import React from "react";
import "./App.css";
import ChatApp from "components/ChatApp";
import { ThemeProvider } from "styled-components";
import theme from "./theme";
import { BrowserRouter } from "react-router-dom";

function App() {
	return (
		// 通过styled-components的ThemeProvider组件传递主题定制样式
		<BrowserRouter>
			<ThemeProvider theme={theme}>
				<ChatApp />
			</ThemeProvider>
		</BrowserRouter>
	);
}

export default App;
