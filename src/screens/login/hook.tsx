import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ILoginState } from "./state";

const INITIAL_STATE: Readonly<ILoginState> = {
    username: "",
    password: "",
    isLoading: false
}

export const useLogin = () => {
    const navigate = useNavigate()

    const [state, setState] = useState<ILoginState>(INITIAL_STATE);

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;

        setState((prevState) => ({
            ...prevState,
            [name]: value
        }));
    }

    const onClick = async (): Promise<void> => {
        setState((prevState) => ({
            ...prevState,
            isLoading: true
        }));

        setTimeout(() => {
            setState((prevState) => ({
                ...prevState,
                isLoading: false
            }));

            navigate("/dashboard");
        }, 3000)
    }

    return {
        state,
        onChange,
        onClick
    }
}