import React from 'react';
// import BusinessIcon from "@material-ui/icons/Business";
// import AppsIcon from "@material-ui/icons/Apps";
import { makeStyles } from '@material-ui/core/styles';
import {
  Breadcrumbs,
  Button,
  ClickAwayListener,
  Grow,
  MenuItem,
  MenuList,
  Paper,
  Popper,
  TextField,
} from '@mui/material';
import FilterListIcon from '@mui/icons-material/FilterList';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      //   margin: theme.spacing(1),
      width: '25ch',
    },
  },
  paper: {
    marginRight: theme.spacing(2),
  },

  link: {
    display: 'flex',
    color: theme.palette.secondary,
    marginRight: theme.spacing(3),
  },
  icon: {
    marginRight: theme.spacing(0.5),
    width: 20,
    height: 20,
  },
}));

const SortAndSearch = ({ color, item }) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen(prevOpen => !prevOpen);
  };

  const handleClose = event => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  }

  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <Breadcrumbs
      className="searchAndSort"
      style={{
        display: 'flex',
        alignItems: 'cneter',
        justifyContent: 'flex-end',
        flexDirection: 'row',
        color: color,
      }}
      separator=" "
      aria-label="breadcrumb"
    >
      <form
        style={{ marginBottom: '10px', paddingBottom: '0px' }}
        className={classes.root}
        noValidate
        autoComplete="off"
      >
        <TextField
          style={{ margin: 0, color: 'white' }}
          id="standard-basic"
          label="Search"
          variant="standard"
        />
      </form>
      <div color="inherit" className={classes.link}>
        <div>
          <Button
            ref={anchorRef}
            aria-controls={open ? 'menu-list-grow' : undefined}
            aria-haspopup="true"
            onClick={handleToggle}
            style={{ color: 'white' }}
          >
            <FilterListIcon
              style={{ color: 'white' }}
              className={classes.icon}
            ></FilterListIcon>
            Filter
          </Button>
          <Popper
            open={open}
            anchorEl={anchorRef.current}
            role={undefined}
            transition
            disablePortal
          >
            {({ TransitionProps, placement }) => (
              <Grow
                {...TransitionProps}
                style={{
                  transformOrigin:
                    placement === 'bottom' ? 'center top' : 'center bottom',
                }}
              >
                <Paper style={{ width: 'auto' }}>
                  <ClickAwayListener onClickAway={handleClose}>
                    <MenuList
                      autoFocusItem={open}
                      id="menu-list-grow"
                      onKeyDown={handleListKeyDown}
                    >
                      {!item && (
                        <>
                          <MenuItem onClick={handleClose}>Filter 1</MenuItem>
                          <MenuItem onClick={handleClose}>Filter 2</MenuItem>
                          <MenuItem onClick={handleClose}>Filter 3</MenuItem>
                        </>
                      )}

                      {item?.map(value => {
                        return (
                          <MenuItem onClick={handleClose}>{value}</MenuItem>
                        );
                      })}
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Popper>
        </div>
      </div>
      {/* <div color="inherit" className={classes.link}>
        <BusinessIcon className={classes.icon} />
        Factories
      </div>
      <div color="inherit" className={classes.link}>
        <AppsIcon className={classes.icon} />
        Grid view
      </div> */}
    </Breadcrumbs>
  );
};

export default SortAndSearch;
