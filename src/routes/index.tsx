import {createFileRoute} from '@tanstack/react-router'
import '../App.css'

export const Route = createFileRoute('/')({
    component: Home,
})

function Home() {
    return (
        <div className="App">
            <header className="App-header">
                <p>Welcom to the Home page</p>
            </header>
        </div>
    )
}
