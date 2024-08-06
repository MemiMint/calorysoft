import { useEffect, useState } from "react";
import { Patient } from "../../types/patient";
import { createPatient } from "../../services/patient/create";
import { getPatient } from "../../services/patient/patient";
import { updatePatient } from "../../services/patient/update";
import { NutritionalPlan } from "../../types/nutritional-plan";
import { getNutritionalPlans } from "../../services/nutritional_plans/get-nps";

type IState = Patient & {
    phonePrefix: string;
}

export const useCreatePatient = (id: string) => {

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
    })

    const onFetchPatient = async () => {
        const patient: Patient = await getPatient(id);

        setState((prevState) => ({
            ...prevState,
            firstname: patient.firstname,
            lastname: patient.lastname,
            age: patient.age,
            email: patient.email,
            height: patient.height,
            notes: patient.notes,
            np_id: patient.np_id,
            phonenumber: patient.phonenumber,
            phonePrefix: "",
            physical_activity: patient.physical_activity,
            sex: patient.sex,
            weight: patient.weight,
        }));
    }

    const onChangeSelect = (event: React.SyntheticEvent, name: string, newValue: string) => {
        setState((prevState) => ({
            ...prevState,
            [name]: newValue
        }));
    }

    const onChangeSelectNumber = (event: React.SyntheticEvent, name: string, newValue: number) => {
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

    const onClick = async (): Promise<void> => {
        try {
            const response = await updatePatient(parseInt(id), {
                firstname: state.firstname,
                lastname: state.lastname,
                age: state.age,
                email: state.email,
                height: state.height,
                notes: state.notes,
                np_id: state.np_id,
                phonenumber: `${state.phonePrefix}-${state.phonenumber}`,
                physical_activity: state.physical_activity,
                sex: state.sex,
                weight: state.weight
            });


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
        } finally {
            onFetchPatient();
        }
    }

    const onFetchNutritionalPlans = async () => {
        const response = await getNutritionalPlans();

        setNutritionalPlans(response);
    }

    useEffect(() => {
        onFetchPatient();
        onFetchNutritionalPlans();
    }, []);

    return {
        state,
        nutritionalPlans,
        onChange,
        onChangeSelectNumber,
        onChangeSelect,
        onClick,
        onCloseAlert,
        alertState
    }
}