import { FC } from "react";
import { Box, Typography, Divider, Skeleton } from "@mui/joy";
import { FaUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

type LastPatient = {
    id: number;
    firstname: string;
    lastname: string;
    age: number;
    phonenumber: string;
}

export const LastPatientSkeleton: FC = (): JSX.Element => {
    return (
        <Box boxShadow="md" p={2} mt={2} width={420} height={320} bgcolor="white" borderRadius={6} >
            <Box width="100%" display="flex" alignItems="center" justifyContent="space-between" >
                <Skeleton variant="rectangular" width={150} height={"1em"} />
                <Skeleton variant="rectangular" width={150} height={"1em"} />
            </Box>
            <Box mt={4} display="flex" gap={2}>
                <Skeleton variant="rectangular" width={220} height={200} />
                <Box display="flex" flexDirection="column" alignItems="center" gap={2} >
                    <Skeleton variant="rectangular" width={150} height={"1em"} />
                    <Skeleton variant="rectangular" width={150} height={"1em"} />
                    <Skeleton variant="rectangular" width={150} height={"1em"} />
                    <Skeleton variant="rectangular" width={150} height={"1em"} />
                </Box>
            </Box>
        </Box>
    )
}

export const LastPatient: FC<LastPatient> = (props) => {
    const navigate = useNavigate();

    return (
        <Box boxShadow="md" p={2} mt={2} width={420} height={320} bgcolor="white" borderRadius={6} >
            <Box width="100%" display="flex" alignItems="center" justifyContent="space-between" >
                <Typography level="title-sm">Ultimo paciente agregado</Typography>
                <Typography onClick={() => navigate(`/patient/${props.id}`)} sx={{ textDecoration: "underline" }} color="neutral" level="title-sm">Detalles {">"}</Typography>
            </Box>
            <Box py={2} gap={1} width="100%" height="100%" display="flex" alignItems="center" >
                <Box bgcolor="#E3EFFB" display="flex" alignItems="center" justifyContent="center" width={220} height="100%" borderRadius={6} >
                    <FaUserCircle color="#12467B" size={80} />
                </Box>
                <Box display="flex" flexDirection="column" gap={2} px={4} width={220} height="100%" borderRadius={6} >
                    <Box>
                        <Typography level="body-xs">Nombre</Typography>
                        <Typography mb={1} level="body-sm">{props.firstname}</Typography>
                        <Divider />
                    </Box>
                    <Box>
                        <Typography level="body-xs">Apellido</Typography>
                        <Typography mb={1} level="body-sm">{props.lastname}</Typography>
                        <Divider />
                    </Box>
                    <Box>
                        <Typography level="body-xs">Edad</Typography>
                        <Typography mb={1} level="body-sm">{props.age}</Typography>
                        <Divider />
                    </Box>
                    <Box>
                        <Typography level="body-xs">Numero de telefono</Typography>
                        <Typography mb={1} level="body-sm">{props.phonenumber}</Typography>
                        <Divider />
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}