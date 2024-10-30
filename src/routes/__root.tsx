import {  createRootRoute} from '@tanstack/react-router'
import {TanStackRouterDevtools} from '@tanstack/router-devtools'
import MasterLayout from '../layouts/master.layout'

export const Route = createRootRoute({
  component: () => (
    <>
        <MasterLayout />
      <TanStackRouterDevtools />
    </>
  ),
})
