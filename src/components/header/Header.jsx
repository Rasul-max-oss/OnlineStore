import React from 'react'
import Button from '../Button/button'
function Header() {
	const tg = window.Telegram.WebApp;
	const onClose = () => {
		tg.close()
	}
	return (
		<div className={'header'}>
			<Button>Закрыть </Button>
			<span className={'username'}></span>
		</div>
	)
}

export default Header
