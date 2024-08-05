import { getAxios } from "../../http/axios";
import { nutritionalPlan } from "../../http/endpoints";
import { NutritionalPlan } from "../../types/nutritional-plan";

export const getNutritionalPlans = async (): Promise<NutritionalPlan[]> => {
    const response = await getAxios(nutritionalPlan.nutritionalPlans, "GET");

    const data: NutritionalPlan[] = await response.data.nps;

    return data;
}