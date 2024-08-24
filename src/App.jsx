import Homepage from "./pages/Homepage";
import WeatherApp from "./pages/WeatherApp";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";

const NotFound = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        width: "100%",
        textAlign: "center",
      }}
    >
      <div>
        <h1 className="text-danger display-1 fw-bold">Error 404! Not Found!</h1>
        <p className="fw-medium display-5">You don miss road!</p>
      </div>
    </div>
  );
};

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route element={<Homepage />} path="/" />
        <Route element={<WeatherApp />} path="/weather" />
        <Route element={<NotFound />} path="*" />
      </Routes>
    </div>
  );
}

export default App;
