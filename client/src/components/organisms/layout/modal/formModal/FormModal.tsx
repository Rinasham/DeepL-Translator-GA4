import Modal from "@mui/material/Modal";
import { Box, Button, Typography } from "@mui/material";

type FormModalProps = {
  open: boolean;
  handleClose: () => void;
  answer: string;
};

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export const FormModal = (props: FormModalProps) => {
  const { open, handleClose, answer } = props;
  console.log(answer);

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            これでいいですか？
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {answer}
          </Typography>
          <Button>OK</Button>
        </Box>
      </Modal>
    </div>
  );
};
