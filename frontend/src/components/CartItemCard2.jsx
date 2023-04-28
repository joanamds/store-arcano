import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CheckroomIcon from '@mui/icons-material/Checkroom';
import DiamondIcon from '@mui/icons-material/Diamond';
import ComputerIcon from '@mui/icons-material/Computer';
import { Tooltip } from '@mui/material';
import GradeIcon from '@mui/icons-material/Grade';

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

export default function CartItem2({quantity, title, price, image}) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const getIcon = (category) => {
    switch(category) {
      case "men's clothing":
        return <CheckroomIcon />
      case "jewelery":
        return <DiamondIcon />
      case "electronics":
        return <ComputerIcon />
      case "women's clothing":
        return <CheckroomIcon />
      default:
        <CheckroomIcon/>
    }
  }

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        title={ title }
        subheader={`$${ price }`}
      />
      <CardMedia
        component="img"
        height="194"
        image={ image }
        alt={ title }
        style={{objectFit: "contain"}}
      />
      <CardActions disableSpacing>
      <p>Category: </p>
      <Tooltip title={ category }>
        <IconButton aria-label="add to favorites">
          { getIcon(category) }
        </IconButton>
      </Tooltip>
      <Tooltip title="rating">
        <IconButton aria-label="add to favorites">
          <GradeIcon />
        </IconButton>
      </Tooltip>
        <p>{ rating }</p>
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
          <Typography paragraph>Description:</Typography>
          <Typography paragraph>
            { description }
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}