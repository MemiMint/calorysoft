import { getAxios } from "../../http/axios";
import { DeleteAssistantResponse } from "../../types/responses/delete-assistant-response";

export const DeleteAssistant = async (uid: string): Promise<DeleteAssistantResponse> => {
    const response = await getAxios(`/assistant/${uid}`, "DELETE");

    const data: DeleteAssistantResponse = await response.data;

    return data;
}