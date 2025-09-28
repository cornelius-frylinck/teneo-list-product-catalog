import { Button, Paper, Typography } from "@mui/material";
import { Link } from "react-router";
import { useProductCatalogs } from "../lib/hooks/useProductCatalogs";
import Spinner from "../components/common/spinner";
import SickPage from "../components/errors/Sick";
import { useStore } from "../lib/hooks/useStore";

const HomePage = () => {
    const { apiHealthCheck, isLoadingHealthCheck } = useProductCatalogs();
    const { commonStore: { isLoading } } = useStore();

    if (isLoading || isLoadingHealthCheck) return <Spinner/>
    
    if (!apiHealthCheck  || apiHealthCheck.status !== "ok") return <SickPage />
  return (
    <Paper className="container">
        <Typography gutterBottom variant="h3">
            Sever is Healthy!
        </Typography>
        <Typography gutterBottom>
            Click below to view the product list
        </Typography>
        <Button fullWidth component={Link} to="/products">
            View Products
        </Button>
    </Paper>
  )
}

export default HomePage;