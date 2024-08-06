import { useEffect, useState } from "react";
import { Patient } from "../../types/patient";
import { createPatient } from "../../services/patient/create";
import { NutritionalPlan } from "../../types/nutritional-plan";
import { getNutritionalPlans } from "../../services/nutritional_plans/get-nps";

type IState = Patient & {
    phonePrefix: string;
}

export const useCreatePatient = () => {

    const [state, setState] = useState<IState>({
        firstname: "",
        lastname: "",
        age: 0,
        height: 0,
        email: "",
        notes: "",
        np_id: 0,
        phonenumber: "",
        phonePrefix: "",
        physical_activity: 0,
        sex: "",
        weight: 0
    });

    const [nutritionalPlans, setNutritionalPlans] = useState<NutritionalPlan[]>([]);

    const [alertState, setAlertState] = useState({
        open: false,
        title: "",
        type: "",
    });

    const onChangeSelect = (event: React.SyntheticEvent, name: string, newValue: string) => {
        setState((prevState) => ({
            ...prevState,
            [name]: newValue
        }));
    }

    const onChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;

        if (event.target.type === "number") {
            setState((prevState) => ({
                ...prevState,
                [name]: parseInt(value)
            }));

            return;
        }

        setState((prevState) => ({
            ...prevState,
            [name]: value
        }));
    }

    const onCloseAlert = () => setAlertState((prevState) => ({ ...prevState, open: false  }));

    const onFetchNutritionalPlans = async () => {
        const response = await getNutritionalPlans();

        setNutritionalPlans(response);
    }

    const onClick = async (): Promise<void> => {
        try {
            const response = await createPatient(
                state.firstname,
                state.lastname,
                state.age,
                state.height,
                state.email,
                state.notes,
                state.np_id,
                `${state.phonePrefix}-${state.phonenumber}`,
                state.physical_activity,
                state.sex,
                state.weight
            );

            setAlertState({
                title: response.message,
                type: "success",
                open: true
            });
        } catch (error) {
            setAlertState({
                title: "No se puso crear el usuario",
                type: "error",
                open: true
            });
            console.error(error);
        }
    }

    useEffect(() => {
        onFetchNutritionalPlans();
    }, [])

    return {
        state,
        nutritionalPlans,
        onChange,
        onChangeSelect,
        onClick,
        onCloseAlert,
        alertState
    }
}