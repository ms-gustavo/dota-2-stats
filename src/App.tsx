import HomePage from "./features/home/HomePage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PlayerDetailsPage from "./features/player/PlayerDetailsPage";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="bg-background text-lightText min-h-screen pt-20 pb-20">
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/player/:accountId" element={<PlayerDetailsPage />} />
          </Routes>
        </Router>
      </div>
      <Footer />
    </>
  );
}

export default App;
