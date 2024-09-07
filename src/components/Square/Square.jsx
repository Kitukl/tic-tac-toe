import PropTypes from 'prop-types'
import './Square.css'

export function Square({ value, onClick }) {
	return (
		<button className='square' onClick={onClick}>
			{value}
		</button>
	)
}

Square.propTypes = {
	value: PropTypes.string,
	onClick: PropTypes.func.isRequired,
}
