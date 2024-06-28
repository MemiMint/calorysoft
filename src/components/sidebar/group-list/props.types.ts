import React from "react"

type Item = {
    icon: React.ReactNode;
    href?: string;
    text: string;
}

export type IProps = {
    label: string;
    items: Item[];
}