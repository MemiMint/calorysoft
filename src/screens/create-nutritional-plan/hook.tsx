import { useState } from "react";
import { Week } from "../../types/week";
import { createNutritionalPlan } from "../../services/nutritional_plans/create";

export const useCreateNutritionalPlan = () => {
    const [state, setState] = useState<{ title: string, description: string }>({
        title: "",
        description: ""
    });

    const [weeks, setWeeks] = useState<Week[]>([]);
    const [selectedWeek, setSelectedWeek] = useState<Week | null>(null);
    const [openWeeklyPlanModal, setOpenWeeklyPlanModal] = useState<boolean>(false);

    const [alertState, setAlertState] = useState({
        open: false,
        message: "",
        type: ""
    });

    const onChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;

        setState((prevState) => ({
            ...prevState,
            [name]: value
        }));
    }
    
    const onCloseAlert = () => setAlertState((prevState) => ({ ...prevState, open: false }));
    const onToggleOpenWeeklyPlanModal = () => setOpenWeeklyPlanModal(!openWeeklyPlanModal);

    const onSave = (newWeek: Week) => {
        setWeeks([...weeks, newWeek]);
        onToggleOpenWeeklyPlanModal();
    }

    const onDeleteWeek = (wIndex: number) => {
        const updatedWeeks = weeks.filter((week, index) => index !== wIndex);

        setWeeks(updatedWeeks);
    }

    const onOpenWeeklyPlanModalWithUpdate = (index: number) => {
        setSelectedWeek(weeks[index]);

        onToggleOpenWeeklyPlanModal();
    }

    const onClick = async () => {
        try {
            const np = {
                title: state.title,
                description: state.description,
                weekly_plans: weeks
            };
    
            const response = await createNutritionalPlan(np.title, np.description, np.weekly_plans);

            setAlertState((prevState) => ({
                ...prevState,
                message: response.message,
                type: "success"
            }))
        } catch (error) {
            setAlertState((prevState) => ({
                ...prevState,
                message: "No se pudo registrar el plan nutricional",
                type: "error"
            }))
        } finally {
            setAlertState((prevState) => ({
                ...prevState,
                open: true
            }));
        }
    }

    return {
        weeks,
        openWeeklyPlanModal,
        onToggleOpenWeeklyPlanModal,
        onOpenWeeklyPlanModalWithUpdate,
        onSave,
        onChange,
        onClick,
        onDeleteWeek,
        onCloseAlert,
        state,
        alertState,
        selectedWeek,
    }
}