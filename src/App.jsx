import { useLocation } from "react-router";
import Router from "./routes/index";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation()
  return (
     <>
      <AnimatePresence>
        <Router key={location.pathname}/>
      </AnimatePresence>
     </>
  );
}

export default App;