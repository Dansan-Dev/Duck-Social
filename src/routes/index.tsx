import {createFileRoute} from '@tanstack/react-router'
import '../App.css'
import {useEffect, useState} from "react";

export const Route = createFileRoute('/')({
    component: Home,
})

function Home() {
    const [name, setName] = useState('')

    async function fetchProfile() {
        try {
            const resp = await fetch('http://localhost:8080/api/1')
            const data = await resp.json()
            setName(data.name)
        } catch (error) {
            console.error('Fetch error:', error);
        }
    }

    useEffect(() => {
        fetchProfile().then()
    }, [])

    return (
        <div className="App">
            <header className="App-header">
                <p>{name}</p>
            </header>
        </div>
    )
}
