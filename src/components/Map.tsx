import { MapContainer, TileLayer } from "react-leaflet";

const Map = () => {
  const position = [50.04020271304782, 20.009689839547978];
  return (
    <MapContainer
      zoom={13}
      scrollWheelZoom={true}
      center={{ lat: position[0], lng: position[1] }}
      zoomControl={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://carto.com/attributions">CartoDB</a>'
        url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png"
      />
    </MapContainer>
  );
};
export default Map;
