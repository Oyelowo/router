---
id: RouterProvider
title: RouterProvider
---

Use the `RouterProvider` component to connect and provide a `ReactRouter` to your application:

```tsx
import { RouterProvider, ReactRouter } from '@tanstack/react-router'

const router = new ReactRouter()

function App() {
  return <RouterProvider router={router} />
}
```

**Options**

- `router: Router`
  - **Required**
  - the `ReactRouter` instance to provide
- `history?: BrowserHistory | MemoryHistory | HashHistory`
  - **Optional**
- `stringifySearch?: SearchSerializer`
  - **Optional**
- `parseSearch?: SearchParser`
  - **Optional**
- `filterRoutes?: FilterRoutesFn`
  - **Optional**
- `defaultPreload?: false | 'intent'`
  - **Optional**
- `defaultPreloadMaxAge?: number`
  - **Optional**
- `defaultPreloadGcMaxAge?: number`
  - **Optional**
- `defaultPreloadDelay?: number`
  - **Optional**
- `defaultComponent?: GetFrameworkGeneric<'Component'>`
  - **Optional**
- `defaultErrorComponent?: GetFrameworkGeneric<'ErrorComponent'>`
  - **Optional**
- `defaultPendingComponent?: GetFrameworkGeneric<'Component'>`
  - **Optional**
- `defaultLoaderMaxAge?: number`
  - **Optional**
- `defaultLoaderGcMaxAge?: number`
  - **Optional**
- `caseSensitive?: boolean`
  - **Optional**
- `routeConfig?: TRouteConfig`
  - **Optional**
- `basepath?: string`
  - **Optional**
- `useServerData?: boolean`
  - **Optional**
- `Router?: (router: Router<any, any, any>) => void`
  - **Optional**
- `createRoute?: (opts: { route: AnyRoute, router: Router<any, any, any> }) => void`
  - **Optional**
- `context?: TRouterContext`
  - **Optional**
- `loadComponent?: (component: GetFrameworkGeneric<'Component'>) => Promise<GetFrameworkGeneric<'Component'>`
  - **Optional**
