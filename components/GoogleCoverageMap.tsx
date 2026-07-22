"use client";

import { useEffect, useRef } from "react";
import { cities } from "@/lib/cities";

declare global {
  interface Window {
    google?: any;
    __woolaMapsCb?: () => void;
  }
}

/** Google Maps coverage map. Only rendered when NEXT_PUBLIC_GOOGLE_MAPS_API_KEY is set. */
export function GoogleCoverageMap({ height = 520, apiKey }: { height?: number; apiKey: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const init = () => {
      if (!ref.current || !window.google) return;
      const map = new window.google.maps.Map(ref.current, {
        center: { lat: 49.25, lng: -122.8 },
        zoom: 10,
        mapTypeControl: false,
        streetViewControl: false,
        fullscreenControl: false,
        styles: [
          { featureType: "poi", stylers: [{ visibility: "off" }] },
          { featureType: "transit", stylers: [{ visibility: "off" }] },
        ],
      });
      const bounds = new window.google.maps.LatLngBounds();
      const info = new window.google.maps.InfoWindow();
      cities.forEach((c) => {
        const marker = new window.google.maps.Marker({
          position: { lat: c.lat, lng: c.lng },
          map,
          title: c.name,
          icon: {
            path: window.google.maps.SymbolPath.CIRCLE,
            scale: c.slug === "coquitlam" ? 9 : 6,
            fillColor: c.slug === "coquitlam" ? "#0A0A09" : "#00788C",
            fillOpacity: 1,
            strokeColor: "#FFFFFF",
            strokeWeight: 2,
          },
        });
        marker.addListener("click", () => {
          info.setContent(
            `<div style="font-family:Poppins,system-ui,sans-serif;min-width:160px">
              <div style="font-weight:700">${c.name}</div>
              <a href="/service-areas/${c.slug}" style="color:#00788C;font-weight:600;font-size:12px">
                ${c.name} services →
              </a>
            </div>`
          );
          info.open(map, marker);
        });
        bounds.extend(marker.getPosition());
      });
      map.fitBounds(bounds, 40);
    };

    if (window.google?.maps) {
      init();
      return;
    }
    window.__woolaMapsCb = init;
    const existing = document.querySelector<HTMLScriptElement>("script[data-woola-maps]");
    if (!existing) {
      const s = document.createElement("script");
      s.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=__woolaMapsCb`;
      s.async = true;
      s.dataset.woolaMaps = "1";
      document.head.appendChild(s);
    }
  }, [apiKey]);

  return <div ref={ref} className="rounded-md border hairline overflow-hidden" style={{ height }} />;
}
