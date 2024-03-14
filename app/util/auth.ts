import { jwtVerify } from "jose";
import { cookies } from "next/headers";

export async function getJWTPayload() {
    const cookieStore = cookies()
    const token = cookieStore.get("jwt-token")
    const secret = new TextEncoder().encode(process.env.JWT_SECRET)
    console.log(1)
    const { payload, protectedHeader } = await jwtVerify(token?.value!, secret)
    console.log(2, payload);
    return payload;
};