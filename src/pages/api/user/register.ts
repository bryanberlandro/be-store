import type { NextApiRequest, NextApiResponse } from "next";
import { signUp } from "@/lib/firebase/service";

export default async function handleGetData(req: NextApiRequest, res: NextApiResponse){
    if(req.method === "POST"){
        await signUp(
            req.body,
            (status: boolean) => {
                if(status){
                    res.status(200).json({
                        status: true,
                        message: "Success"
                    })
                } else {
                    if(req.body.email == ""){
                        return res.status(400).json({
                            status: false,
                            message: "Please enter your email address"
                        })
                    }
                    res.status(400).json({
                        status: false,
                        message: "Please enter another email address"
                    })
                }
            }
        )
    } else {
        res.status(405).json({
            status: false,
            message: "Method not allowed"
        })
    }
}
