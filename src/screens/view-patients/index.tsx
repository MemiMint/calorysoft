import { FunctionComponent } from "react";
import { Typography, Box, Input, SvgIcon, Select, Button, Stack } from "@mui/joy";
import { FaUser, FaIdCard, FaMagnifyingGlass } from "react-icons/fa6";
import { UserList } from "../../components/UserList";
import { useViewPatients } from "./hook";

export const ViewPatients: FunctionComponent = (): JSX.Element => {
    const {
        patients
    } = useViewPatients();

    return (
        <>
            <Typography level="h1" >Ver Pacientes</Typography>
            <Box
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                mt={4}
                p={2}
                bgcolor="white"
                borderRadius={4}
                boxShadow="md"
            >
                <Box display="flex" alignItems="center" gap={1}>
                    <Input
                        size="sm"
                        placeholder="nombre"
                        startDecorator={
                            <SvgIcon size="sm" >
                                <FaUser />
                            </SvgIcon>
                        }
                    />
                    <Input
                        size="sm"
                        placeholder="cedula de identidad"
                        startDecorator={
                            <SvgIcon size="sm" >
                                <FaIdCard />
                            </SvgIcon>
                        }
                    />
                    <Select size="sm" placeholder="Plan nutricional" />
                </Box>
                <Box display="flex" alignItems="center" gap={1}>
                    <Button size="sm" startDecorator={<SvgIcon><FaMagnifyingGlass /></SvgIcon>} variant="soft" >Buscar</Button>
                </Box>
            </Box>
            <Box mt={4}>
                <Stack spacing={4}>
                    <UserList patients={patients} />
                </Stack>
            </Box>
        </>
    )
}

/*
    nutritional plan {
        weekPlans: [
            {
                monday: {
                    breakfast: "arepas",
                    lunch: "pasta",
                    snack?: "galletas"
                    dinner: "sandwich"
                },
                tuesday: {
                    breakfast: "cereal",
                    lunch: "pescado",
                    snack?: "torta"
                    dinner : "ensalada"
                },
                wednesday: {
                    breakfast: "",
                    lunch: "pescado",
                    snack?: "torta"
                    dinner : "ensalada"
                },
                thursday: {
                    breakfast: "",
                    lunch: "pescado",
                    snack?: "torta",
                    dinner : "ensalada"
                },
                friday: {
                    breakfast: "",
                    lunch: "pescado",
                    snack?: "torta",
                    dinner : "ensalada"
                },
                saturday: {
                    breakfast: "",
                    lunch: "pescado",
                    snack?: "torta",
                    dinner : "ensalada"
                },
                sunday: {
                    breakfast: "",
                    lunch: "pescado",
                    snack?: "torta",
                    dinner : "ensalada"
                }
            }
        ]
    }
*/