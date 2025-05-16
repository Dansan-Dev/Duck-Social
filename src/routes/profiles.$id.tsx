import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/profiles/$id')({
  component: RouteComponent,
})

function RouteComponent() {
  const { id } = Route.useParams()
  return <div>Hello "/profiles/{id}"!</div>
}
