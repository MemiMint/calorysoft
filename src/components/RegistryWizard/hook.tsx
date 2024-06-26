import React, { useState } from "react";

type IState = {
    name: string;
    lastname: string;
    did: string;
    username: string;
    password: string;
}

export const useRegistryWizard = () => {
    const [index, setIndex] = useState<number>(1);
    const [isLoading, setIsloading] = useState<boolean>(false);

    const [state, setState] = useState<IState>({
        name: "",
        lastname: "",
        did: "",
        username: "",
        password: ""
    });

    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [isResponseModalOpen, setIsResponseModalOpen] = useState<boolean>(false);

    const onConfirm = async () => {
        setIsModalOpen(false);
        setIsloading(true);

        setTimeout(() => {
            setIsloading(false);
            setIsResponseModalOpen(true);
        }, 5000);
    }

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    }

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setState((prevState) => ({
            ...prevState,
            [event.target.name]: event.target.value
        }));
    }

    const onChangeIndexBackAndForth = (direction: "back" | "forward") => {    
        if (((direction === "back") && (index === 1)) || ((direction === "forward") && (index === 5))) {
            return;
        }

        if (direction === "back") {
            setIndex((prevState) => prevState - 1);
        } else {
            setIndex((prevState) => prevState + 1);  
        }
    }

    const onChangeIndex = (newIndex: number) => {
        setIndex(newIndex);
    }

    return {
        isLoading,
        onConfirm,
        state,
        index,
        isModalOpen,
        isResponseModalOpen,
        onChangeIndexBackAndForth,
        onChangeIndex,
        onChange,
        toggleModal
    }
}