import { FunctionComponent, useEffect } from "react";
import { Typography, Box } from "@mui/joy";
import { FaNotesMedical } from "react-icons/fa6";
import { UserInfoCard } from "../../components/UserInfoCard";

export const ViewPatient: FunctionComponent = (): JSX.Element => {
    
    useEffect(() => {
        fetch("https://randomuser.me/api/")
        .then((data) => data.json())
        .then((data) => console.log(data));
    }, [])

    return (
        <>
            <Typography level="h1" >Informacion del paciente</Typography>
            <Box mt={4} display="flex" alignItems="center" gap={2} >
                <UserInfoCard />
                <Box bgcolor="#0A80FE" p={2} width={320} height={220} borderRadius={6} boxShadow="lg" >
                    <Typography my={2} level="title-lg" sx={{ color: "white" }} >
                        Plan Nutricional
                    </Typography>
                    <Box display="flex" alignItems="center" justifyContent="center">
                        <Box p={2} borderRadius="100%" >
                            <FaNotesMedical color="white" size={40} />
                        </Box>
                        <Typography level="title-lg" sx={{ color: "white" }} >
                            Plan Nutricional para diabeticos
                        </Typography>
                    </Box>
                </Box>
            </Box>
            <Box p={1} width={520} height={220} bgcolor="white" borderRadius={6} boxShadow="lg" >
                <Typography my={2} level="title-lg" color="neutral" >
                    Informacion de contacto
                </Typography>
                <Typography  color="primary" my={2} >
                    Correo Electronico: alejandrohernandez@gmail.com
                </Typography>
                <Typography  color="primary" my={2} >
                    Numero de telefono: +584120195544
                </Typography>
            </Box>
        </>
    )
}