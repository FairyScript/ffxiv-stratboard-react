import { createFileRoute } from '@tanstack/react-router'
import StartBoard from '../components/StartBoard'

export const Route = createFileRoute('/s')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="w-full h-full">
      <StartBoard />
    </div>
  )
}
