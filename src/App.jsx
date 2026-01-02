import { useState } from "react";
import Home from "./pages/Home";
import SplashScreen from "./components/SplashScreen";
import Footer from "./components/Footer";   
import "./styles/theme.css";

function App() {
  const [showSplash, setShowSplash] = useState(true);

  if (showSplash) {
    
    return <SplashScreen onFinish={() => setShowSplash(false)} />;
  }

  return (
    <>
      <Home />
      <Footer />
    </>
  );
}

export default App;
