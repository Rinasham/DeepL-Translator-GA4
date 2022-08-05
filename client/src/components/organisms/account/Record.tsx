import styles from "./Account.module.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { DoneQuestion } from "./../../../interface/account";
import CreateIcon from "@mui/icons-material/Create";

type RecordProps = {
  questions: DoneQuestion[];
  showTableDetail: (idx: number, question: DoneQuestion) => void;
};

export default function Record(props: RecordProps) {
  const { questions, showTableDetail } = props;

  return (
    <TableContainer component={Paper} style={{ marginBottom: "3em" }}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow
            style={{
              backgroundColor: "#d1bfb2",
              color: "#384449",
            }}
          >
            <TableCell className={styles.cellQuestion}>QUESTION</TableCell>
            <TableCell className={styles.cellQuestion}></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {questions.map((question, idx) => (
            <TableRow
              key={idx}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell
                component="th"
                scope="question"
                className={styles.cellQuestion}
              >
                {question.question}
              </TableCell>
              <TableCell align="right">
                <CreateIcon
                  style={{ fontSize: "20px" }}
                  className={styles.pencilIcon}
                  onClick={() => {
                    showTableDetail(idx, question);
                  }}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
