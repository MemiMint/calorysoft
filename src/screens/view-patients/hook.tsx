import { useState, useEffect } from "react";
import { Patient } from "../../types/patient";
import { getPatients } from "../../services/patient/patients";

export const useViewPatients = () => {
    const [patients, setPatients] = useState<Patient[]>([]);

    const onFetchPatients = async (): Promise<void> => {
        const response = await getPatients();

        setPatients(response);
    }

    useEffect(() => {
        onFetchPatients();
    }, []);

    return {
        patients
    }
}