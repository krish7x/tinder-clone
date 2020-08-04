import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import './Chats.css';
import { Link } from 'react-router-dom';

const Chat = ({ name, message, timestamp, profilePic }) => {
	return (
		<Link to={`/chat/${name}`}>
			<div className="chat">
				<Avatar className="chat__avatar" src={profilePic} alt={name} />
				<div className="chat__content">
					<h2>{name}</h2>
					<p>{message}</p>
				</div>
				<p className="chat__timestamp">{timestamp}</p>
			</div>
		</Link>
	);
};

export default Chat;
