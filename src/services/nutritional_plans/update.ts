import { getAxios } from "../../http/axios";
import { nutritionalPlan } from "../../http/endpoints";
import { NutritionalPlan } from "../../types/nutritional-plan";
import { UpdateNutritionalPlanResponse } from "../../types/responses/update-np-response";

export const updateNutritionalPlan = async (id: number, data: Partial<NutritionalPlan>): Promise<UpdateNutritionalPlanResponse> => {
    const response = await getAxios(`${nutritionalPlan.update}/${id}`, "PUT", data);

    const responseData = await response.data;

    return responseData;
}