import { useState } from "react";

type State = {
    firstname: string;
    lastname: string;
    age: string;
    weight: string;
    sex: string;
    physical_activity: string;
    np_id: string;
    email: string;
    phoneNumber: string;
    notes: string;
}

export const useCreatePatient = () => {
    const [state, setState] = useState<State>({
        firstname: "",
        lastname: "",
        age: "",
        weight: "",
        sex: "",
        physical_activity: "",
        phoneNumber: "",
        email: "",
        notes: "",
        np_id: ""
    });
}