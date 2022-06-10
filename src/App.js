import "./App.css";
import MainForm from "./components/MainForm";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import FormSummery from "./components/FormSummery";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainForm />} />
          <Route path="/FormSummery" element={<FormSummery />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
