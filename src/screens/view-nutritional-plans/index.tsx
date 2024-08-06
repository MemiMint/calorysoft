import { FunctionComponent } from "react";
import { Typography, Box, Input, SvgIcon, Button, Stack } from "@mui/joy";
import { FaUser, FaMagnifyingGlass } from "react-icons/fa6";
import { NutritionalPlanList } from "../../components/NutritionalPlanList";
import { useViewNutritionalPlans } from "./hook";

export const ViewNutritionalPlans: FunctionComponent = (): JSX.Element => {
    const { nutritionalPlans, onFetchNPSearch, search, setSearch, onDelete } = useViewNutritionalPlans();
    return (
        <>
            <Typography level="h1">Ver Planes Nutricionales</Typography>
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
                        name="search"
                        value={search}
                        onChange={(event) => setSearch(event.target.value)}
                        placeholder="nombre"
                        startDecorator={
                            <SvgIcon size="sm" >
                                <FaUser />
                            </SvgIcon>
                        }
                    />
                </Box>
                <Box display="flex" alignItems="center" gap={1}>
                    <Button onClick={() => onFetchNPSearch(search)} size="sm" startDecorator={<SvgIcon><FaMagnifyingGlass /></SvgIcon>} variant="soft" >Buscar</Button>
                </Box>
            </Box>
            <Box mt={4}>
                <Stack spacing={4}>
                    {(nutritionalPlans.length === 0) ? <Typography>No existen registros</Typography> : <NutritionalPlanList onDelete={onDelete} nutritionalPlans={nutritionalPlans} />}
                </Stack>
            </Box>
        </>
    )
}