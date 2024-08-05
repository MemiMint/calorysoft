import { useState, useEffect } from "react";
import { Patient } from "../../types/patient";
import { getPatients } from "../../services/patient/patients";
import { UpdatePatientResponse } from "../../types/responses/update-patient-response";
import { deletePatient } from "../../services/patient/delete";

export const useViewPatients = () => {
    const [patients, setPatients] = useState<Patient[]>([]);

    const onFetchPatients = async (): Promise<void> => {
        const response = await getPatients();

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
            
            setAlertState({
                open: true,
                title: response.message,
                type: "success"
            })
        } catch (error) {          
            setAlertState({
                open: true,
                title: "No se puedo eliminar el paciente",
                type: "error"
            });
        } finally {
            onFetchPatients();
        }
    }

    useEffect(() => {
        onFetchPatients();
    }, []);

    return {
        patients,
        onDelete
    }
}