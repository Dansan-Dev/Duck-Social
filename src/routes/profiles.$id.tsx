import { createFileRoute } from '@tanstack/react-router'
import {useEffect, useState} from "react";
import {fetchProfile} from "../utils/fetching.ts"

export const Route = createFileRoute('/profiles/$id')({
  component: RouteComponent,
})

function RouteComponent() {
  const [name, setName] = useState('')

  useEffect(() => {
    fetchProfile(setName).then()
  }, [])

  const { id } = Route.useParams()
  return (
      <div>
        <p>
          Hello "/profiles/{id}"!
        </p>
        <p>
          Welcome {name}!
        </p>
      </div>
  )
}
