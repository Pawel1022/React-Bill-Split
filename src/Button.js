export function Button({ children, fn }) {
	return (
		<button className='button' onClick={fn}>
			{children}
		</button>
	)
}
