import React from 'react';
import './Chats.css';
import Chat from './Chat';

const Chats = () => {
	return (
		<div className="chats">
			<Chat
				name="Ellen"
				message="Hey Whtsup!!"
				timestamp="32 minutes ago.."
				profilePic="https://upload.wikimedia.org/wikipedia/commons/b/b8/Ellen_DeGeneres_2011.jpg"
			/>
			<Chat
				name="Camila"
				message="Hey Man! Hows you doing??"
				timestamp="48 minutes ago.."
				profilePic="https://ca-times.brightspotcdn.com/dims4/default/21bd5bf/2147483647/strip/true/crop/4480x3240+0+0/resize/1486x1075!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Fc2%2F6c%2Fd3e4309d457e9c7ef2e26dd7c358%2Fla-photos-1staff-472211-ca-1122-camila-cabello-10-cmc.jpg"
			/>
			<Chat
				name="Amber"
				message="Are you up there?!"
				timestamp="1 hour ago.."
				profilePic="https://i.pinimg.com/236x/99/2d/7b/992d7b6d8c22dde61eb0f923ec096be7--amber-heard-makeup-amber-heard-hair.jpg"
			/>
			<Chat
				name="Ana"
				message="I am Coming for you!"
				timestamp="2 hours ago.."
				profilePic="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/ana-de-armas-attends-the-knives-out-premiere-during-the-news-photo-1584022009.jpg?crop=0.670xw:1.00xh;0.0969xw,0.00255xh&resize=480:*"
			/>
		</div>
	);
};

export default Chats;
