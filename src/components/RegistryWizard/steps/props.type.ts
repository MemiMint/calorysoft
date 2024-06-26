import React from "react";

export interface IProps {
    value: string;
    currentIndex: number;
    onChange(event: React.ChangeEvent<HTMLInputElement>): void;
    onChangeIndex(newIndex: number): void;
    onClick?(): void;
}