"use client";

import { useEffect, useMemo } from "react";
import { MapContainer, TileLayer, CircleMarker, Tooltip, Marker, Popup, AttributionControl } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import Link from "next/link";
import { cities } from "@/lib/cities";

const HQ: [number, number] = [49.2838, -122.7932];

const hqIcon = L.divIcon({
  className: "",
  html: `
    <div style="position: relative; transform: translate(-50%, -100%);">
      <div style="width: 18px; height: 18px; border-radius: 999px; background: #00788C; box-shadow: 0 0 0 6px rgba(0,120,140,0.18), 0 2px 8px rgba(0,0,0,0.25); border: 2px solid #fff;"></div>
      <div style="position: absolute; top: 22px; left: 50%; transform: translateX(-50%); white-space: nowrap; font: 600 11px 'Poppins',system-ui,sans-serif; background: #0A0A09; color: #fff; padding: 4px 8px; border-radius: 4px; letter-spacing: 0.04em;">WOOLA HQ · COQUITLAM</div>
    </div>
  `,
  iconSize: [18, 18],
  iconAnchor: [9, 9],
});

export function CoverageMap({ height = 520 }: { height?: number }) {
  // Compute bounds so the map auto-fits all cities + HQ
  const bounds = useMemo(() => {
    const lats = cities.map((c) => c.lat).concat(HQ[0]);
    const lngs = cities.map((c) => c.lng).concat(HQ[1]);
    return [
      [Math.min(...lats), Math.min(...lngs)],
      [Math.max(...lats), Math.max(...lngs)],
    ] as [[number, number], [number, number]];
  }, []);

  // Ensure default Leaflet marker icons resolve under Next's bundler (we only use divIcons + circleMarkers, but keep this safe)
  useEffect(() => {
    delete (L.Icon.Default.prototype as unknown as { _getIconUrl?: () => string })._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
      iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
      shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
    });
  }, []);

  return (
    <div
      className="relative overflow-hidden rounded-md border hairline"
      style={{ height }}
    >
      <MapContainer
        bounds={bounds}
        boundsOptions={{ padding: [40, 40] }}
        scrollWheelZoom={false}
        attributionControl={false}
        style={{ height: "100%", width: "100%", background: "#F2F2EE" }}
      >
        <AttributionControl prefix={false} position="bottomright" />
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>'
          subdomains="abcd"
          maxZoom={19}
        />

        {/* City pins */}
        {cities.map((c) => {
          if (c.slug === "coquitlam") return null;
          return (
            <CircleMarker
              key={c.slug}
              center={[c.lat, c.lng]}
              radius={7}
              pathOptions={{
                color: "#0A0A09",
                weight: 1.5,
                fillColor: "#ffffff",
                fillOpacity: 1,
              }}
              eventHandlers={{
                mouseover: (e) => e.target.setStyle({ fillColor: "#00788C", color: "#00788C", weight: 2 }),
                mouseout: (e) => e.target.setStyle({ fillColor: "#ffffff", color: "#0A0A09", weight: 1.5 }),
              }}
            >
              <Tooltip direction="top" offset={[0, -6]} opacity={1} permanent={false}>
                <span style={{ fontFamily: "Poppins, system-ui, sans-serif", fontWeight: 600 }}>
                  {c.name}
                </span>
                <span style={{ color: "#6F6F6B", marginLeft: 6, fontSize: 11 }}>
                  · {c.driveTimeMin} min from HQ
                </span>
              </Tooltip>
              <Popup>
                <div style={{ fontFamily: "Poppins, system-ui, sans-serif", minWidth: 180 }}>
                  <div style={{ fontWeight: 700, fontSize: 14, color: "#0A0A09" }}>{c.name}</div>
                  <div style={{ fontSize: 11, color: "#6F6F6B", margin: "2px 0 8px" }}>
                    {c.region} · {c.population.toLocaleString()} residents
                  </div>
                  <div style={{ fontSize: 12, color: "#3A3A38", marginBottom: 8 }}>
                    Daily Woola routes from Coquitlam HQ
                  </div>
                  <Link
                    href={`/service-areas/${c.slug}`}
                    style={{
                      display: "inline-block",
                      fontSize: 12,
                      fontWeight: 600,
                      color: "#00788C",
                      textDecoration: "none",
                    }}
                  >
                    Coverage detail →
                  </Link>
                </div>
              </Popup>
            </CircleMarker>
          );
        })}

        {/* HQ marker (rendered last so it sits on top) */}
        <Marker position={HQ} icon={hqIcon}>
          <Popup>
            <div style={{ fontFamily: "Poppins, system-ui, sans-serif" }}>
              <div style={{ fontWeight: 700, fontSize: 14, color: "#0A0A09" }}>
                Woola Services Group HQ
              </div>
              <div style={{ fontSize: 11, color: "#6F6F6B", margin: "2px 0 4px" }}>
                #110 – 42 Fawcett Rd., Coquitlam, BC V3K 6X9
              </div>
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default CoverageMap;
