import { Container } from "./styled";

const Todo = ({ toDoTask, handleRemove, handleListTask }: any) => {
  return (
    <Container onClick={handleListTask} onDoubleClick={handleRemove}>
      {/* <span onClick={handleListTask} onDoubleClick={handleRemove}>
        {toDoTask.title}
      </span> */}
      {toDoTask.title}
    </Container>
  );
};

export default Todo;
