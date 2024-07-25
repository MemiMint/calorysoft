import { getAxios } from "../../http/axios";
import { auth } from "../../http/endpoints";
import { AuthResponse } from "../../types/responses/auth-response";
import { SignUpBody } from "../../types/bodies/signup-body";

export const signUp = async (firstname: string, lastname: string, cid: string, username: string, password: string, role: number): Promise<AuthResponse> => {
    const response = await getAxios<void, SignUpBody>(auth.signup, "POST", {
        firstname,
        lastname,
        cid,
        username,
        password,
        role
    });

    const data: AuthResponse = await response.data;

    return data;
}