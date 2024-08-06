import { useState, useEffect } from "react";
import { Patient } from "../../types/patient";
import { getPatient } from "../../services/patient/patient";
import { NutritionalPlan } from "../../types/nutritional-plan";
import { getNutritionalPlan } from "../../services/nutritional_plans/get-np";

export const useViewPatient = (id: string) => {
    const [patient, setPatient] = useState<Patient | null>(null);

    const [np, setNp] = useState<NutritionalPlan>({
        id: 0,
        title: "",
        description: "",
        weekly_plans: []
    })

    const onFetchPatient = async (): Promise<void> => {
        const response = await getPatient(id);
        const npR = await getNutritionalPlan(response.np_id);

        setPatient(response);
        setNp((prevState) => ({
            id: 0,
            title: npR.title,
            description: npR.description,
            weekly_plans: []
        }));
    }

    useEffect(() => {
        onFetchPatient();
    }, [])

    return {
        patient,
        np
    }
}