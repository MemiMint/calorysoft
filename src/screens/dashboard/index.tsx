import { FunctionComponent, useEffect } from "react";
import { Box, Typography, SvgIcon, ButtonGroup, IconButton } from "@mui/joy";
import { TotalCard } from "../../components/TotalCard";
import { FaBookMedical, FaFile, FaUserNurse, FaUsers } from "react-icons/fa6";
import PersonIcon from "@mui/icons-material/Person";
import { UserTable } from "../../components/UserTable";
import { useSelector } from "react-redux";
import { RootState } from "../../store/reducers";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../store";
import { me } from "../../services/auth/me";
import { useDashboard } from "./hook";
import { LastPatient, LastPatientSkeleton } from "../../components/last-patient";

type TotalBoxes = {
    icon: React.ReactNode;
    label: string;
    href?: string;
    total: number;
}


export const Dashboard: FunctionComponent = (): JSX.Element => {
    const { state, assistants, patients, onShowTable, showTable } = useDashboard();

    const boxes: TotalBoxes[] = [
        {
            icon: <FaUsers />,
            href: "/view-patients",
            label: "Pacientes ingresados",
            total: state.totalPatients
        },
        {
            icon: <FaUserNurse />,
            href: "/view-asistants",
            label: "Asistentes ingresados",
            total: state.totalAssistants
        },
        {
            icon: <FaBookMedical />,
            href: "/view-nutritional-plans",
            label: "Total de planes nutricionales",
            total: state.totalNutritionalPlans
        },
        {
            icon: <FaFile />,
            href: "/reports",
            label: "Total de reportes",
            total: state.totalPatients
        }
    ]

    const loadingState = useSelector((state: RootState) => state.loading);
    const currentUserState = useSelector((state: RootState) => state.currentUser);
    const dispatch = useDispatch();

    const { currentUser } = bindActionCreators(actionCreators, dispatch);

    const fetchCurrentUser = async (): Promise<void> => {
        const response = await me();

        currentUser({
            firstname: response.firstname,
            lastname: response.lastname,
            username: response.username,
            role: response.role,
            uuid: response.uuid
        });
    }

    useEffect(() => {
        fetchCurrentUser();
    }, [])

    return (
        <>
            <Box>
                <Typography level="h1">
                    Hola, { currentUserState?.firstname } !
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
                    {
                        !loadingState ? (
                            <LastPatient 
                                lastPatient={state.lastPatient as any}
                            />
                        ) : (
                            <LastPatientSkeleton />
                        )
                    }
                    <Box mt={2}>
                        <Box boxShadow="md" p={2} width={610} bgcolor="white" borderRadius={6}>
                            <Box display="flex" alignItems="center" justifyContent="space-between">
                                <Typography level="title-sm">Lista de { showTable === "patients" ? "pacientes" : "asistentes" }</Typography>
                                <ButtonGroup>
                                    <IconButton color={showTable === "patients" ? "primary" : "neutral"} onClick={() => onShowTable("patients")}>
                                        <SvgIcon size="sm">
                                            <PersonIcon />
                                        </SvgIcon>
                                    </IconButton>
                                    <IconButton color={showTable === "assistants" ? "primary" : "neutral"} onClick={() => onShowTable("assistants")} >
                                        <SvgIcon size="sm">
                                            <FaUserNurse />
                                        </SvgIcon>
                                    </IconButton>
                                </ButtonGroup>
                            </Box>
                            <UserTable rows={showTable === "patients" ? patients : assistants} />
                        </Box>
                    </Box>
                </Box>
            </Box>
        </>
    )
}