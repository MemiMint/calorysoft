import { FunctionComponent } from "react";
import { Box, Typography, SvgIcon, Divider, ButtonGroup, IconButton } from "@mui/joy";
import { TotalCard } from "../../components/TotalCard";
import { FaBookMedical, FaFile, FaUserNurse, FaUsers } from "react-icons/fa6";
import { FaUserCircle } from "react-icons/fa";
import PersonIcon from "@mui/icons-material/Person";
import { UserTable } from "../../components/UserTable";

type TotalBoxes = {
    icon: React.ReactNode;
    label: string;
    total: number;
    href?: string;
}

const boxes: TotalBoxes[] = [
    {
        icon: <FaUsers />,
        href: "/view-patients",
        label: "Pacientes ingresados",
        total: 100
    },
    {
        icon: <FaUserNurse />,
        href: "/view-asistants",
        label: "Asistentes ingresados",
        total: 10
    },
    {
        icon: <FaBookMedical />,
        href: "/view-nutritional-plans",
        label: "Total de planes nutricionales",
        total: 2
    },
    {
        icon: <FaFile />,
        label: "Total de reportes",
        total: 1
    }
]

export const Dashboard: FunctionComponent = (): JSX.Element => {
    return (
        <>
            <Box>
                <Typography level="h1">
                    Hola, Usuario!
                </Typography>
                <Typography level="title-md" >
                    Bienvenido de vuelta
                </Typography>
            </Box>
            <Box mt={4} >
                <Box display="flex" alignItems="center" gap={3} >
                    {
                        boxes.map((box, index) => {
                            return (
                                <TotalCard href={box.href} key={index} icon={box.icon} label={box.label} total={box.total} />
                            )
                        })
                    }
                </Box>
                <Box display="flex" alignItems="center" gap={2} >
                    <Box boxShadow="md" p={2} mt={2} width={420} height={320} bgcolor="white" borderRadius={6} >
                        <Box width="100%" display="flex" alignItems="center" justifyContent="space-between" >
                            <Typography level="title-sm">Ultima persona Agregada</Typography>
                            <Typography color="neutral" level="title-sm">Detalles</Typography>
                        </Box>
                        <Box py={2} gap={1} width="100%" height="100%" display="flex" alignItems="center" >
                            <Box bgcolor="#E3EFFB" display="flex" alignItems="center" justifyContent="center" width={220} height="100%" borderRadius={6} >
                                <FaUserCircle color="#12467B" size={80} />
                            </Box>
                            <Box display="flex" flexDirection="column" gap={2} px={4} width={220} height="100%" borderRadius={6} >
                                <Box>
                                    <Typography level="body-xs">Nombre</Typography>
                                    <Typography mb={1} level="body-sm">Russel</Typography>
                                    <Divider />
                                </Box>
                                <Box>
                                    <Typography level="body-xs">Apellido</Typography>
                                    <Typography mb={1} level="body-sm">Russel</Typography>
                                    <Divider />
                                </Box>
                                <Box>
                                    <Typography level="body-xs">Edad</Typography>
                                    <Typography mb={1} level="body-sm">Russel</Typography>
                                    <Divider />
                                </Box>
                                <Box>
                                    <Typography level="body-xs">Numero de telefono</Typography>
                                    <Typography mb={1} level="body-sm">(+58)0195544</Typography>
                                    <Divider />
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                    <Box mt={2}>
                        <Box boxShadow="md" p={2} width={610} bgcolor="white" borderRadius={6}>
                            <Box display="flex" alignItems="center" justifyContent="space-between">
                                <Typography level="title-sm">Lista de pacientes</Typography>
                                <ButtonGroup>
                                    <IconButton>
                                        <SvgIcon size="sm">
                                            <PersonIcon />
                                        </SvgIcon>
                                    </IconButton>
                                    <IconButton>
                                        <SvgIcon size="sm">
                                            <FaUserNurse />
                                        </SvgIcon>
                                    </IconButton>
                                </ButtonGroup>
                            </Box>
                            <UserTable />
                        </Box>
                    </Box>
                </Box>
            </Box>
        </>
    )
}