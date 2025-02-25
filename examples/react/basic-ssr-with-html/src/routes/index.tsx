import { Route } from '@tanstack/react-router'
import * as React from 'react'
import { rootRoute } from './__root'

export const indexRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/',
  getContext: () => ({
    getTitle: () => 'Home',
  }),
  component: () => (
    <div className="p-2">
      <h3>Welcome Home!</h3>
    </div>
  ),
})
