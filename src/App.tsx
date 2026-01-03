import { decode } from 'xiv-strat-board'
import { Layer, Stage } from 'react-konva'
import Board from './components/Board'
import Icon from './components/Icon'

function App() {
  const board = getCode()
  return (
    <Stage width={1024} height={768}>
      <Layer>
        <Board type={board.boardBackground ?? 'none'} />
        {board.objects.reverse().map((obj, index) => (
          <Icon key={index} data={obj} />
        ))}
      </Layer>
    </Stage>
  )
}

export default App

function getCode() {
  const defaultCode =
    '[stgy:a2mW7zYpGVGucnON7LpkuDJH66enQBnNYQkCKKUR6lrKMrVuduwvMbQ5lYPO7cdfHNJexQfOqhOOYwu6DnluGxbRieZQbd41xysoX6g-8ue0Z14MAXSqNr+xsHeqFlaZ6P3ng1n6dc1xLH]'
  const code = location.hash.slice(1) || defaultCode

  try {
    const board = decode(code)
    console.log(board)
    return board
  } catch (error) {
    console.error(error)
    console.error('Failed to decode board code, using default.')
    console.error(code)
    return decode(defaultCode)
  }
}
