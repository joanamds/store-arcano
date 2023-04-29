import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function CartItemCard({total, date, cartItems}) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        title={ date }
        subheader={`$${ total }`}
      />
      <CardActions disableSpacing>
      <p>Detalhes da compra </p>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {
        cartItems.map((cartItem) => {
          return (
            <ListItem key={ cartItem.product.id }>
              <ListItemAvatar>
                <Avatar>
                  <img
                    src={ cartItem.product.image }
                    alt={ cartItem.title }
                    style={{ objectFit: 'contain', width: '100%', height: '100%' }}
                  />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={ cartItem.product.title }
              secondary={`$${cartItem.product.price}`}/>
            </ListItem>
          );
        })
      }
    </List>
        </CardContent>
      </Collapse>
    </Card>
  );
}