import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { Box, Container, flexbox } from "@mui/system";
import React, { useState } from "react";

const Products = ({ handleClick }) => {
  const [active, setActive] = useState(false);
  const handleClicked = (item) => {
    setActive(!active);
  };

  return (
    <Container>
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
        minHeight="40vh"
      >
        <h1>All collections</h1>
      </Box>
      <Box
        display="flex"
        flexWrap="wrap"
        justifyContent="center"
        style={{ padding: 30 }}
      >
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="140"
            image="https://cdn.forbes.ru/forbes-static/750x422/new/2021/12/75f-61c1f76ccde7d.jpg"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              CryptoPunks
            </Typography>
            <Typography variant="body2" color="text.secondary">
              CryptoPunks launched as a fixed set of 10,000 items in mid-2017
              and became one of the inspirations for the ERC-721 standard. They
              have been featured in places like The New York Times, Christie’s
              of London, Art|Basel Miami, and The PBS NewsHour.
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              size="small"
              onClick={(item) => handleClick(item)}
              style={{ backgroundColor: active ? "black" : "white" }}
            >
              Add to Cart
            </Button>
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="140"
            image="https://cdn.forbes.ru/forbes-static/750x422/new/2021/12/75f-61c1f76ccde7d.jpg"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              CryptoPunks
            </Typography>
            <Typography variant="body2" color="text.secondary">
              CryptoPunks launched as a fixed set of 10,000 items in mid-2017
              and became one of the inspirations for the ERC-721 standard. They
              have been featured in places like The New York Times, Christie’s
              of London, Art|Basel Miami, and The PBS NewsHour.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Add to Cart</Button>
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="140"
            image="https://cdn.forbes.ru/forbes-static/750x422/new/2021/12/75f-61c1f76ccde7d.jpg"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              CryptoPunks
            </Typography>
            <Typography variant="body2" color="text.secondary">
              CryptoPunks launched as a fixed set of 10,000 items in mid-2017
              and became one of the inspirations for the ERC-721 standard. They
              have been featured in places like The New York Times, Christie’s
              of London, Art|Basel Miami, and The PBS NewsHour.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Add to Cart</Button>
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="140"
            image="https://cdn.forbes.ru/forbes-static/750x422/new/2021/12/75f-61c1f76ccde7d.jpg"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              CryptoPunks
            </Typography>
            <Typography variant="body2" color="text.secondary">
              CryptoPunks launched as a fixed set of 10,000 items in mid-2017
              and became one of the inspirations for the ERC-721 standard. They
              have been featured in places like The New York Times, Christie’s
              of London, Art|Basel Miami, and The PBS NewsHour.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Add to Cart</Button>
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="140"
            image="https://cdn.forbes.ru/forbes-static/750x422/new/2021/12/75f-61c1f76ccde7d.jpg"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              CryptoPunks
            </Typography>
            <Typography variant="body2" color="text.secondary">
              CryptoPunks launched as a fixed set of 10,000 items in mid-2017
              and became one of the inspirations for the ERC-721 standard. They
              have been featured in places like The New York Times, Christie’s
              of London, Art|Basel Miami, and The PBS NewsHour.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Add to Cart</Button>
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="140"
            image="https://cdn.forbes.ru/forbes-static/750x422/new/2021/12/75f-61c1f76ccde7d.jpg"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              CryptoPunks
            </Typography>
            <Typography variant="body2" color="text.secondary">
              CryptoPunks launched as a fixed set of 10,000 items in mid-2017
              and became one of the inspirations for the ERC-721 standard. They
              have been featured in places like The New York Times, Christie’s
              of London, Art|Basel Miami, and The PBS NewsHour.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Add to Cart</Button>
          </CardActions>
        </Card>
      </Box>
    </Container>
  );
};

export default Products;
