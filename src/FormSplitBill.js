import { useState } from 'react'
import { Button } from './Button'

export function FormSplitBill({ selectedFriend, onSplitBill }) {
	const [bill, setBill] = useState('')
	const [paidByUser, setPaidByUser] = useState('')
	const friendExpense = bill ? bill - paidByUser : ''
	const [whoIsPaying, setWhoIsPaying] = useState('user')

	function handleSubmit(e) {
		e.preventDefault()

		if (!bill || !paidByUser) return
		onSplitBill(whoIsPaying === 'user' ? friendExpense : -paidByUser)
	}

	return (
		<form className='form-split-bill' onSubmit={e => handleSubmit(e)}>
			<h2>{`Split a bill with ${selectedFriend.name}`}</h2>

			<label>💰 Bill value</label>
			<input type='text' value={bill} onChange={e => setBill(+e.target.value)}></input>

			<label>👤 Your expense</label>
			<input
				type='text'
				value={paidByUser}
				onChange={e => setPaidByUser(+e.target.value > bill ? paidByUser : +e.target.value)}></input>

			<label>{`👥 ${selectedFriend.name} expense`}</label>
			<input type='text' value={friendExpense} disabled></input>

			<label>🤑 Who is paying the bill</label>
			<select value={whoIsPaying} onChange={e => setWhoIsPaying(e.target.value)}>
				<option value='user'>You</option>
				<option value='friend'>{selectedFriend.name}</option>
			</select>

			<Button>Split bill</Button>
		</form>
	)
}
