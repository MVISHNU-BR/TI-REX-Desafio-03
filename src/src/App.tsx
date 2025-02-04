import "./App.css";
import { Button } from "@/components/ui/button";
import Header from "./components/header/Header.module";

function App() {
  return (
    <>
      <Header />
      <div>
        <h2 className="font-montserrat font-bold">another test</h2>
      </div>
      <div>
        <h1 className="bg-blue-200 text-3xl">teste de react</h1>

        <Button>Click me</Button>
      </div>
    </>
  );
}

export default App;
