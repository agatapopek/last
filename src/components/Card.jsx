import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid'; 
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import Rating from '@mui/material/Rating';
import Eiffel from '../assets/ef.jpg'


export default function Card(){
    return(
        <>
        <Grid item xs={3}>
        <Paper elevation={3}>
            <img src={Eiffel} alt='eiffel tower' className="img"/>
            <Box paddingX={1}>
            <Typography variant='subtitle1' component="h2">Eiffel Tower</Typography>
            <Box
            sx={{
                display: "flex",
                alignItems: "center"
            }}>
                <AccessTimeIcon sx={{
                    width: 12.5
                }}/>
                <Typography variant='body2' component="p" marginLeft={0.5}>
                    3 hours
                </Typography>
            </Box>
            <Box
            sx={{
                display: "flex",
                alignItems: "center",
                marginTop: "20px"
            }}>
                <Rating name="read-only" value={4.5} readOnly precision={0.5} size='small'/>
                <Typography variant='body2' component="p" marginLeft={0.5}>
                    4.5
                </Typography>
                <Typography variant='body2' component="p" marginLeft={0.5}>
                    (466 reviews)
                </Typography>
            </Box>
            <Box>
            <Typography variant='h6' component="h3" marginTop={0.5}>
                    (466 reviews)
                </Typography>
            </Box>
            </Box>
        </Paper>
        </Grid>
        </>
    )
}