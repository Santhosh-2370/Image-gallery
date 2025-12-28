import Gallery from "./components/Gallery";
import "./App.css";

const App = () => {
  return (
    <>
      <h1 className="heading">Image Gallery</h1>

      <div className="gallery-wrapper">
        <Gallery/>
        <Gallery/>
        <Gallery/>
        <Gallery/>
        <Gallery/>
      </div>
    </>
  );
};

export default App;
