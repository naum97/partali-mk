import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import Collapse from "@material-ui/core/Collapse";

const drawerWidth = 240;

const AdminDrawer = (props) => {
  const [isProductsDrawerOpen, setIsProductsDrawerOpen] = React.useState(false);
  const [isBoutiqueDrawerOpen, setIsBoutiquesDrawerOpen] = React.useState(
    false
  );
  const [isOrdersDrawerOpen, setIsOrdersDrawerOpen] = React.useState(false);

  const handleClick = (drawer) => {
    if (drawer === "products") {
      setIsProductsDrawerOpen(!isProductsDrawerOpen);
    } else if (drawer === "boutiques") {
      setIsBoutiquesDrawerOpen(!isBoutiqueDrawerOpen);
    } else if (drawer === "orders") {
      setIsOrdersDrawerOpen(!isOrdersDrawerOpen);
    }
  };

  const useStyles = makeStyles((theme) => ({
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    listItemText: {
      fontSize: "14px",
    },
  }));
  const classes = useStyles();

  return (
    <Drawer
      className={classes.drawer}
      variant="permanent"
      classes={{
        paper: classes.drawerPaper,
      }}
      anchor="left"
    >
      <h2
        style={{
          textAlign: "center",
          margin: "61.6px 0px",
          color: "#ba4c2a",
          letterSpacing: "0.2em",
        }}
      >
        партали.мк
      </h2>
      <Divider />
      <List>
        <ListItem button onClick={() => handleClick("products")}>
          <ListItemText primary="Store products" />
          {isProductsDrawerOpen ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={isProductsDrawerOpen} timeout="auto" unmountOnExit>
          <Divider />
          <List component="div" disablePadding>
            <ListItem button className={classes.nested}>
              <ListItemText
                classes={{ primary: classes.listItemText }}
                primary="Products"
              />
            </ListItem>
            <ListItem button className={classes.nested}>
              <ListItemText
                primary="Inventory"
                classes={{ primary: classes.listItemText }}
              />
            </ListItem>
            <ListItem button className={classes.nested}>
              <ListItemText
                primary="Collections"
                classes={{ primary: classes.listItemText }}
              />
            </ListItem>
          </List>
          <Divider />
        </Collapse>
        <ListItem button onClick={() => handleClick("boutiques")}>
          <ListItemText primary="Manage boutiques" />
          {isBoutiqueDrawerOpen ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={isBoutiqueDrawerOpen} timeout="auto" unmountOnExit>
          <Divider />
          <List component="div" disablePadding>
            <ListItem button className={classes.nested}>
              <ListItemText
                classes={{ primary: classes.listItemText }}
                primary="Overview"
              />
            </ListItem>
            <ListItem button className={classes.nested}>
              <ListItemText
                primary="Add/Remove Boutique"
                classes={{ primary: classes.listItemText }}
              />
            </ListItem>
            <ListItem button className={classes.nested}>
              <ListItemText
                primary="Collections"
                classes={{ primary: classes.listItemText }}
              />
            </ListItem>
          </List>
          <Divider />
        </Collapse>
        <ListItem button onClick={() => handleClick("orders")}>
          <ListItemText primary="Manage orders" />
          {isOrdersDrawerOpen ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
      </List>
    </Drawer>
  );
};

export default AdminDrawer;
