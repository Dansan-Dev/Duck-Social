import {createFileRoute} from '@tanstack/react-router'
import {SignupForm} from "@/components/SignupForm.tsx";

export const Route = createFileRoute('/signup')({
    component: RouteComponent,
})

function RouteComponent() {
    return (
        <div>
            <p>
                Hello "/signup"!
            </p>
            <SignupForm/>
        </div>
    )
}
