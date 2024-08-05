import { getAxios } from "../../http/axios";
import { patient } from "../../http/endpoints";
import { Patient } from "../../types/patient";
import { UpdatePatientResponse } from "../../types/responses/update-patient-response";

export const updatePatient = async (id: number, data: Partial<Patient>): Promise<UpdatePatientResponse> => {
    const response = await getAxios(`${patient.update}${id}`, "PUT", data);

    const responseData = await response.data;

    return responseData;
}