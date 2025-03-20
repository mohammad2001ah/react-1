import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
///هون انا ششغااااااااااااااااااااااااااااللللللللللللللللللللللللللل
///هون انا ششغااااااااااااااااااااااااااااللللللللللللللللللللللللللل
///هون انا ششغااااااااااااااااااااااااااااللللللللللللللللللللللللللل
///هون انا ششغااااااااااااااااااااااااااااللللللللللللللللللللللللللل
///هون انا ششغااااااااااااااااااااااااااااللللللللللللللللللللللللللل
///هون انا ششغااااااااااااااااااااااااااااللللللللللللللللللللللللللل
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));

var x = 1;

export default function ResponsiveGrid() {
  const initial = [{
    id: 1, title: "card1", descreption: "hghghggh"
  }];

  const [cardsData, setCardData] = useState(initial);
  const [formCards, setFormCard] = useState({ id: x + 1, title: "", descreption: "" });

  function ChangCard(event) {
    setFormCard({ ...formCards, [event.target.name]: event.target.value });
  }

  function addCard(event) {
    event.preventDefault();
    setCardData([...cardsData, formCards]);
    setFormCard({ title: "", descreption: "" });
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <>
        <form onSubmit={addCard}>
          <input type='text' placeholder='title' name='title' onChange={ChangCard} value={formCards.title} />
          <input type='text' placeholder='descreption' name='descreption' onChange={ChangCard} value={formCards.descreption} />
          <button type='submit'>Add</button>
        </form>
      </>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {cardsData.map((card, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
            <Item>
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  sx={{ height: 140 }}
                  image="/image/download.jpeg"
                  title="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {card.title}
                  </Typography>
                  <Typography gutterBottom variant="h5" component="div">
                    {card.id}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {card.descreption}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Share</Button>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>
            </Item>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}