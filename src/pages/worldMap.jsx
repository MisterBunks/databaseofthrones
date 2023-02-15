// General Styling
import "./styles/general.scss";
// Specific styling
import "./styles/worldMap.scss";

function WorldMap() {
  return (
    <div className="content-container">
      <h1>World Map</h1>
      <div id="world-map"></div>
    </div>
  );
}

export default WorldMap;
