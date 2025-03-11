import * as React from 'react';
import { Grid, Card, CardActions, CardContent, CardMedia, Button, Typography } from '@mui/material';

export default function MediaCard() {
  const cardsData = [
    {
      title: "Card 1",
      description: "Card 1 Description",
      image: "/image/download.jpeg",
    },
    {
      title: "Card 2",
      description: "Card 2 Description",
      image: "/image/download.jpeg",
    },
    {
      title: "Card 3",
      description: "Card 3 Description",
      image: "/image/download.jpeg",
    },
    {
      title: "Card 4",
      description: "Card 3 Description",
      image: "/image/download.jpeg",
    },
    {
      title: "Card 5",
      description: "Card 3 Description",
      image: "/image/download.jpeg",
    },
    {
      title: "Card 6",
      description: "Card 3 Description",
      image: "/image/download.jpeg",
    },
  ];

  return (
    <Grid container spacing={2} justifyContent="center">
      {cardsData.map((card, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia sx={{ height: 140 }} image={card.image} title={card.title} />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {card.title}
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                {card.description}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
