import { FunctionComponent } from "react";
import { Typography, Box, Input, SvgIcon, Select, Button, Stack } from "@mui/joy";
import { FaUser, FaIdCard, FaMagnifyingGlass } from "react-icons/fa6";
import { UserList } from "../../components/UserList";
import { useViewReports } from "./hook";

export const ViewReports: FunctionComponent = (): JSX.Element => {

    const { patients, name, onFetchPatientsSearch, setName } = useViewReports();

    return (
        <>
            <Typography level="h1" >Ver Reportes</Typography>
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
                        name="name"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                        placeholder="nombre"
                        startDecorator={
                            <SvgIcon size="sm" >
                                <FaUser />
                            </SvgIcon>
                        }
                    />
                    {/* <Input
                        size="sm"
                        placeholder="cedula de identidad"
                        startDecorator={
                            <SvgIcon size="sm" >
                                <FaIdCard />
                            </SvgIcon>
                        }
                    />
                    <Select size="sm" placeholder="Plan nutricional" /> */}
                </Box>
                <Box display="flex" alignItems="center" gap={1}>
                    <Button onClick={() => onFetchPatientsSearch(name)} size="sm" startDecorator={<SvgIcon><FaMagnifyingGlass /></SvgIcon>} variant="soft" >Buscar</Button>
                </Box>
            </Box>
            <Box mt={4}>
                <Stack spacing={4}>
                    { (patients.length === 0) ? <Typography>No existen registros</Typography> : <UserList readOnly onDelete={(id) => alert(id)} patients={patients} /> }
                </Stack>
            </Box>
        </>
    )
}