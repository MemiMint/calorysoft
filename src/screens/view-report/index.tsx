import { FunctionComponent, useEffect, useState } from "react";
import { Typography, Box, Input, SvgIcon, Select, Button, Stack } from "@mui/joy";
import { FaUser, FaIdCard, FaMagnifyingGlass } from "react-icons/fa6";
import { UserList } from "../../components/UserList";
import { useParams } from "react-router-dom";
import { Patient } from "../../types/patient";
import { getPatient } from "../../services/patient/patient";

export const ViewReport: FunctionComponent = (): JSX.Element => {
    const { id } = useParams();
    
    const [patient, setPatient] = useState<Patient | null>(null);

    const onFetchReportData = async () => {
        const response = await getPatient(id!);

        setPatient(response);
    }

    useEffect(() => {
        onFetchReportData();
    }, [])

    return (
        <>
            <Typography level="h1" >Reporte de { patient?.firstname } { patient?.lastname }</Typography>
            <Typography level="title-md" mt={10} textAlign="center" >
                { patient?.notes }
            </Typography>
        </>
    )
}