import "./index.css";
import { Container } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import { TodoForm } from "./components/TodoForm";
import TodoList from "./components/TodoList";

export const BASE_URL =
  import.meta.env.MODE === "development" ? "http://localhost:4000/api" : "/api";
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
