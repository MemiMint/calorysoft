import { getAxios } from "../../http/axios";
import { assistant, auth } from "../../http/endpoints";
import { AuthResponse } from "../../types/responses/auth-response";
import { SignUpBody } from "../../types/bodies/signup-body";

type AssistantBody = { phonenumber: string } & SignUpBody;

export const createAssistant = async (firstname: string, lastname: string, cid: string, username: string, password: string, phonenumber: string, role: number): Promise<AuthResponse> => {
    const response = await getAxios<void, AssistantBody>(assistant.create, "POST", {
        firstname,
        lastname,
        cid,
        username,
        password,
        phonenumber,
        role
    });

    const data: AuthResponse = await response.data;

    return data;
}