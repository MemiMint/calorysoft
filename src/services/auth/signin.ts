import { getAxios } from "../../http/axios";
import { auth } from "../../http/endpoints";
import { SignInBody } from "../../types/bodies/signin-body";
import { AuthResponse } from "../../types/responses/auth-response";

export const signIn = async (username: string, password: string): Promise<AuthResponse> => {
    const response = await getAxios<null, SignInBody>(auth.login, "POST", {
        username: username,
        password: password
    });

    const data: AuthResponse = await response.data;
    
    return data;
}