import { createFileRoute } from '@tanstack/react-router'
import PortfolioTerminal from '../components/terminal/terminal'

export const Route = createFileRoute('/')({
  component: () => <PortfolioTerminal />,
})
