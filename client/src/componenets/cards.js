import * as React from 'react';
import { Grid, Card, CardActions, CardContent, CardMedia, Button, Typography, TextField, Box } from '@mui/material';

export default function MediaCard() {
  const [cardsData, setCardsData] = React.useState([
    { title: "Card 1", description: "Card 1 Description", image: "/image/download.jpeg" },
    { title: "Card 2", description: "Card 2 Description", image: "/image/download.jpeg" },
    { title: "Card 3", description: "Card 3 Description", image: "/image/download.jpeg" },
  ]);

  const [formData, setFormData] = React.useState({ title: "", description: "", image: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title || !formData.description || !formData.image) return;
    setCardsData([...cardsData, formData]);
    setFormData({ title: "", description: "", image: "" });
  };

  return (
    <Box sx={{ p: 3 }}>
      <Card sx={{ maxWidth: 400, mx: "auto", mb: 4, p: 2, boxShadow: 3 }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>Add New Card</Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="Title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              margin="normal"
            />
            <TextField
              fullWidth
              label="Description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              margin="normal"
            />
            <TextField
              fullWidth
              label="Image URL"
              name="image"
              value={formData.image}
              onChange={handleChange}
              margin="normal"
            />
            <Button type="submit" variant="contained" sx={{ mt: 2 }} fullWidth>
              Add Card
            </Button>
          </form>
        </CardContent>
      </Card>

      <Grid container spacing={3} justifyContent="center">
        {cardsData.map((card, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia sx={{ height: 140 }} image={card.image} title={card.title} />
              <CardContent>
                <Typography gutterBottom variant="h5">{card.title}</Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>{card.description}</Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
