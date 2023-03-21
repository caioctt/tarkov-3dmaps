import { LatLngTuple, MapOptions } from 'leaflet';
import {
  MapContainer,
  MapContainerProps,
  useMap,
  Marker,
  Popup,
  TileLayer,
} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

type LeafletMapProps = MapContainerProps &
  MapOptions & {
    url: string;
    position?: LatLngTuple;
  };

function ComponentResize() {
  const map = useMap();

  setTimeout(() => {
    map.invalidateSize();
  }, 0);

  return null;
}

export default function LeafletMap({
  url,
  position,
  center,
  zoom,
  minZoom,
  maxZoom,
  maxBounds,
  maxBoundsViscosity,
}: LeafletMapProps) {
  const chosenPosition: LatLngTuple = position ?? [0, 0];

  return (
    <div>
      <MapContainer
        style={{
          height: '94.5vh',
          width: '100vw',
        }}
        center={center ?? chosenPosition}
        zoom={zoom ?? 2.5}
        maxZoom={maxZoom ?? 5}
        minZoom={minZoom ?? 2.5}
        maxBoundsViscosity={maxBoundsViscosity ?? 1}
        maxBounds={maxBounds}
        scrollWheelZoom
      >
        <ComponentResize />
        <TileLayer attribution="Map by RE3MR : reemr.se" url={url} />
        <Marker position={chosenPosition}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
