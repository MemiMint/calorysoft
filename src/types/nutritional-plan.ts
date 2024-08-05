import { Week } from "./week";

export type NutritionalPlan = {
    id: number;
    title: string;
    description: string;
    weekly_plans: Week[];
}

export type NutritionalPlanResponse = {
    id: number;
    title: string;
    description: string;
    weekly_plans: string;
}