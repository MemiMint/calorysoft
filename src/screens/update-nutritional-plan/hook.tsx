import { useEffect, useState } from "react";
import { Week } from "../../types/week";
import { createNutritionalPlan } from "../../services/nutritional_plans/create";
import { getNutritionalPlan } from "../../services/nutritional_plans/get-np";
import { updateNutritionalPlan } from "../../services/nutritional_plans/update";
import { useParams } from "react-router-dom";

export const useCreateNutritionalPlan = () => {
    const { id } = useParams();

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
    
            const response = await updateNutritionalPlan(parseInt(id!), {
                title: np.title,
                description: np.description,
                weekly_plans: np.weekly_plans
            });

            setAlertState((prevState) => ({
                ...prevState,
                message: response.message,
                type: "success"
            }))
        } catch (error) {
            setAlertState((prevState) => ({
                ...prevState,
                message: "No se pudo actualizar el plan nutricional",
                type: "error"
            }))
        } finally {
            setAlertState((prevState) => ({
                ...prevState,
                open: true
            }));
        }
    }

    const onFetchNutritionalPlan = async () => {
        const nutritionalPlan = await getNutritionalPlan(parseInt(id!));

        setState(({
            title: nutritionalPlan.title,
            description: nutritionalPlan.description
        }));

        setWeeks(JSON.parse(nutritionalPlan.weekly_plans));
    }

    useEffect(() => {
        onFetchNutritionalPlan();
    }, [])

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