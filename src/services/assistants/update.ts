import { getAxios } from "../../http/axios";
import { assistant } from "../../http/endpoints";
import { User } from "../../types/user";

export const updateAssistant = async (uuid: string, data: Partial<User>): Promise<{ message: string, assistant: User }> => {
    const response = await getAxios(`${assistant.update}/${uuid}`, "PUT", data);

    const responseData = await response.data;

    return responseData;
}