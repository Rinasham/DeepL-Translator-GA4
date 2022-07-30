import Modal from "@mui/material/Modal";
import { Box, Button } from "@mui/material";
import styles from './Modal.module.css'
import {Answers} from '../../../../interface/translator'

type FormModalProps = {
  open: boolean;
  handleClose: () => void;
  onClickConfirmation: () => void;
  language: string;
  answers: Answers;
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
  const { open, handleClose, answers, onClickConfirmation, language } = props;

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
            {language === 'japanese' ? 'これでいいですか？' : 'Are you sure?'}
            
          </h2>
          <p className={styles.modalDescription} >
            {language === 'japanese' ? answers.ja_answer : answers.en_answer}
          </p>
          <Button className={styles.confirmationButton}
          onClick={onClickConfirmation}
          >OK</Button>
        </Box>
      </Modal>
    </div>
  );
};
