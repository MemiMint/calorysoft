import { getAxios } from "../../http/axios";
import { assistant } from "../../http/endpoints";
import { AssistantsResponse } from "../../types/responses/assistants-response";
import { User } from "../../types/user";

export const getAssistants = async (): Promise<User[]> => {
    const response = await getAxios<{ patients: User[] }>(assistant.assistants, "GET");

    const data: AssistantsResponse = await response.data;

    return data.assistants;
}