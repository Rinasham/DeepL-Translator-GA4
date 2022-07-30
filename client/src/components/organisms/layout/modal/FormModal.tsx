import Modal from "@mui/material/Modal";
import { Box, Button, Typography } from "@mui/material";
import styles from './Modal.module.css'

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

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className={styles.modalContainer}>
          <h2 className={styles.modalTitle}>
            これでいいですか？
          </h2>
          <p className={styles.modalDescription} >
            {answer}
          </p>
          <Button className={styles.confirmationButton}>OK</Button>
        </Box>
      </Modal>
    </div>
  );
};
