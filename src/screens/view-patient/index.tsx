import { FunctionComponent } from "react";
import { Typography, Box } from "@mui/joy";
import { FaNotesMedical } from "react-icons/fa6";
import { UserInfoCard } from "../../components/UserInfoCard";
import { useParams } from "react-router-dom";
import { useViewPatient } from "./hook";

export const ViewPatient: FunctionComponent = (): JSX.Element => {
    const { id } = useParams();

    const { patient, np } = useViewPatient(id!);

    if (!patient) {
        return <p>loading...</p>
    }

    return (
        <>
            <Typography level="h1" >Informacion del paciente</Typography>
            <Box mt={4} display="flex" alignItems="center" gap={2} >
                <UserInfoCard 
                    firstname={patient.firstname}
                    lastname={patient.lastname}
                    age={patient.age}
                    email={patient.email}
                    height={patient.height}
                    notes=""
                    phonenumber=""
                    physical_activity={patient.physical_activity}
                    sex={patient.sex}
                    weight={patient.weight}
                    np_id={0}
                />
                <Box bgcolor="#0A80FE" p={2} width={320} height={220} borderRadius={6} boxShadow="lg" >
                    <Typography my={2} level="title-lg" sx={{ color: "white" }} >
                        Plan Nutricional
                    </Typography>
                    <Box display="flex" alignItems="center" justifyContent="center">
                        <Box p={2} borderRadius="100%" >
                            <FaNotesMedical color="white" size={40} />
                        </Box>
                        <Typography level="title-lg" sx={{ color: "white" }} >
                            { np.title }
                        </Typography>
                    </Box>
                </Box>
            </Box>
            <Box p={1} width={520} height={220} bgcolor="white" borderRadius={6} boxShadow="lg" >
                <Typography my={2} level="title-lg" color="neutral" >
                    Informacion de contacto
                </Typography>
                <Typography  color="primary" my={2} >
                    Correo Electronico: { patient?.email }
                </Typography>
                <Typography  color="primary" my={2} >
                    Numero de telefono: { patient?.phonenumber }
                </Typography>
            </Box>
        </>
    )
}