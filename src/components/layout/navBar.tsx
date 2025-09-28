import { Badge } from "@mui/icons-material";
import { Box, AppBar, Toolbar, Typography, Container, MenuItem } from "@mui/material";
import { NavLink } from "react-router";

export default function NavBar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="fixed"
                sx={{
                    backgroundImage: 'linear-gradient(135deg, #67b554 0%, #baa1f7 69%, #e2be59 89%)'
                }}>
                <Container maxWidth='xl'>
                    <Toolbar sx={{ display: 'flex', justifyContent: 'left' }}>
                        <Box>
                            <MenuItem component={NavLink} to='/' sx={{ display: 'flex', gap: 2 }}>
                                <Badge fontSize="large" />
                                <Typography sx={{position: 'relative'}} variant="h4" fontWeight='bold'>
                                    Teneo Technical Assessment
                                </Typography>
                            </MenuItem>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </Box>
    )
}