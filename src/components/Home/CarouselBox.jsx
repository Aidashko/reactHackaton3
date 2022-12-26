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
import "./Home.css";

const CarouselBox = () => {
  return (
    <div className="main-home">
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
          <div class="carousel-inner" style={{ height: "450px" }}>
            <div class="carousel-item active" data-bs-interval="10000">
              <img
                src="https://d1e00ek4ebabms.cloudfront.net/production/08e8793d-c757-4626-bde4-1d03171661b2.jpg"
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
                src="https://pbs.twimg.com/profile_banners/1456137793361440779/1642491122/1500x500"
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
                src="https://blogs.airdropalert.com/wp-content/uploads/2021/09/pfp-nfts-2-1024x491.png"
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
          minHeight="30vh"
        >
          <h1>ALL COLLECTIONS</h1>
        </Box>
        <Box
          display="flex"
          flexWrap="wrap"
          justifyContent="center"
          style={{ padding: 30 }}
        >
          <Card sx={{ maxWidth: 345, background: "dark" }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="140"
              image="https://1ath.studio/img/team-avatars/Kristine.png"
            />

            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                CryptoPunks
              </Typography>
              <Typography variant="body2" color="text.secondary">
                CryptoPunks launched as a fixed set of 10,000 items in mid-2017
                and became one of the inspirations for the ERC-721 standard.
                They have been featured in places like The New York Times,
                Christie’s of London, Art|Basel Miami, and The PBS NewsHour.
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
              image="https://1ath.studio/img/team-avatars/Ben.png"
            />

            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                CryptoPunks
              </Typography>
              <Typography variant="body2" color="text.secondary">
                CryptoPunks launched as a fixed set of 10,000 items in mid-2017
                and became one of the inspirations for the ERC-721 standard.
                They have been featured in places like The New York Times,
                Christie’s of London, Art|Basel Miami, and The PBS NewsHour.
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
              image="https://1ath.studio/img/team-avatars/Ivan.png"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                CryptoPunks
              </Typography>
              <Typography variant="body2" color="text.secondary">
                CryptoPunks launched as a fixed set of 10,000 items in mid-2017
                and became one of the inspirations for the ERC-721 standard.
                They have been featured in places like The New York Times,
                Christie’s of London, Art|Basel Miami, and The PBS NewsHour.
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
              // image="https://1ath.studio/img/team-avatars/Rika.png"
              image=""
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                CryptoPunks
              </Typography>
              <Typography variant="body2" color="text.secondary">
                CryptoPunks launched as a fixed set of 10,000 items in mid-2017
                and became one of the inspirations for the ERC-721 standard.
                They have been featured in places like The New York Times,
                Christie’s of London, Art|Basel Miami, and The PBS NewsHour.
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
              image="https://www.thecryptoupdates.com/wp-content/uploads/2022/02/Screenshot-2022-02-04-at-11.31.37-PM.png"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                CryptoPunks
              </Typography>
              <Typography variant="body2" color="text.secondary">
                CryptoPunks launched as a fixed set of 10,000 items in mid-2017
                and became one of the inspirations for the ERC-721 standard.
                They have been featured in places like The New York Times,
                Christie’s of London, Art|Basel Miami, and The PBS NewsHour.
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
              image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-nYTZFmmQoD9IT3dfPzKpV5SMHjB_Xer1Mg&usqp=CAU"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                CryptoPunks
              </Typography>
              <Typography variant="body2" color="text.secondary">
                CryptoPunks launched as a fixed set of 10,000 items in mid-2017
                and became one of the inspirations for the ERC-721 standard.
                They have been featured in places like The New York Times,
                Christie’s of London, Art|Basel Miami, and The PBS NewsHour.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Add to Cart</Button>
            </CardActions>
          </Card>
        </Box>
        <section>
          <div>
            <h1>LEARN ABOUT 1ATH.STUDIO</h1>
          </div>
          <p>
            1ATH.Studio stands for One All Time High Studio meaning that we're
            targeted to become NFT utility niche leaders.
            <br /> We're a well-connected and well-funded team of creative
            experts with vast experience who connect NFT and entertainment
            industries. <br /> We've entered into a wide-range of valuable
            partnerships with established well-performing brands and have a
            long-term pipeline of innovative high-tech products.
          </p>
          <button>Learn More</button>
        </section>
      </Container>
    </div>
  );
};
export default CarouselBox;
