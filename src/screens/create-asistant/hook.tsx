import React, { useState } from "react";
import { createAssistant } from "../../services/assistants/create";

type IState = {
    firstname: string;
    lastname: string;
    cid: string;
    username: string;
    email: string;
    password: string;
    phonenumber: string;
    phonePrefix: string;
};

export const useCreateAsistant = () => {
    const [state, setState] = useState<IState>({
        firstname: "",
        cid: "",
        lastname: "",
        password: "",
        email: "",
        phonenumber: "",
        username: "",
        phonePrefix: ""
    });

    const [alertState, setAlertState] = useState({
        open: false,
        title: "",
        type: ""
    });

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;

        setState((prevState) => ({
            ...prevState,
            [name]: value
        }));
    }

    const onChangeSelect = (event: React.SyntheticEvent, newValue: string) => {
        setState((prevState) => ({
            ...prevState,
            phonePrefix: newValue
        }));
    }
    
    const onClose = () => setAlertState((prevState) => ({ ...prevState, open: false }));

    const onClick = async (): Promise<void> => {
        try {
            const response = await createAssistant(
                state.firstname,
                state.lastname,
                state.cid,
                state.username,
                state.password,
                `${state.phonePrefix}${state.phonenumber}`,
                0
            );

            setAlertState((prevState) => ({
                ...prevState,
                title: response.message!,
                type: "success"
            }))
        } catch (error) {
            setAlertState((prevState) => ({
                ...prevState,
                title: "No se pudo registrar el asistente",
                type: "error"
            }))
        } finally {
            setAlertState((prevState) => ({
                ...prevState,
                open: true
            }));
        }
    }

    return {
        state,
        alertState,
        onChange,
        onChangeSelect,
        onClick,
        onClose
    }
}