import { useEffect, useRef, useState } from 'react'
import { Layer, Stage } from 'react-konva'
import { decode } from 'xiv-strat-board'
import Board from './Board'
import Icon from './Icon'

const sceneWidth = 1024
const sceneHeight = 768

const debounce = (fn: TimerHandler, initial: number) => {
  let timer: number
  return () => {
    clearTimeout(timer)
    timer = setTimeout(fn, initial)
  }
}

const StartBoard: React.FC = () => {
  const [scale, setScale] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const updateScale = debounce(() => {
      // Get container width
      const containerWidth = containerRef.current!.clientWidth
      const containerHeight = containerRef.current!.clientHeight

      // Calculate scale
      const scaleWidth = containerWidth / sceneWidth
      const scaleHeight = containerHeight / sceneHeight
      const newScale = Math.min(scaleWidth, scaleHeight)
      setScale(newScale)
    }, 100)

    updateScale()
    window.addEventListener('resize', updateScale)

    return () => {
      window.removeEventListener('resize', updateScale)
    }
  }, [])

  return (
    <div ref={containerRef} className="w-full h-full">
      {scale > 0 && <StartBoardInner scale={scale} />}
    </div>
  )
}

export default StartBoard

interface StartBoardInnerProps {
  scale: number
}

const StartBoardInner: React.FC<StartBoardInnerProps> = ({ scale }) => {
  const board = getCode()
  return (
    <Stage
      width={1024}
      height={768}
      style={{
        transform: `scale(${scale})`,
        transformOrigin: 'top left',
      }}
    >
      <Layer>
        <Board type={board.boardBackground ?? 'none'} />
        {board.objects.reverse().map((obj, index) => (
          // biome-ignore lint/suspicious/noArrayIndexKey: there is no other key available
          <Icon key={index} data={obj} />
        ))}
      </Layer>
    </Stage>
  )
}

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
