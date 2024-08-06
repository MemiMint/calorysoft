import { getAxios } from "../../http/axios";
import { patient } from "../../http/endpoints";
import { Patient } from "../../types/patient";
import { PatientsResponse } from "../../types/responses/patients-response";

export const searchPatients = async (name: string): Promise<Patient[]> => {
    const response = await getAxios(`/patients/${name}`, "GET");

    const data: PatientsResponse = await response.data;

    return data.patients;
}