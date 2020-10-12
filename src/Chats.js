import React from 'react';
//import './Chats.css';
import Chat from "./Chat";

function Chats() {
	return (
		<div className="chats">
			<Chat
				name="Daniel"
				message="marico el que lo lea :)"
				timestamp="40 seconds ago"
				profilePic="https://i.ibb.co/9NYKrM4/daniel.jpg"
			/>
			<Chat
				name="Andrea"
				message="codigo ponyyy wey!!"
				timestamp="20 minutes ago"
				profilePic="https://i.ibb.co/J7DQYML/andrea.jpg"
			/>
			<Chat
				name="Mapa"
				message="men cuando me visitais??"
				timestamp="4 days ago"
				profilePic="https://i.ibb.co/8m7ST9L/mapa.jpg"
			/>
			<Chat
				name="Werner"
				message="brooo atiende el telefono..."
				timestamp="1 month ago"
				profilePic="https://i.ibb.co/Drn0TtM/wener.jpg"
			/>
		</div>
	)
}

export default Chats;