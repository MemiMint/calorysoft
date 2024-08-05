import { NutritionalPlan } from "../nutritional-plan";

export type CreateNutritionalPlanResponse = {
    message: string;
    np: NutritionalPlan;
}