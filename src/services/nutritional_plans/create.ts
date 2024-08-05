import { getAxios } from "../../http/axios";
import { nutritionalPlan } from "../../http/endpoints";
import { CreateNutritionalPlanResponse } from "../../types/responses/create-np-response";
import { Week } from "../../types/week";

export const createNutritionalPlan = async (title: string, description: string, weekly_plans: Week[]): Promise<CreateNutritionalPlanResponse> => {
    const response = await getAxios(nutritionalPlan.create, "POST", {
        title: title,
        description: description,
        weekly_plans: weekly_plans
    });

    const data = await response.data;

    return data;
}