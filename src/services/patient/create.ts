import { getAxios } from "../../http/axios";
import { patient } from "../../http/endpoints";
import { Patient } from "../../types/patient";
import { CreatePatientResponse } from "../../types/responses/create-patient-response";

export const createPatient = async (
    firstname: string,
    lastname: string,
    age: number,
    height: number,
    email: string,
    notes: string,
    np_id: number,
    phonenumber: string,
    physical_activity: number,
    sex: string,
    weight: number
): Promise<CreatePatientResponse> => {
    const response = await getAxios<null, Patient>(patient.create, "POST", {
        firstname,
        lastname,
        age,
        height,
        email,
        notes,
        np_id,
        phonenumber,
        physical_activity,
        sex,
        weight
    });

    const data: CreatePatientResponse = await response.data;

    return data;
}