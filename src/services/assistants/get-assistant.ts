import { getAxios } from "../../http/axios";
import { assistant } from "../../http/endpoints";
import { User } from "../../types/user";

export const getAssistant = async (id: string): Promise<User> => {
    const response = await getAxios<{ assistant: User }>(`${assistant.asistant}/${id}`, "GET");

    const data: { assistant: User } = await response.data;


    return data.assistant;
}