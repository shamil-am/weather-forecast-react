import Header from "./components/Header";
import MainBody from "./components/MainBody";
import WeatherProvider from "./context/weatherContext";
/////
function App() {
  return (
    <div className="container">
      <WeatherProvider>
        <Header />
        <MainBody/>
      </WeatherProvider>
    </div>
  );
}

export default App;
