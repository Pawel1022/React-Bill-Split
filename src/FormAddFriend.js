import { useState } from 'react'
import { Button } from './Button'

export function FormAddFriend({ onSetFriends }) {
	const [friendName, setFriendName] = useState('')
	const [friendImg, setFriendImg] = useState('https://i.pravatar.cc')

	return (
		<form
			className='form-add-friend'
			onSubmit={e => {
				e.preventDefault()
				if (friendName !== '' && friendImg !== '') onSetFriends(friendName, friendImg, crypto.randomUUID)
				setFriendName('')
				setFriendImg('')
			}}>
			<label>🧑‍🤝‍🧑 Friend name</label>
			<input type='text' value={friendName} onChange={e => setFriendName(e.target.value)}></input>
			<label>🖼️ Image URL</label>
			<input type='text' value={friendImg} onChange={e => setFriendImg(e.target.value)}></input>
			<Button>Add</Button>
		</form>
	)
}
