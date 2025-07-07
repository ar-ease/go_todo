import "./index.css";
import { Button, Container } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import { TodoForm } from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  return (
    <>
      <Navbar />
      <Container>
        <TodoForm />
        <TodoList />
      </Container>
    </>
  );
}

export default App;
