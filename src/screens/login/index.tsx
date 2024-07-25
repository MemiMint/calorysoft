import { FunctionComponent } from "react";
import { Box, Button, Input, FormControl, FormLabel, CircularProgress } from "@mui/joy";
import { WithFadeIn } from "../../components/animations/WithFadeIn";
import logo from "../../assets/LogoCalorysoft.png";
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useLogin } from "./hook";
import { useSelector } from "react-redux";
import { RootState } from "../../store/reducers";


export const Login: FunctionComponent = (): JSX.Element => {
    const {
        state,
        onChange,
        onClick
    } = useLogin();

    const isLoading = useSelector((state: RootState) => state.loading);

    return (
        <WithFadeIn>
            <Box
                className="fade-in"
                width="100%"
                height="100vh"
                display="flex"
                flexDirection="column"
                gap={4}
                alignItems="center"
                justifyContent="center"
            >
                <img src={logo} />
                <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" mt={2} gap={4}>
                    <FormControl>
                        <FormLabel>Nombre de usuario</FormLabel>
                        <Input name="username" value={state.username} onChange={onChange} startDecorator={<PersonOutlineOutlinedIcon />} sx={{ width: 320 }} placeholder="Ingrese su nombre de usuario" />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Contraseña</FormLabel>
                        <Input name="password" value={state.password} onChange={onChange} startDecorator={<LockOutlinedIcon />} sx={{ width: 320 }} placeholder="Ingrese su contraseña" type="password" />
                    </FormControl>
                    <Button sx={{ width: 320 }} onClick={onClick}>
                        { isLoading ? <CircularProgress /> : "Iniciar Sesion" }
                    </Button>
                </Box>
            </Box>
        </WithFadeIn>
    )
}