import type { IconType } from 'xiv-strat-board'
import type { IconProps } from '../@types/iconProps'
import CircleAoe from './CircleAoe'
import Donut from './Donut'
import LineAoe from './LineAoe'
import LineBlock from './LineBlock'
import NormalIcon from './NormalIcon'
import TextBlock from './TextBlock'

const Icon: React.FC<IconProps> = ({ data }) => {
  switch (data.type as IconType) {
    case 'line_aoe': {
      return <LineAoe data={data} />
    }
    case 'donut': {
      return <Donut data={data} />
    }
    case 'text': {
      return <TextBlock data={data} />
    }
    case 'line': {
      return <LineBlock data={data} />
    }

    case 'circle_aoe':
    case 'fan_aoe': {
      return <CircleAoe data={data} />
    }
    default:
      return <NormalIcon data={data} />
  }
}

export default Icon
