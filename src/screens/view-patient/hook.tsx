import { useState, useEffect } from "react";
import { Patient } from "../../types/patient";
import { getPatient } from "../../services/patient/patient";

export const useViewPatient = (id: string) => {
    const [patient, setPatient] = useState<Patient | null>(null);

    const onFetchPatient = async (): Promise<void> => {
        const response = await getPatient(id);

        setPatient(response);
    }

    useEffect(() => {
        onFetchPatient();
    }, [])

    return {
        patient
    }
}