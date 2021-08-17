import React from 'react'
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function ConfirmDialogBox(props) {
    const { confirmDialog, setConfirmDialog } = props;

    return (
        <div>
      {/* <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Slide in alert dialog
      </Button> */}
      <Dialog
        open={confirmDialog.isOpen}
        TransitionComponent={Transition}
        keepMounted
        // onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle
          // style={{ backgroundColor: "#f7dfdf" }}
          id="alert-dialog-slide-title"
        >
          {confirmDialog.title}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
          {confirmDialog.subTitle}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
           onClick={() => setConfirmDialog({ ...confirmDialog, isOpen: false })} 
           color="primary"
          >
            No
          </Button>
          <Button onClick={confirmDialog.onConfirm} color="primary">
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </div>
    )
}

export default ConfirmDialogBox
 