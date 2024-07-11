import type { NextApiRequest, NextApiResponse } from "next";
import { signUp } from "@/lib/firebase/service";

export default async function handleGetData(req: NextApiRequest, res: NextApiResponse){
    if(req.method === "POST"){
        await signUp(req.body, (status: boolean, message: string) => {
            if (status) {
                res.status(201).json({
                    status: true,
                    message: message
                });
            } else {
                res.status(400).json({
                    status: false,
                    message: message
                });
            }
        });
    } else {
        res.status(405).json({
            status: false,
            message: "Method not allowed"
        })
    }
}
