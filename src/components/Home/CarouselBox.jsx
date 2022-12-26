import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";
import { Container, Button, CarouselItem } from "react-bootstrap";

const CarouselBox = () => {
  return (
    <Container>
      <div
        id="carouselExampleDark"
        class="carousel carousel-dark slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner" style={{ height: "550px" }}>
          <div class="carousel-item active" data-bs-interval="10000">
            <img
              src="https://www.cnet.com/a/img/resize/a8c7d4bfc5acd4efd478bb8ff5809db38dc0285c/hub/2022/03/23/426f4e77-4abd-49b7-919d-8e83b2912ead/bayc.png?auto=webp&fit=crop&height=675&width=1200"
              alt="..."
            />
            <div class="carousel-caption d-none d-md-block">
              <h5>First slide label</h5>
              <p>
                Some representative placeholder content for the first slide.
              </p>
            </div>
          </div>
          <div class="carousel-item" data-bs-interval="2000">
            <img
              src="https://www.cnet.com/a/img/resize/831f4adea534ae80270e546bf4b1143f7822da37/hub/2022/03/24/089338ab-ca66-4c46-a637-1dcbd3646976/bayc4.png?auto=webp&fit=crop&height=630&width=1200"
              class="d-block w-100"
              alt="..."
            />
            <div class="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>
              <p>
                Some representative placeholder content for the second slide.
              </p>
            </div>
          </div>
          <div class="carousel-item">
            <img
              src="https://news.bayz.gg/wp-content/uploads/2022/04/Bored-Ape-Yacht-club-brasil-2-1-1024x703.png"
              class="d-block w-100"
              alt="..."
            />
            <div class="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>
                Some representative placeholder content for the third slide.
              </p>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>

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
export default CarouselBox;
