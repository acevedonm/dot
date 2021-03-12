import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { grey } from "@material-ui/core/colors"; 
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Cake,AddShoppingCart } from "@material-ui/icons";
import accounting from "accounting"

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    border: "solid 1px #F0434D",
    backgroundColor: "#FBF4EC",
    margin: "auto",
  },
  
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  content:{
    //decoracion del contendio
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: "#F0434D", //puedo definir otro color usando string
  },
}));

export default function Product() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader

        action={
          <Typography
            className={classes.action}
            variant="h5"
            color="textSecondary"
          >
            {"$ 1.000"}
          </Typography>
        }
        title="Torta Oreo "
       
      />
      <CardMedia
        className={classes.media}
        image="https://lh3.googleusercontent.com/pw/ACtC-3dHq03jtbXNbUFE8bEv9ur-Fy3exFjIYpIknlMbivdFeuM_G3Fv-EpaywbWSDM0aZUaf8bdeH47COxcGVoBgeVLCfvDIE5yVdPRA3zXIFDqZ6fm3YH2dhheeFQNFXZFHgMUcxKfINf1GME7KsAxWhYmzg=w1095-h881-no?authuser=0"
        title="Choco Torta"
      />
      <CardContent className={classes.content}>

      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="Add to Cart" onClick={"addToBasket"}>
          <AddShoppingCart fontSize="large" />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          Torta Oreo 💘 para comer helada. La guardas en el freezer y cuchareás
          cuando te agarren ganas de algo dulce 🤤
        </Typography>
          <Typography paragraph>Clientes Satisfechos:</Typography>
          <Typography paragraph>
            o podes poner descripcion del producto, ingredientes etc:
          </Typography>
          <Typography paragraph>
            tuutim: Además de hermosa, exquisita cómo siempre 👏🏼
          </Typography>
          <Typography paragraph>
            Maria Luisa Landi: Riquisima la picada!!!! Abundante y muy
            completa!!!! Gracias Dulce o Truco!!!!!!!!
          </Typography>
          <Typography paragraph>Nico: Exquisita</Typography>
          <Typography>otro</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
