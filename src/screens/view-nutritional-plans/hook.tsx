import { useState, useEffect } from "react";
import { NutritionalPlan } from "../../types/nutritional-plan";
import { getNutritionalPlans } from "../../services/nutritional_plans/get-nps";
import { deleteNutritionalPlan } from "../../services/nutritional_plans/delete";
import { searchNutritionalPlans } from "../../services/nutritional_plans/search";

export const useViewNutritionalPlans = () => {
    const [nutritionalPlans, setNutritionalPlans] = useState<NutritionalPlan[]>([]);
    const [search, setSearch] = useState<string>("");

    const onFetchNutritionalPlans = async () => {
        const response = await getNutritionalPlans();

        setNutritionalPlans(response);
    }

    const onFetchNPSearch = async (title: string) => {
        if (title === "") {
            onFetchNutritionalPlans();
            return;
        }

        const response = await searchNutritionalPlans(title);

        setNutritionalPlans(response);
    }

    useEffect(() => {
        onFetchNutritionalPlans();
    }, []);

    const onDelete = async (id: number): Promise<void> => {
        try {
            const response = await deleteNutritionalPlan(id);

            alert(response.message);
        } catch (error) {
            console.error(error);
        } finally {
            onFetchNutritionalPlans();
        }
    }

    return {
        onFetchNPSearch,
        onDelete,
        search,
        setSearch,
        nutritionalPlans
    }
}