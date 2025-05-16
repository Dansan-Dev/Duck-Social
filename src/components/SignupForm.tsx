import {z} from "zod";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {useNavigate} from "@tanstack/react-router";
import {postProfile} from "@/utils/fetching.ts";

const signupSchema = z.object({
    name: z.string(),
})

type SignupData = z.infer<typeof signupSchema>

export function SignupForm() {
    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm<SignupData>({
        resolver: zodResolver(signupSchema)
    })

    const navigate = useNavigate()

    const onSubmit = async (data: SignupData) => {
        try {
            // Replace this with real API call
            console.log('Sending data to backend:', data)


            // Posting
            const profile: {id: string, name: string} = await postProfile(data.name)

            // Navigate to dashboard or login
            await navigate({
                from: '/signup',
                search: profile,
                to: '/login'
            })
        } catch (err) {
            console.error('Signup failed:', err)
        }
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 max-w-sm mx-auto">

            <input {...register('name')} placeholder="Name" className="border p-2"/>

            {errors.name && <p className="text-red-500">{errors.name.message}</p>}

            <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">
                Sign Up
            </button>

        </form>
    )
}