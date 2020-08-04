import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import './Chats.css';

const ChatScreen = () => {
	const [ input, setInput ] = useState('');
	const [ message, setMessage ] = useState([
		{
			name: 'Ellen',
			message: 'Hey Whatsup!!',
			image: 'https://upload.wikimedia.org/wikipedia/commons/b/b8/Ellen_DeGeneres_2011.jpg'
		},
		{
			name: 'Ellen',
			message: 'Hows it going??',
			image: 'https://upload.wikimedia.org/wikipedia/commons/b/b8/Ellen_DeGeneres_2011.jpg'
		},
		{
			message: 'Hey! I am fine.. How about you??'
		},
		{
			message: 'Lets Hangout!!'
		}
	]);

	const onSubmitMessage = (e) => {
		e.preventDefault();
		setMessage([ ...message, { message: input } ]);
		setInput('');
	};
	return (
		<div className="chatScreen">
			<p className="chatScreen__header">YOU MATCHED WITH ELLEN ON 20/01/2020</p>
			{message.map(
				(msg) =>
					msg.name ? (
						<div className="chatScreen__message" key={msg.name}>
							<Avatar className="chatScreen__avatar" src={msg.image} alt={msg.name} />
							<p className="chatScreen__text">{msg.message}</p>
						</div>
					) : (
						<div className="chatScreen__message">
							<p className="chatScreen__textUser">{msg.message}</p>
						</div>
					)
			)}
			<div className="chatScreen__input">
				<form>
					<input
						value={input}
						onChange={(e) => setInput(e.target.value)}
						type="text"
						className="chatScreen__inputField"
						placeholder="Type a message..."
					/>
					<button onClick={onSubmitMessage} className="chatScreen__inputButton">
						SEND
					</button>
				</form>
			</div>
		</div>
	);
};

export default ChatScreen;
