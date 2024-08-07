import { useState, useEffect } from "react";
import { Patient } from "../../types/patient";
import { getPatients } from "../../services/patient/patients";
import { UpdatePatientResponse } from "../../types/responses/update-patient-response";
import { deletePatient } from "../../services/patient/delete";
import { searchPatients } from "../../services/patient/search";

export const useViewPatients = () => {
    const [name, setName] = useState<string>("");
    const [patients, setPatients] = useState<Patient[]>([]);

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

    const [alertState, setAlertState] = useState({
        open: false,
        title: "",
        type: "",
    });

    const onDelete = async (id: number) => {
        try {
            const response: UpdatePatientResponse = await deletePatient(id);
            
            alert(response.message);
        } catch (error) {          
            alert("Hubo un error interno");
        } finally {
            onFetchPatients();
        }
    }

    useEffect(() => {
        onFetchPatients();
    }, []);

    return {
        name,
        setName,
        patients,
        onFetchPatientsSearch,
        onDelete
    }
}