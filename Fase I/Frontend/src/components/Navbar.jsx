import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Mi Tienda
        </Typography>
        <Button color="inherit" component={Link} to="/pagos">
          Pagos
        </Button>
        <Button color="inherit" component={Link} to="/dash-cliente">
          Productos
        </Button>
        <IconButton color="inherit" component={Link} to="/cart">
          <ShoppingCartIcon />
          Carrito
        </IconButton>
        <Button color="inherit" component={Link} to="/devoluciones">
          Devoluciones
        </Button>
        <Button color="inherit" component={Link} to="/profile">
          Ver Perfil
        </Button>
        <Button color="inherit" component={Link} to="/">
          Cerrar Sesión
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
