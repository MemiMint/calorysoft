import { useState, useEffect } from "react";
import { NutritionalPlan } from "../../types/nutritional-plan";
import { getNutritionalPlans } from "../../services/nutritional_plans/get-nps";

export const useViewNutritionalPlans = () => {
    const [nutritionalPlans, setNutritionalPlans] = useState<NutritionalPlan[]>([]);

    const onFetchNutritionalPlans = async () => {
        const response = await getNutritionalPlans();

        setNutritionalPlans(response);
    }

    useEffect(() => {
        onFetchNutritionalPlans();
    }, [])

    return {
        nutritionalPlans
    }
}