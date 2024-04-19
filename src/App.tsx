import { MovieProvider } from "./contexts/movies";
import RoutesApp from "./routes/routes";

function App() {
  return (
    <MovieProvider>
      <RoutesApp />
    </MovieProvider>
  );
}

export default App;
