import { Box, Button, Modal, TextField, Typography } from "@mui/material"
import { useStore } from "../../lib/hooks/useStore"
import { useState } from "react";
import { observer } from "mobx-react-lite";

const ProductTableSettingsModal = observer(() => {
    const { productCatalog: { filter_modal_open, setFilterModalOpen, settings, setProductFilterSettings } } = useStore();

    const [category, setCategory] = useState(settings.category);
    const [minPrice, setMinPrice] = useState(settings.min_price);
    const [maxPrice, setMaxPrice] = useState(settings.max_price);
    const [page, setPage] = useState(settings.max_price);
    const [pageSize, setPageSize] = useState(settings.max_price);

    const saveChanges = () => {
        const tempSettigns = {...settings};
        tempSettigns.category = category;
        tempSettigns.min_price = Math.max(minPrice ?? 1, 1);
        tempSettigns.max_price = maxPrice;
        tempSettigns.page = Math.max(page ?? 1, 1);
        tempSettigns.page_size = Math.max(pageSize ?? 10, 10);

        setProductFilterSettings(tempSettigns);
    }

    return (
        <Modal 
            open={filter_modal_open} onClose={() => setFilterModalOpen(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description">
            <Box style={{ width: "400px", height: "500px", backgroundColor: "white", borderRadius: "10px", padding: "1rem", display: "flex", flexDirection: "column", margin: "auto"}}>
                <Typography variant="h4">Filter Product Catalog Settings</Typography>
                <TextField label="Category" value={category} onChange={(e) => setCategory(e.target.value)} variant="standard"></TextField>
                <TextField label="Min Price" value={minPrice} onChange={(e) => setMinPrice(Number(e.target.value))} type="number" variant="standard"></TextField>
                <TextField label="Max Price" value={maxPrice} onChange={(e) => setMaxPrice(Number(e.target.value))}  type="number" variant="standard"></TextField>
                <TextField label="Page" value={page} onChange={(e) => setPage(Number(e.target.value))}  type="number" variant="standard"></TextField>
                <TextField label="Page Size" value={pageSize} onChange={(e) => setPageSize(Number(e.target.value))}  type="number" variant="standard"></TextField>
                <div style={{ padding: "2rem", width: "100%", display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                    <Button variant="outlined" onClick={() => setFilterModalOpen(false)}>Close</Button>
                    <Button variant="contained" onClick={() => saveChanges()}>Save</Button>
                </div>
            </Box>
        </Modal>
    );
});

export default ProductTableSettingsModal;