import { useEffect, useState } from "react";
import { User } from "../../types/user";
import { getAssistants } from "../../services/assistants/get-assistants";
import { DeleteAssistant } from "../../services/assistants/delete";

export const useViewAssistants = () => {
    const [assistants, setAssistants] = useState<User[]>([])

    const onFetch = async () => {
        const response = await getAssistants();

        setAssistants(response);
    }

    const onDelete = async (uid: string) => {
        const response = await DeleteAssistant(uid);

        alert(response.message);

        onFetch();
    }

    useEffect(() => {
        onFetch();
    }, []);

    return {
        assistants,
        onDelete
    };
}