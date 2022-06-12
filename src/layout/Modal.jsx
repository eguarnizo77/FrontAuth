import React, {useContext, useState} from 'react';

import UserContext from "../context/User";

import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import Slide from '@mui/material/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function ContainerModal({children}) {
  const { isOpenModal, openModal } = useContext(UserContext);
  const [open, setOpen] = useState(isOpenModal);    
  
  const handleClose = () => openModal(false);

  return (
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}        
      >
        <DialogContent>
          {children}
        </DialogContent>
      </Dialog>
    </div>
  );
}

