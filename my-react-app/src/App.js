import styles from "./App.module.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./pages/main";
import Projects from "./pages/projects";
import Artworks from "./pages/artworks";
import Contacts from "./pages/contacts";

function App() {
  return (
    <div className={styles.appContainer}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/main" element={<Main />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/artworks" element={<Artworks />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </Router>
      {/* <h1 class="font-village text-xl">Village Font</h1>
      <h1 class="font-upheaval text-xl">Upheaval Font</h1>
      <h1 class="font-blackoak text-xl">Blackoak Font</h1>
      <h1 class="font-cotton text-xl">Cotton Cloud</h1>
      <h1 class="font-omori text-xl">Omori Nice</h1>
      <h1 class="font-oxygen text-xl">Oxygen</h1>
      <h1 class="font-greycliff text-xl">Greycliff</h1>
      <h1 class="font-quicksand text-xl">Quicksand</h1>
      <h1 class="font-montserrat text-xl">Montserrat</h1>
      <h1 class="font-sacramento text-xl">sacramento</h1> */}
    </div>
  );
}

export default App;
