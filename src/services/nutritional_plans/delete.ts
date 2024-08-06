import { getAxios } from "../../http/axios";
import { nutritionalPlan } from "../../http/endpoints";
import { NutritionalPlan } from "../../types/nutritional-plan";
import { UpdatePatientResponse } from "../../types/responses/update-patient-response";

export const deleteNutritionalPlan = async (id: number): Promise<{ message: string, np: NutritionalPlan }> => {
    const response = await getAxios(`${nutritionalPlan.delete}/${id}`, "DELETE");

    const data = await response.data;

    return data;
}