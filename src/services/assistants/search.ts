import { getAxios } from "../../http/axios";
import { User } from "../../types/user";

export const searchAssistants = async (cid: string): Promise<User[]> => {
    const response = await getAxios(`/assistants/${cid}`, "GET");

    const data = await response.data;

    return data.assistants;
}