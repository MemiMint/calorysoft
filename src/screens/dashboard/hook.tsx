import { useState, useEffect } from "react";
import { Patient } from "../../types/patient";
import { getDashboard } from "../../services/dashboard";
import { getPatients } from "../../services/patient/patients";
import { getAssistants } from "../../services/assistants/get-assistants";
import { User } from "../../types/user";

type IState = {
    totalPatients: number;
    totalAssistants: number;
    totalNutritionalPlans: number;
    lastPatient: Patient | null;
}

export const useDashboard = () => {
    const [state, setState] = useState<IState>({
        lastPatient: null,
        totalAssistants: 0,
        totalNutritionalPlans: 0,
        totalPatients: 0,
    });

    const [patients, setPatients] = useState<Patient[]>([]);
    const [assistants, setAssistants] = useState<User[]>([]);

    const [showTable, setShowTable] = useState<"patients" | "assistants">("patients");

    const onShowTable = (table: "patients" | "assistants") => {
        setShowTable(table);
    }

    const onFetchDashboard = async () => {
        const dashboard = await getDashboard();
        const patients = await getPatients();
        const assistants = await getAssistants();

        setPatients(patients);
        setAssistants(assistants);

        

        setState((prevState) => ({
            lastPatient: dashboard.lastPatient,
            totalAssistants: dashboard.totalAssistantRecordCount,
            totalNutritionalPlans: dashboard.totalNPRecordCount,
            totalPatients: dashboard.totalPatientRecordCount
        }));
    }

    useEffect(() => {
        onFetchDashboard();
    }, []);

    return {
        state,
        assistants,
        patients,
        showTable,
        onShowTable
    }
}