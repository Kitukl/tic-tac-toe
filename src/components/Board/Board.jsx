import PropTypes from 'prop-types'
import { Square } from '../Square/Square'
import './Board.css'

export function Board({ squares, onClick }) {
	const renderSquares = index => {
		return <Square value={squares[index]} onClick={() => onClick(index)} />
	}

	return (
		<div className='container'>
			<div className='board-row'>
				{renderSquares(0)}
				{renderSquares(1)}
				{renderSquares(2)}
			</div>
			<div className='board-row'>
				{renderSquares(3)}
				{renderSquares(4)}
				{renderSquares(5)}
			</div>
			<div className='board-row'>
				{renderSquares(6)}
				{renderSquares(7)}
				{renderSquares(8)}
			</div>
		</div>
	)
}

Board.propTypes = {
	squares: PropTypes.arrayOf(PropTypes.string).isRequired,
	onClick: PropTypes.func.isRequired,
}
