import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Cards from './Components/Cards/Cards';
import SwipeButtons from './Components/Swipe-Buttons/SwipeButtons';
import Chats from './Components/Chats/Chats';
import ChatScreen from './Components/Chats/ChatScreen';

function App() {
	return (
		<div className="app">
			<Router>
				<Switch>
					<Route path="/chat/:person">
						<Header backButton="/chats" />
						<ChatScreen />
					</Route>
					<Route path="/chats">
						<Header backButton="/" />
						<Chats />
					</Route>
					<Route path="/">
						<Header />
						<Cards />
						<SwipeButtons />
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
