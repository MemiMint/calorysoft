import React, { useState, FunctionComponent } from "react";
import { Box, Button, Input, FormControl, FormLabel, CircularProgress, Typography } from "@mui/joy";
import { WithFadeIn } from "../../components/animations/WithFadeIn";
import logo from "../../assets/LogoCalorysoft.png";
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

export const Login: FunctionComponent = (): JSX.Element => {
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const onChange = (event: React.ChangeEvent<HTMLInputElement>, name: string) => {
        if (name === "username") {
            setUsername(event.target.value);
        } else {
            setPassword(event.target.value);
        }
    }

    const onClick = () => {
        setIsLoading(true);

        setTimeout(() => {
            setIsLoading(false);
        }, 3000)
    }

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
                        <Input name="username" onChange={(event) => onChange(event, "username")} startDecorator={<PersonOutlineOutlinedIcon />} sx={{ width: 320 }} placeholder="Ingrese su nombre de usuario" />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Contraseña</FormLabel>
                        <Input name="password" onChange={(event) => onChange(event, "password")} startDecorator={<LockOutlinedIcon />} sx={{ width: 320 }} placeholder="Ingrese su contraseña" type="password" />
                    </FormControl>
                    <Button sx={{ width: 320 }} onClick={onClick}>
                        { isLoading ? <CircularProgress /> : "Iniciar Sesion" }
                    </Button>
                    { JSON.stringify({ username, password }) }
                </Box>
            </Box>
        </WithFadeIn>
    )
}