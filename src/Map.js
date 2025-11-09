import './Map.css';

function Map() {
  return (
    <div className="map-container">
      <a href={"https://www.google.com/maps/place/Hycroft+Manor/@49.2573517,-123.1371741,19z/data=!3m1!4b1!4m6!3m5!1s0x548673bfb3d3bc43:0x49c12b85b553ad72!8m2!3d49.2573508!4d-123.1365304!16s%2Fg%2F11d_tcn4ht"} target="_blank" rel="noopener noreferrer">
        <iframe
          title="Location Map"
          src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=Hycroft+Manor+Vancouver+BC&zoom=15`}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
        <div className="map-overlay">Click to open in Google Maps</div>
      </a>
    </div>
  );
}

export default Map;
