import { useState } from "react";
import { Week } from "../../types/week";

export const useCreateNutritionalPlan = () => {
    const [weeks, setWeeks] = useState<Week[]>([]);

    const [openWeeklyPlanModal, setOpenWeeklyPlanModal] = useState<boolean>(false);
    
    const onToggleOpenWeeklyPlanModal = () => setOpenWeeklyPlanModal(!openWeeklyPlanModal);

    const onSave = (newWeek: Week) => {
        setWeeks([...weeks, newWeek]);
    }

    return {
        weeks,
        openWeeklyPlanModal,
        onToggleOpenWeeklyPlanModal,
        onSave
    }
}