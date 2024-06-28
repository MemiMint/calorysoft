import React, { FunctionComponent } from 'react';
import {  } from "@mui/icons-material";
import { Box } from "@mui/joy";
import logo from "../../assets/LogoCalorysoft.png";
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import GroupIcon from "@mui/icons-material/Group"
import { GroupList } from './group-list';

type ILink = {
    icon: React.ReactNode;
    text: string;
    href?: string
}

type IGroupList = {
    label: string;
    items: ILink[]
}

const groups: IGroupList[] = [
    {
        label: "Dashboard",
        items: [
            {
                text: "Area de trabajo",
                href: "",
                icon: <GroupIcon />
            },
        ]
    },
    {
        label: "Pacientes",
        items: [
            {
                text: "Ver Pacientes",
                href: "",
                icon: <GroupIcon />
            },
            {
                text: "Agregar Paciente",
                href: "/",
                icon: <PersonAddIcon />
            },
        ]
    },
    {
        label: "Calculos",
        items: [
            {
                text: "Ver Pacientes",
                href: "",
                icon: <GroupIcon />
            },
            {
                text: "Agregar Paciente",
                href: "/",
                icon: <PersonAddIcon />
            },
        ]
    }
]

export const Sidebar: FunctionComponent = (): JSX.Element => {
    return (
        <Box padding={2} display="flex" flexDirection="column" alignItems="center" height="100vh" width={250} bgcolor="#0A80FE" >
            <img src={logo} />
            {
                groups.map((group, index) => {
                  return (
                    <GroupList key={index} label={group.label} items={group.items} />
                  )  
                })
            }
       </Box>
    )
}