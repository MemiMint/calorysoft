import React, { FunctionComponent } from 'react';
import { Box } from "@mui/joy";
import logo from "../../assets/logoCalorysoft3.png";
import { GroupList } from './group-list';
import { FaUsers, FaUserPlus, FaTableColumns, FaUserNurse, FaNotesMedical, FaBookMedical, FaFile, FaFileCirclePlus } from "react-icons/fa6";

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
                href: "/dashboard",
                icon: <FaTableColumns />
            },
        ]
    },
    {
        label: "Pacientes",
        items: [
            {
                text: "Ver Pacientes",
                href: "/view-patients",
                icon: <FaUsers />
            },
            {
                text: "Agregar Paciente",
                href: "/create-patient",
                icon: <FaUserPlus />
            },
        ]
    },
    {
        label: "Asistentes",
        items: [
            {
                text: "Ver Asistente",
                href: "/view-asistants",
                icon: <FaUserNurse />
            },
            {
                text: "Agregar Asistente",
                href: "/create-asistant",
                icon: <FaUserPlus />
            }
        ]
    },
    {
        label: "Planes Nutricionales",
        items: [
            {
                text: "Ver Planes Nutricionales",
                href: "/view-nutritional-plans",
                icon: <FaBookMedical />
            },
            {
                text: "Crear Plan Nutricional",
                href: "/create-nutritional-plan",
                icon: <FaNotesMedical />
            }
        ]
    },
    {
        label: "Reportes",
        items: [
            {
                text: "Ver Reportes",
                href: "/reports",
                icon: <FaFile />
            },
            {
                text: "Crear Reporte",
                href: "/create-report",
                icon: <FaFileCirclePlus />
            }
        ]
    }
]

export const Sidebar: FunctionComponent = (): JSX.Element => {
    return (
        <Box
            padding={2}
            display="flex"
            flexDirection="column"
            alignItems="center"
            height="100vh"
            width={250}
            bgcolor="#0A80FE"
            position="sticky"
            top={0}
        >
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