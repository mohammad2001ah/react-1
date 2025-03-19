// import * as React from 'react';
// import { Grid, Card, CardActions, CardContent, CardMedia, Button, Typography, TextField, Box } from '@mui/material';

// export default function MediaCard() {
//   const [cardsData, setCardsData] = React.useState([
//     { title: "Card 1", description: "Card 1 Description", image: "/image/download.jpeg" },
//     { title: "Card 2", description: "Card 2 Description", image: "/image/download.jpeg" },
//     { title: "Card 3", description: "Card 3 Description", image: "/image/download.jpeg" },
//   ]);

//   const [formData, setFormData] = React.useState({ title: "", description: "", image: "" });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!formData.title || !formData.description || !formData.image) return;
//     setCardsData([...cardsData, formData]);
//     setFormData({ title: "", description: "", image: "" });
//   };

//   return (
//     <Box sx={{ p: 3 }}>
//       <Card sx={{ maxWidth: 400, mx: "auto", mb: 4, p: 2, boxShadow: 3 }}>
//         <CardContent>
//           <Typography variant="h6" gutterBottom>Add New Card</Typography>
//           <form onSubmit={handleSubmit}>
//             <TextField
//               fullWidth
//               label="Title"
//               name="title"
//               value={formData.title}
//               onChange={handleChange}
//               margin="normal"
//             />
//             <TextField
//               fullWidth
//               label="Description"
//               name="description"
//               value={formData.description}
//               onChange={handleChange}
//               margin="normal"
//             />
//             <TextField
//               fullWidth
//               label="Image URL"
//               name="image"
//               value={formData.image}
//               onChange={handleChange}
//               margin="normal"
//             />
//             <Button type="submit" variant="contained" sx={{ mt: 2 }} fullWidth>
//               Add Card
//             </Button>
//           </form>
//         </CardContent>
//       </Card>

//       <Grid container spacing={3} justifyContent="center">
//         {cardsData.map((card, index) => (
//           <Grid item xs={12} sm={6} md={4} key={index}>
//             <Card sx={{ maxWidth: 345 }}>
//               <CardMedia sx={{ height: 140 }} image={card.image} title={card.title} />
//               <CardContent>
//                 <Typography gutterBottom variant="h5">{card.title}</Typography>
//                 <Typography variant="body2" sx={{ color: 'text.secondary' }}>{card.description}</Typography>
//               </CardContent>
//               <CardActions>
//                 <Button size="small">Share</Button>
//                 <Button size="small">Learn More</Button>
//               </CardActions>
//             </Card>
//           </Grid>
//         ))}
//       </Grid>
//     </Box>
//   );
// 
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
 
 export default function ResponsiveGrid() {
   return (
     <Box sx={{ flexGrow: 1 }}>
       <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        
           <Grid item xs={2} sm={4} md={4} >
             <Item>
                 <Card sx={{ maxWidth: 345 }}>
                     <CardMedia
                         sx={{ height: 140 }}
                         image="/images/contemplative-reptile.jpg"
                         title="green iguana"
                     />
                     <CardContent>
                         <Typography gutterBottom variant="h5" component="div">
                         Lizard
                         </Typography>
                         <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                         Lizards are a widespread group of squamate reptiles, with over 6,000
                         species, ranging across all continents except Antarctica
                         </Typography>
                     </CardContent>
                     <CardActions>
                         <Button size="small">Share</Button>
                         <Button size="small">Learn More</Button>
                     </CardActions>
                 </Card>
             </Item>
           </Grid>
           <Grid item xs={2} sm={4} md={4} >
             <Item>
             <Card sx={{ maxWidth: 345 }}>
                     <CardMedia
                         sx={{ height: 140 }}
                         image="/images/contemplative-reptile.jpg"
                         title="green iguana"
                     />
                     <CardContent>
                         <Typography gutterBottom variant="h5" component="div">
                         Lizard
                         </Typography>
                         <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                         Lizards are a widespread group of squamate reptiles, with over 6,000
                         species, ranging across all continents except Antarctica
                         </Typography>
                     </CardContent>
                     <CardActions>
                         <Button size="small">Share</Button>
                         <Button size="small">Learn More</Button>
                     </CardActions>
                 </Card>
             </Item>
           </Grid>
           <Grid item xs={2} sm={4} md={4} >
             <Item>
             <Card sx={{ maxWidth: 345 }}>
                     <CardMedia
                         sx={{ height: 140 }}
                         image="/images/contemplative-reptile.jpg"
                         title="green iguana"
                     />
                     <CardContent>
                         <Typography gutterBottom variant="h5" component="div">
                         Lizard
                         </Typography>
                         <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                         Lizards are a widespread group of squamate reptiles, with over 6,000
                         species, ranging across all continents except Antarctica
                         </Typography>
                     </CardContent>
                     <CardActions>
                         <Button size="small">Share</Button>
                         <Button size="small">Learn More</Button>
                     </CardActions>
                 </Card>
             </Item>
           </Grid>
           <Grid item xs={2} sm={4} md={4} >
             <Item>
             <Card sx={{ maxWidth: 345 }}>
                     <CardMedia
                         sx={{ height: 140 }}
                         image="/images/contemplative-reptile.jpg"
                         title="green iguana"
                     />
                     <CardContent>
                         <Typography gutterBottom variant="h5" component="div">
                         Lizard
                         </Typography>
                         <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                         Lizards are a widespread group of squamate reptiles, with over 6,000
                         species, ranging across all continents except Antarctica
                         </Typography>
                     </CardContent>
                     <CardActions>
                         <Button size="small">Share</Button>
                         <Button size="small">Learn More</Button>
                     </CardActions>
                 </Card>
             </Item>
           </Grid>
           <Grid item xs={2} sm={4} md={4} >
             <Item>xs=2</Item>
           </Grid>
       </Grid>
     </Box>
   );
 }