import Input from "@/components/fragments/Input";
import Link from "next/link";

const RegisterView = () => {
    return (
        <div className="flex flex-col items-center justify-center h-dvh w-full">
            <h1 className="text-2xl font-bold">REGISTER</h1>
            <div className="mt-10 w-64">
                <form action="" className=" flex flex-col gap-2">
                    <Input
                    label="Email"
                    id="email"
                    inputType="email"
                    placeholder="johndoe@example.com"
                    />
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
                    <Input
                    label="Password"
                    id="password"
                    inputType="password"
                    />

                    <button className="py-2 bg-blue-500 text-white font-semibold w-full rounded-lg mt-10">Register</button>
                </form>
            </div>

            <p className="mt-2 text-sm">Have an account? sign in <Link href={"/auth/login"} className="text-blue-500 underline underline-offset-2">here</Link></p>
        </div>
    )
}

export default RegisterView;