import '../App.css'

type ProfileCardProps = {
    name: string
}

export function ProfileCard({ name }: ProfileCardProps) {
    return (
        <div className="relative flex flex-col items-center justify-center w-[200px] border-[2px] border-black-200">
            <p>Name: {name}</p>
            <p>Some Data 1</p>
            <p>Some Data 2</p>
            <p>Some Data 3</p>
        </div>
    )
}