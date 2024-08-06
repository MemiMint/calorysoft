import { useState, useEffect } from "react";
import { Patient } from "../../types/patient";
import { getPatients } from "../../services/patient/patients";
import { searchPatients } from "../../services/patient/search";

export const useViewReports= () => {
    const [patients, setPatients] = useState<Patient[]>([]);
    const [name, setName] = useState<string>("");

    const onFetchPatients = async (): Promise<void> => {
        const response = await getPatients();

        setPatients(response);
    }

    const onFetchPatientsSearch = async (name: string) => {
        if (name === "") {
            await onFetchPatients();

            return;
        }

        const response = await searchPatients(name);

        setPatients(response);
    }

    useEffect(() => {
        onFetchPatients();
    }, []);

    return {
        name,
        setName,
        onFetchPatientsSearch,
        patients,
    }
}