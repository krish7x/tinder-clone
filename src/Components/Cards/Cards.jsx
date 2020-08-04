import React, { useState, useEffect } from 'react';
import TinderCards from 'react-tinder-card';
import './Cards.css';
import { db } from '../../firebase/firebase';

const Cards = () => {
	const [ people, setPeople ] = useState([]);

	useEffect(() => {
		db.collection('people').onSnapshot((snapshot) => {
			setPeople(snapshot.docs.map((doc) => doc.data()));
		});
	}, []);
	return (
		<div className="cards">
			<div className="cards__container">
				{people.map((person) => (
					<TinderCards className="swipe" key={person.name} preventSwipe={[ 'up', 'down' ]}>
						<div className="tinder_card" style={{ backgroundImage: `url(${person.url})` }}>
							<h3>{person.name}</h3>
						</div>
					</TinderCards>
				))}
			</div>
		</div>
	);
};

export default Cards;
