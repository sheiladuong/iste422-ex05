import * as React from 'react';
import { Box, Button, Typography, Modal } from '@mui/material';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    backgroundColor: '#101012',
    border: '0.5px solid #CCCCCC',
    borderRadius: '12px',
    boxShadow: 24,
    padding: 4,
};

export default function PeopleModal(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>{props.name}</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography variant="h4" component="h2">
            {props.name}
          </Typography>
          <Typography variant="h6" component="h2">
            {props.tagline}
          </Typography>
          <img src={props.imagePath} alt={props.name} style={{ width: '200px', height: 'auto' }} />
          {props.website && 
            <Typography variant="h6" component="h2">
              <b>Website:</b> <a href={props.website} target="_blank" rel="noopener noreferrer">{props.website}</a>
            </Typography>
          }
          {props.title && 
            <Typography variant="h6" component="h2">
              <b>Title:</b> {props.title}
            </Typography>
          }
          {props.interestArea && 
            <Typography variant="h6" component="h2">
              <b>Interest Area:</b> {props.interestArea}
            </Typography>
          }
          {props.office && 
            <Typography variant="h6" component="h2">
              <b>Office:</b> {props.office}
            </Typography>
          }
          {props.phone &&
            <Typography variant="h6" component="h2">
              <b>Phone:</b> {props.phone}
            </Typography>
          }
          {props.email &&
            <Typography variant="h6" component="h2">
              <b>Email:</b> {props.email}
            </Typography>
          }
          {props.twitter &&
            <Typography variant="h6" component="h2">
              <b>Twitter:</b> {props.twitter}
            </Typography>
          } 
          {props.facebook &&
            <Typography variant="h6" component="h2">
              <b>Facebook:</b> {props.facebook}
            </Typography>
          }
        </Box>
      </Modal>
    </div>
  );
}