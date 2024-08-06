import { useState, useEffect } from "react";
import { Patient } from "../../types/patient";
import { getDashboard } from "../../services/dashboard";
import { getPatients } from "../../services/patient/patients";
import { getAssistants } from "../../services/assistants/get-assistants";
import { User } from "../../types/user";
import { useSelector } from "react-redux";
import { RootState } from "../../store/reducers";
import { useDispatch } from "react-redux";
import { actionCreators } from "../../store";
import { bindActionCreators } from "redux";

type IState = {
    totalPatients: number;
    totalAssistants: number;
    totalNutritionalPlans: number;
    lastPatient: Patient | null;
}

export const useDashboard = () => {
    const dispatch = useDispatch();

    const { startLoading, finishLoading } = bindActionCreators(actionCreators, dispatch);

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
        startLoading();

        try {
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
        } catch (error) {
            console.error(error);
        } finally {
            finishLoading();
        }
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