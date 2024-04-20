export function keypress(node) {
	function handleKeypress(e) {
		switch (e.key) {
			case 'Enter':
				node.dispatchEvent(new CustomEvent('enterkey'))
				break
			case 'ArrowUp':
				node.dispatchEvent(new CustomEvent('arrowup'))
				break
			case 'ArrowDown':
				node.dispatchEvent(new CustomEvent('arrowdown'))
				break
			default:
				break
		}
	}

	document.addEventListener('keydown', handleKeypress, true)

	return {
		destroy() {
			document.removeEventListener('keydown', handleKeypress, true)
		}
	}
}