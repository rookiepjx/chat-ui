import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { ThemeProvider } from "styled-components";

import theme from "./theme";

ReactDOM.render(
	// 通过styled-components的ThemeProvider组件传递主题定制样式
	<ThemeProvider theme={theme}>
		<App />
	</ThemeProvider>,
	document.getElementById("root")
);
