import { Button, Paper, Typography } from "@mui/material";
import { Link } from "react-router";

const NotFound = () => {
  return (
    <Paper style={{ height: "100vh"}} className="container">
        <Typography gutterBottom variant="h1">
           404
        </Typography>
        <Typography gutterBottom variant="h5">
            Oops - can't find the page you're looking for!
        </Typography>
        <Button style={{textAlign: "right"}} fullWidth component={Link} to="/">
            Go Home
        </Button>
    </Paper>
  )
}

export default NotFound;