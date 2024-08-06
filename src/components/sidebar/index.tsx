import React, { FunctionComponent } from 'react';
import { Box } from "@mui/joy";
import logo from "../../assets/logoCalorysoft3.png";
import { GroupList } from './group-list';
import { FaUsers, FaUserPlus, FaTableColumns, FaUserNurse, FaNotesMedical, FaBookMedical, FaFile } from "react-icons/fa6";
import { useSelector } from 'react-redux';
import { RootState } from '../../store/reducers';

type ILink = {
    icon: React.ReactNode;
    text: string;
    href?: string
}

type IGroupList = {
    label: string;
    items: ILink[]
    roles: number[];
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
        ],
        roles: [0, 1]
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
        ],
        roles: [0, 1]
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
        ],
        roles: [1]
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
        ],
        roles: [1]
    },
    {
        label: "Reportes",
        items: [
            {
                text: "Ver Reportes",
                href: "/reports",
                icon: <FaFile />
            }
        ],
        roles: [1]
    }
]

export const Sidebar: FunctionComponent = (): JSX.Element => {
    const currentUser = useSelector((state: RootState) => state.currentUser);

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
                currentUser && groups.filter((group) => group.roles.includes(currentUser.role)).map((group, index) => {
                    return (
                        <GroupList key={index} label={group.label} items={group.items} />
                    )
                })
            }
        </Box>
    )
}