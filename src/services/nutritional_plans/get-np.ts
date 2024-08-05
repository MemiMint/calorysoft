import { getAxios } from "../../http/axios";
import { nutritionalPlan } from "../../http/endpoints";
import { NutritionalPlanResponse } from "../../types/nutritional-plan";

export const getNutritionalPlan = async (id: number): Promise<NutritionalPlanResponse> => {
    const response = await getAxios(`${nutritionalPlan.nutritionalPlan}/${id}`, "GET");

    const data: NutritionalPlanResponse = await response.data.np;

    return data;
}