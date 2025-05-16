import {createFileRoute, useNavigate} from '@tanstack/react-router'
import {useState} from "react";
import * as React from "react";

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
  const search: {id: string, name: string} = Route.useSearch();
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState(search.id)
  console.log(search)

  async function handleEnter(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') {
      console.log("INPUT: ", inputValue)
      await navigate({
        to: "/profiles/" + inputValue
      })
    }
  }

  return (
      <div>
        <input
            type="text"
            placeholder="Enter ID"
            defaultValue={search.id}
            onChange={(e) => {
              console.log("TARGET_VALUE: ", e.target.value)
              setInputValue(e.target.value)
            }}
            onKeyDown={(e) => {
              handleEnter(e)
            }}
        />
      </div>)
}
