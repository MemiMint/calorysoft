import { useEffect, useState } from "react";
import { User } from "../../types/user";
import { getAssistants } from "../../services/assistants/get-assistants";
import { DeleteAssistant } from "../../services/assistants/delete";
import { searchAssistants } from "../../services/assistants/search";

export const useViewAssistants = () => {
    const [assistants, setAssistants] = useState<User[]>([]);
    const [search, setSearch] = useState<string>("");

    const onFetch = async () => {
        const response = await getAssistants();

        setAssistants(response);
    }

    const onFetchAssistantsSearch = async (search: string) => {
        if (search === "") {
            await onFetch();
            return;
        }

        const response = await searchAssistants(search);

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
        search,
        setSearch,
        onFetchAssistantsSearch,
        onDelete
    };
}