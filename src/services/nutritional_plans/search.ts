import { getAxios } from "../../http/axios";
import { nutritionalPlan } from "../../http/endpoints";
import { NutritionalPlan } from "../../types/nutritional-plan";

export const searchNutritionalPlans = async (title: string): Promise<NutritionalPlan[]> => {
    const response = await getAxios(`/nutritional_plans/${title}`, "GET");

    const data: NutritionalPlan[] = await response.data.nps;

    return data;
}