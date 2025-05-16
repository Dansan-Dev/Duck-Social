import {createFileRoute} from '@tanstack/react-router'
import {ProfileCard} from "@/components/ProfileCard.tsx";
import {fetchAllProfiles} from "@/utils/fetching.ts";
import {useEffect, useState} from "react";

export const Route = createFileRoute('/profiles/')({
    component: Profiles,
})

function Profiles() {
    const [profiles, setProfiles] = useState([]);

    useEffect(() => {
        fetchAllProfiles(setProfiles).then()
    }, [])

    // @ts-ignore
    const names = profiles.map(profile => profile.name)

    return (
        <div className="flex justify-center">
            <div className="grid grid-cols-3 gap-y-2 gap-x-2">
                {names.map((name, index) => (
                    <ProfileCard name={name} key={index}/>
                ))}
            </div>
        </div>
    )
}