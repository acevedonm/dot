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
        avatar={
          <Avatar aria-label="cake" className={classes.avatar}>
            <Cake></Cake>
          </Avatar>
        }
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
        subheader="$1.000/ o Pedir con anticipacion/ categoria"
      />
      <CardMedia
        className={classes.media}
        image="https://lh3.googleusercontent.com/onOOnok64XiIYs7W1ADZy3JgAkPHQ9Og83lo1UgHmh_pmpZtvJ3OG4DsOo-YeRvph6LR0sZ9e8V4hVphLXuwJ5X_T4bN2pEYFvvsMKXRzoBGyE3bUqNEm5p5hZTo6Yw7Z8bvA9JG8y-hd9Nrnag9A0ehpSy_Z81PIgmkZQJ_hZW-yODR1BiUK7MxB4-k2OtMNjc3ddBfZ2mt7w-mayVgt1oTDisjtdv5mOAUiEkbfkRmW9MX8ZudmwX-CppmReQiq3xRW3agweQZCpwIr91Tg4AJgQiTGMK28tklsEaXbRSWuTpDFLuRq37bHJFmNvwxDU_IWmRDQv_jzTkdSqGuIZliRNyiHQrUIH_3dp2vc-71c322O74rhRwKzefNGq5HYey2kHSD86wE0IHogBO2kuAOcrXHenYKKtlOuMy94c6g2q0BXV8t7jYhQntaWOgmLdAyYjmD0coq0gXSIPoSyzuxE6C3NerwSSmSNTfdupsGhgsSYU2hLXm0CmMV39IP_FDrCFqPY0bG0N8hZkDW5UO6O0SnIBeZQTr-Cmh4_7YIZygQIegTj9fnBQx57F3qMOJ2T8mRjG4qrjf0yane8XYR5ziAKLBNncMXwTRqlhEABdUpDzE_e3140u_xEK8u_LnsR5b4Q0xlX2pFzwAOmcAaWWYFaNegaz3R9-UO8rTZukcc7pWqdaXGkYy2HZE=w327-h296-no?authuser=0"
        title="Choco Torta"
      />
      <CardContent className={classes.content}>
        <Typography variant="body2" color="textSecondary" component="p">
          Torta Oreo 💘 para comer helada. La guardas en el freezer y cuchareás
          cuando te agarren ganas de algo dulce 🤤
        </Typography>
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
