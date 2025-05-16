import {Outlet, createRootRouteWithContext} from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import type {AuthContext} from "@/hooks/useAuth.ts";

type RouterContext = {
    authentication: AuthContext;
}

export const Route = createRootRouteWithContext<RouterContext>()({
  component: () => (
    <>
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
})
