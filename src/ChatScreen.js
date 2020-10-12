import React, { useState } from 'react';
import Avatar from "@material-ui/core/Avatar";

import "./ChatScreen.css";

function ChatScreen() {
	const [input, setInput] = useState('');
	const [messages, setMessages] = useState([
			{
				name: 'Daniel',
				image: 'https://i.ibb.co/9NYKrM4/daniel.jpg',
				message: 'heyyyyy brooo',
			},
			{
				message: 'que paso bro??',
			},
			{
				name: 'Daniel',
				image: 'https://i.ibb.co/9NYKrM4/daniel.jpg',
				message: 'marico el que lo lea :)',
			},
		]);

	const handleSend = e => {
		e.preventDefault();
		setMessages([...messages, { message: input}]);
		setInput("");
		};


	return (
		<div className="chatScreen">
			<p className="chatScreen__timestamp">YOU MATCHED WITH DANIEL ON 10/10/20</p>
			{messages.map(message => (
					message.name ? (
						<div className="chatScreen__message">
							<Avatar
								className="chatScreen__image"
								alt={message.name}
								src={message.image}
							/>
							<p className="chatScreen__text">{message.message}</p>
						</div>
					) : (
						<div className="chatScreen__message">
							<p className="chatScreen__textUser">{message.message}</p>
						</div>
			)))}

				<form className="chatScreen__input">
					<input
					value={input}
					onChange={e => setInput(e.target.value)}
					className="chatScreen__inputField"
					placeholder="Type a message..." type="text"/>
					<button onClick={handleSend} type="submit" className="chatScreen__inputButton">SEND</button>
				</form>
		</div>
	)
}

export default ChatScreen;