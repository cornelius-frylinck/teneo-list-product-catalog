import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from "@mui/material";
import { ProductSortOpposites, ProductSortOptions } from "../../lib/enums/enums";
import { ArrowDownward, FilterList, Search } from "@mui/icons-material";
import { useStore } from "../../lib/hooks/useStore";
import { useState } from "react";
import ProductTableSettingsModal from "./productTableSettingsModal";
import { useProductCatalogs } from "../../lib/hooks/useProductCatalogs";

interface ProductTableProps {
    productDetailsList: ProductDetail[]
}

const ProductCatalogTable = (productTableProps: ProductTableProps) => {
  const { productCatalog: { setSearchString, setFilterModalOpen, setSortOptions, sort, } } = useStore();
  const { hasNextPage, fetchNextPage} = useProductCatalogs();
    const [queryString, setQueryString] = useState("");

  const updateSortItem = (sortItem: ProductSortOptions) => {
    const itemKey = Object.keys(ProductSortOptions).find(x => (ProductSortOptions as any)[x] === sort);
    const oppositeKey = Object.keys(ProductSortOpposites).find(x => (ProductSortOpposites as any)[x] === itemKey);
    const sortItemString = sortItem.toString();

    if (sortItemString === itemKey) {
      setSortOptions(oppositeKey as ProductSortOptions);
      return;
    }
    if (sortItemString === oppositeKey) {
      setSortOptions(itemKey as ProductSortOptions);
      return;
    }
    setSortOptions(sortItem as ProductSortOptions);
  }
    return (
    <>
        <ProductTableSettingsModal />
        <TableContainer sx={{ minWidth: 800 }} component={Paper}>
            <div className="table-settigns-row">
                <div>
                    <FilterList onClick={() => setFilterModalOpen(true)} className="needs-pointer"/>
                </div>
                <div style={{ display: "flex", alignItems: "center"}}>
                    <TextField onChange={(e) => setQueryString(e.target.value)} label="Search" variant="standard" />
                    <Search onClick={() => setSearchString(queryString)} className="needs-pointer"/>
                </div>
            </div>
            <Table>
                <TableHead>
                <TableRow>
                    <TableCell className="table-header-item">SKU</TableCell>
                    <TableCell className="table-header-item">Name</TableCell>
                    <TableCell className="table-header-item">Category</TableCell>
                    <TableCell className="table-header-item-with-filter"><ArrowDownward className="needs-pointer" onClick={() => updateSortItem(ProductSortOptions.price)}/> Price</TableCell>
                    <TableCell className="table-header-item-with-filter"><ArrowDownward className="needs-pointer" onClick={() => updateSortItem(ProductSortOptions.rating)}/> Rating</TableCell>
                    <TableCell className="table-header-item">Stock</TableCell>
                    <TableCell className="table-header-item-with-filter"><ArrowDownward className="needs-pointer" onClick={() => updateSortItem(ProductSortOptions.created_at)}/> Created At</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {productTableProps.productDetailsList.map(row => (
                    <TableRow
                        key={row.id}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                        <TableCell component="th" scope="row">
                            {row.sku}
                        </TableCell>
                        <TableCell component="th" scope="row">
                            {row.name}
                        </TableCell>
                        <TableCell component="th" scope="row">
                            {row.category}
                        </TableCell>
                        <TableCell component="th" scope="row">
                            {row.price_fmt}
                        </TableCell>
                        <TableCell component="th" scope="row">
                            {row.rating}
                        </TableCell>
                        <TableCell component="th" scope="row">
                            {row.stock}
                        </TableCell>
                        <TableCell component="th" scope="row">
                            {row.created_at}
                        </TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </TableContainer>
        <Button variant="contained" disabled={!hasNextPage} onClick={() => fetchNextPage()}>Next Page</Button>
    </>
    )
}

export default ProductCatalogTable;