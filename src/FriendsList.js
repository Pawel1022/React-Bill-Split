import { Friend } from './Friend'

export function FriendsList({ friends, onSelection, selectedFriend }) {
	return (
		<ul>
			{friends.map(friend => (
				<Friend friend={friend} onSelection={onSelection} selectedFriend={selectedFriend} key={friend.id} />
			))}
		</ul>
	)
}
