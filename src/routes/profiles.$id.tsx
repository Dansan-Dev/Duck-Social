import {createFileRoute} from '@tanstack/react-router'
import {useEffect, useState} from "react";
import {fetchProfile} from "../utils/fetching.ts"

export const Route = createFileRoute('/profiles/$id')({
    component: RouteComponent,
})

function RouteComponent() {
    const [name, setName] = useState('')
    const {id} = Route.useParams()

    useEffect(() => {
        fetchProfile(setName, id).then()
    }, [])
    return (
        <div>
            <p>
                Welcome {name}!
            </p>
        </div>
    )
}
