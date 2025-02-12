import { Typography } from "@mui/material";
import Card from "../components/Card";
import cities from "../data.json"


export default function DefaultPage (){
    return(
        <>
        {cities.map((city) =>(
            <>
            <Typography variant="h4" component="h2" marginTop={5} marginBottom={3}>
                TOP {city.name} Tours
            </Typography>
            <Card />
        <Card />
        <Card />
        <Card />
            </>
        ))}
        </>
    )
}