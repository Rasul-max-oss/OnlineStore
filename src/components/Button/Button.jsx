import React from 'react'

function Button(props) {
	return (
		<div>
			<button {...props} className={'button' + props.className} />
		</div>
	)
}

export default Button
