import { Box, Paper, Typography } from "@mui/material";
import { useProductCatalogs } from "../lib/hooks/useProductCatalogs";
import Spinner from "../components/common/spinner";
import { observer } from "mobx-react-lite";
import ProductCatalogTable from "../components/product-catalog/ProductCatalogTable";

const ProductCatalogPage = observer(() => {
  const { productCatalogsResult, isLoading } = useProductCatalogs();

  if (isLoading) return <Spinner/>

  if (!productCatalogsResult || !productCatalogsResult.pages[0].data || productCatalogsResult.pages[0].data.length === 0) return <Paper> className="container"No products found</Paper>;

  return (
    <Box className="container" style={{ width: "90%"}}>
        <Typography gutterBottom variant="h3">
            Product Catalog
        </Typography>
        <ProductCatalogTable productDetailsList={productCatalogsResult.pages[0].data} />
    </Box>
  )
});

export default ProductCatalogPage;