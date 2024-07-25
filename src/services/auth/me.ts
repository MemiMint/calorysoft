import { getAxios } from "../../http/axios";
import { auth } from "../../http/endpoints";
import { MeResponse } from "../../types/responses/me-response";

export const me = async (): Promise<MeResponse> => {
    const response = await getAxios<null, MeResponse>(auth.me, "GET");

    const data: MeResponse = await response.data;
    
    return data;
}