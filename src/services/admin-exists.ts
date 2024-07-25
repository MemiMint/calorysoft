import { getAxios } from "../http/axios";
import { admin } from "../http/endpoints";
import { AdminExistsResponse } from "../types/responses/does-admin-exists";

export const doesAdminExists = async (): Promise<boolean> => {
    try {
        const response = await getAxios(admin.exists, "GET");
        const data: AdminExistsResponse = await response.data;

        return data.doesExists;
    } catch (error) {
        console.error(error);
        return false;
    }
}