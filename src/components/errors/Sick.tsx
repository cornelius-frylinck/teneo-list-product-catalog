import { SickOutlined } from "@mui/icons-material";
import { Button, Paper, Typography } from "@mui/material";
import { Link } from "react-router";

const SickPage = () => {
  return (
    <Paper style={{textAlign: "center"}} className="container">
        <SickOutlined fontSize="large" />
        <Typography gutterBottom variant="h5">
            Oh no! The server seems to be a bit under the weather...
        </Typography>
        <Button style={{textAlign: "right"}} fullWidth component={Link} to="/">
            Try again
        </Button>
    </Paper>
  )
}

export default SickPage;