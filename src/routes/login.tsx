import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/login')({
  validateSearch: (search: Record<string, unknown>) => {
    return {
      id: String(search.id || ''),
      name: String(search.name || ''),
    }
  },
  component: RouteComponent,
})

function RouteComponent() {
  const search: {id: number, name: string} = Route.useSearch()
  console.log(search)
  return <div>{search.name}</div>
}
