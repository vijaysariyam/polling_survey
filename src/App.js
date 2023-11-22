import Router from "./routes";
import ThemeProvider from "./theme";
import SnackBar from "./components/SnackBar";

function App() {
  return (
    <ThemeProvider>
      <SnackBar />
      <Router />
    </ThemeProvider>
  );
}

export default App;
