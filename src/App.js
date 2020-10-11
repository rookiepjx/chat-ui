import React from "react";
import logo from "./logo.svg";
import "./App.css";

import styled from "styled-components";

const MyButton = styled.div`
	height: 50px;
	width: 100px;
  background-color: ${(props) => props.theme.primaryColor};
  font-size:15px;
  text-align:center;
  line-height:50px;
  border-radius:25px;
  padding:0 10px;

`;

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<MyButton>定制你的主题</MyButton>
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
			</header>
		</div>
	);
}

export default App;
