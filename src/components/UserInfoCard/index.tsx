import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Typography from '@mui/joy/Typography';
import { FaUser } from 'react-icons/fa6';

export const UserInfoCard = (): JSX.Element => {
    const benedictCalc = (10 * 40) + (6.25 * 183) - (5 * 23) + 5 * 1.55;
    
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
                Alejandro Hernandez
            </Typography>
            <CardContent sx={{ maxWidth: '40ch' }}>
                <Typography level="title-sm" >
                    edad: 23
                </Typography>
                <Typography level="title-sm" >
                    peso: 40kg
                </Typography>
                <Typography level="title-sm" >
                    altura: 183CM
                </Typography>
                <Typography variant="solid" color="primary" mt={2} borderRadius={6}>
                    Calculo Calorico: { benedictCalc.toString() } 
                </Typography>
            </CardContent>
        </Card>
    );
}