import { FC } from "react";
import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Typography from '@mui/joy/Typography';
import { FaUser } from 'react-icons/fa6';
import { Patient } from '../../types/patient';

export const UserInfoCard: FC<Patient> = (props): JSX.Element => {
    const benedictH = (10 * props.weight) + (6.25 * props.height) - (5 * props.age) + 5;
    const benedictM = (10 * props.weight) + (6.25 * props.height) - (5 * props.age) - 161;

    
    return (
        <Card
            data-resizable
            sx={{
                textAlign: 'center',
                alignItems: 'center',
                width: 343,
                // to make the demo resizable
                overflow: 'auto',
                boxShadow: "lg",
                '--icon-size': '100px',
            }}
        >
            <CardOverflow variant="solid" color="primary">
                <AspectRatio
                    variant="outlined"
                    color="primary"
                    ratio="1"
                    sx={{
                        m: 'auto',
                        transform: 'translateY(50%)',
                        borderRadius: '50%',
                        width: 'var(--icon-size)',
                        boxShadow: 'sm',
                        bgcolor: 'background.surface',
                        position: 'relative',
                    }}
                >
                    <div>
                        <FaUser size={30} />
                    </div>
                </AspectRatio>
            </CardOverflow>
            <Typography level="title-lg" sx={{ mt: 'calc(var(--icon-size) / 2)' }}>
                    { props.firstname } { props.lastname }
            </Typography>
            <CardContent sx={{ maxWidth: '40ch' }}>
                <Typography level="title-sm" >
                    edad: { props.age }
                </Typography>
                <Typography level="title-sm" >
                    peso: {props.weight}kg
                </Typography>
                <Typography level="title-sm" >
                    altura: {props.height}CM
                </Typography>
                <Typography variant="solid" color="primary" mt={2} borderRadius={6}>
                    Calculo Calorico: { props.sex === "M" ? (benedictH * props.physical_activity).toString() : (benedictM * props.physical_activity ).toString() } 
                </Typography>
            </CardContent>
        </Card>
    );
}