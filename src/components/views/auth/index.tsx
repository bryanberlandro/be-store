import Input from "@/components/fragments/Input";
import Loader from "@/components/fragments/Loader";
import Link from "next/link";
import { useRouter } from "next/router";
import { FormEvent, useState } from "react";

const RegisterView = () => {
    const { push } = useRouter()
    const [ isLoading, setIsLoading ] = useState(false)
    const [ err, setErr ] = useState('')

    const handleSubmit = async(e: FormEvent<HTMLFormElement>) => {
        setIsLoading(true)
        e.preventDefault();
        const form = e.target as HTMLFormElement;
        const data = {
            email: form.email.value,
            fullname: form.fullname.value,
            phone: form.phone.value,
            password: form.password.value
        }

        const result = await fetch('/api/user/register', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        const responseData = await result.json();
        if(result.status === 200){
            setIsLoading(false)
            form.reset();
            push('/auth/login');
        } else {
            setIsLoading(false);
            setErr(responseData.message)
        }
    }

    return (
        <div className="flex flex-col items-center justify-center h-dvh w-full">
            <h1 className="text-2xl font-bold">REGISTER</h1>
            <div className="mt-10 w-max">
                <form 
                onSubmit={handleSubmit} 
                action="" 
                className=" flex flex-col gap-3"
                >
                    <div className="flex gap-2">
                        <Input
                        label="Full Name"
                        id="fullname"
                        placeholder="john doe"
                        />
                        <Input
                        label="Phone Number"
                        id="phone"
                        inputType="text"
                        placeholder="+62 8272321"
                        />
                    </div>
                    <Input
                    label="Email"
                    id="email"
                    inputType="email"
                    placeholder="johndoe@example.com"
                    />
                    <Input
                    label="Password"
                    id="password"
                    inputType="password"
                    />
                    <p className={`text-red-500 text-sm ${err !== '' ? 'block' : 'hidden'}`}>{err} !</p>

                    <button 
                    type="submit"
                    className="py-2.5 flex justify-center bg-blue-500 text-white font-semibold w-full rounded-lg mt-10 hover:bg-blue-600 hover:scale-[.99] active:bg-blue-700 active:scale-[.97]"
                    >
                        {
                            isLoading ?
                            <Loader/>
                            :
                            "Register"
                        }
                    </button>
                </form>
            </div>

            <p className="mt-3 text-sm">Have an account? sign in <Link href={"/auth/login"} className="text-blue-500 underline underline-offset-2">here</Link></p>
        </div>
    )
}

export default RegisterView;