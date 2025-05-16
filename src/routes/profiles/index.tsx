import {createFileRoute} from '@tanstack/react-router'
import {ProfileCard} from "@/components/ProfileCard.tsx";

export const Route = createFileRoute('/profiles/')({
    component: Profiles,
})

function Profiles() {
    return (
        <div className="flex justify-center">
            <div className="grid grid-cols-3 gap-y-2 gap-x-2">
                <ProfileCard name={"Carl"}/>
                <ProfileCard name={"Peter"}/>
                <ProfileCard name={"Charles"}/>
                <ProfileCard name={"Carl2"}/>
                <ProfileCard name={"Peter2"}/>
                <ProfileCard name={"Charles2"}/>
                <ProfileCard name={"Carl3"}/>
                <ProfileCard name={"Peter3"}/>
                <ProfileCard name={"Charles3"}/>
                <ProfileCard name={"Carl4"}/>
                <ProfileCard name={"Peter4"}/>
                <ProfileCard name={"Charles4"}/>
            </div>
        </div>
    )
}