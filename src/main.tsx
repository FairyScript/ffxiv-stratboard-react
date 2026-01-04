import {
  createBrowserHistory,
  createRouter,
  RouterProvider,
} from '@tanstack/react-router'
import { routeTree } from './routeTree.gen'
import './index.css'
import ReactDOM from 'react-dom/client'

const history = createBrowserHistory()

// Set up a Router instance
const router = createRouter({
  routeTree,
  history,
})

// Register things for typesafety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

const rootElement = document.getElementById('root')!

if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(<RouterProvider router={router} />)
}
