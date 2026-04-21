import { useEffect, useRef } from 'react';
import { MapPin, Radio } from 'lucide-react';
import 'leaflet/dist/leaflet.css';

// 4109 CR 2206, Greenville, TX 75402
const CENTER: [number, number] = [33.0979, -96.1521];
const RADIUS_MILES = 40;
const RADIUS_METERS = RADIUS_MILES * 1609.344;

export default function ServiceAreaMap() {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);

  useEffect(() => {
    if (!mapRef.current || mapInstanceRef.current) return;

    // Dynamically import leaflet to avoid SSR issues
    import('leaflet').then((L) => {
      const map = L.map(mapRef.current!, {
        center: CENTER,
        zoom: 9,
        zoomControl: true,
        scrollWheelZoom: false,
        attributionControl: true,
      });

      mapInstanceRef.current = map;

      // Dark-style tile layer (CartoDB Dark Matter style)
      L.tileLayer(
        'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png',
        {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/">CARTO</a>',
          subdomains: 'abcd',
          maxZoom: 19,
        }
      ).addTo(map);

      // Service area circle — crimson fill
      L.circle(CENTER, {
        radius: RADIUS_METERS,
        color: '#B22234',
        fillColor: '#B22234',
        fillOpacity: 0.12,
        weight: 2,
        dashArray: '8 6',
      }).addTo(map);

      // Custom marker icon
      const icon = L.divIcon({
        className: '',
        html: `
          <div style="
            width: 44px; height: 44px;
            background: #B22234;
            border-radius: 50% 50% 50% 0;
            transform: rotate(-45deg);
            border: 3px solid white;
            box-shadow: 0 4px 20px rgba(178,34,52,0.6);
          ">
            <div style="
              transform: rotate(45deg);
              display: flex; align-items: center; justify-content: center;
              width: 100%; height: 100%;
              color: white; font-size: 18px;
            ">🔑</div>
          </div>`,
        iconSize: [44, 44],
        iconAnchor: [22, 44],
        popupAnchor: [0, -48],
      });

      // Marker + popup
      L.marker(CENTER, { icon })
        .addTo(map)
        .bindPopup(
          `<div style="font-family: 'Helvetica Neue', sans-serif; min-width: 180px;">
            <div style="font-weight: 900; font-size: 14px; color: #0A192F; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 4px;">
              American Lock Service
            </div>
            <div style="font-size: 12px; color: #708090; margin-bottom: 6px;">
              4109 CR 2206, Greenville, TX 75402
            </div>
            <a href="tel:9032177828" style="font-weight: 700; color: #B22234; font-size: 13px; text-decoration: none;">
              📞 903.217.7828
            </a>
          </div>`,
          { maxWidth: 240 }
        )
        .openPopup();

      // Fit map to circle bounds with padding
      const circleBounds = L.circle(CENTER, { radius: RADIUS_METERS }).getBounds();
      map.fitBounds(circleBounds, { padding: [20, 20] });
    });

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  return (
    <div className="relative rounded-3xl overflow-hidden border-2 border-white/10 shadow-2xl h-80 w-full group">
      <div ref={mapRef} className="w-full h-full grayscale opacity-80 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-700" />
      
      {/* Overlay badge */}
      <div className="absolute bottom-4 left-4 z-[400] bg-white/90 backdrop-blur-md px-4 py-3 rounded-xl border border-white/20 flex items-center gap-2 pointer-events-none shadow-xl">
        <MapPin className="text-crimson w-4 h-4" />
        <div>
          <p className="text-navy font-black text-[10px] uppercase tracking-widest leading-tight">40-Mile Radius</p>
          <p className="text-slate-600 text-[10px] leading-tight font-medium">Greenville, TX</p>
        </div>
      </div>
    </div>
  );
}
