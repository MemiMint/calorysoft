import { getAxios } from "../http/axios";
import { DashboardResponse } from "../types/responses/dashboard-response";

export const getDashboard = async (): Promise<DashboardResponse> => {
    const response = await getAxios("/dashboard", "GET");

    const data: DashboardResponse = await response.data;
    
    return data;
}