import styles from "./App.module.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./pages/main";

function App() {
  return (
    <div className={styles.appContainer}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </Router>
      {/* <h1 class="font-village text-xl">Village Font</h1>
      <h1 class="font-upheaval text-xl">Upheaval Font</h1>
      <h1 class="font-birch text-xl">Birch Font</h1>
      <h1 class="font-blackoak text-xl">Blackoak Font</h1> */}
    </div>
  );
}

export default App;
