import { useState } from 'react'
import { FriendsList } from './FriendsList'
import { FormAddFriend } from './FormAddFriend'
import { Button } from './Button'
import { FormSplitBill } from './FormSplitBill'
import { initialFriends } from './initialFriends'
import './index.css'
export default function App() {
	const [friends, setFriends] = useState(initialFriends)
	const [showAddFriend, setShowAddFriend] = useState(false)
	const [selectedFriend, setSelectedFriend] = useState(null)

	function handleShowAddFriend() {
		setShowAddFriend(show => !show)
		setSelectedFriend(null)
	}

	function handleAddFriend(friendName, friendImg, friendId) {
		setFriends(friends => [...friends, { id: friendId, name: friendName, image: friendImg, balance: 0 }])
		handleShowAddFriend()
	}

	function handleSelection(friend) {
		setSelectedFriend(cur => (cur?.id === friend.id ? null : friend))
		setShowAddFriend(false)
	}

	function handleSplitBill(value) {
		setFriends(friends =>
			friends.map(friend => (friend.id === selectedFriend.id ? { ...friend, balance: friend.balance + value } : friend))
		)
		setSelectedFriend(null)
	}

	return (
		<div className='app'>
			<div className='sidebar'>
				<FriendsList friends={friends} onSelection={handleSelection} selectedFriend={selectedFriend} />
				{showAddFriend && <FormAddFriend onSetFriends={handleAddFriend} />}
				<Button fn={handleShowAddFriend}>{showAddFriend ? 'Close' : 'Add friend'}</Button>
			</div>
			{selectedFriend && <FormSplitBill selectedFriend={selectedFriend} onSplitBill={handleSplitBill} />}
		</div>
	)
}
