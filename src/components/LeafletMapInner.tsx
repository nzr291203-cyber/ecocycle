"use client";

import { useEffect, useMemo } from "react";
import L, { type LatLngExpression } from "leaflet";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import type { PickupLocation } from "@/data/pickupLocations";
import "leaflet/dist/leaflet.css";

export type LeafletMapInnerProps = {
  locations: PickupLocation[];
  selectedId: string | null;
  onSelect: (id: string) => void;
};

const DEFAULT_CENTER: LatLngExpression = [-6.905, 106.89];
const DEFAULT_ZOOM = 10;

function createPinIcon(active: boolean) {
  return L.divIcon({
    className: "ecocycle-pin",
    html: `<div class="relative flex h-11 w-11 items-center justify-center">
      <span class="absolute inline-flex h-9 w-9 rounded-full ${
        active ? "bg-emerald-500/30" : "bg-transparent"
      }"></span>
      <svg viewBox="0 0 24 24" class="relative h-9 w-9 drop-shadow-md" fill="${
        active ? "#065f46" : "#059669"
      }" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M12 2.4c-3.7 0-6.6 2.9-6.6 6.6 0 4.7 6.6 12.6 6.6 12.6s6.6-7.9 6.6-12.6c0-3.7-2.9-6.6-6.6-6.6z"/>
        <circle cx="12" cy="9" r="2.5" fill="white"/>
      </svg>
    </div>`,
    iconSize: [44, 46],
    iconAnchor: [22, 44],
    popupAnchor: [0, -40],
  });
}

function MapController({
  locations,
  selectedId,
}: Pick<LeafletMapInnerProps, "locations" | "selectedId">) {
  const map = useMap();

  useEffect(() => {
    const timer = window.setTimeout(() => map.invalidateSize(), 250);
    return () => window.clearTimeout(timer);
  }, [map]);

  useEffect(() => {
    if (locations.length === 0) return;

    const bounds = L.latLngBounds(
      locations.map((location) => location.koordinat),
    );
    map.fitBounds(bounds, { padding: [48, 48], maxZoom: 14 });
  }, [locations, map]);

  useEffect(() => {
    if (!selectedId) return;

    const target = locations.find((location) => location.id === selectedId);
    if (!target) return;

    map.flyTo(target.koordinat, 15, { duration: 0.9 });
  }, [selectedId, locations, map]);

  return null;
}

export default function LeafletMapInner({
  locations,
  selectedId,
  onSelect,
}: LeafletMapInnerProps) {
  const selectedLocation = useMemo(
    () => locations.find((location) => location.id === selectedId) ?? null,
    [locations, selectedId],
  );

  const icons = useMemo(
    () => ({
      inactive: createPinIcon(false),
      active: createPinIcon(true),
    }),
    [],
  );

  return (
    <div className="relative h-full w-full">
      <MapContainer
        center={DEFAULT_CENTER}
        zoom={DEFAULT_ZOOM}
        scrollWheelZoom={false}
        className="h-full w-full"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          maxZoom={19}
        />
        <MapController locations={locations} selectedId={selectedId} />

        {locations.map((location) => {
          const isActive = location.id === selectedId;

          return (
            <Marker
              key={`${location.id}-${isActive ? "active" : "idle"}`}
              position={location.koordinat}
              icon={isActive ? icons.active : icons.inactive}
              eventHandlers={{ click: () => onSelect(location.id) }}
              zIndexOffset={isActive ? 1000 : 0}
            >
              <Popup>
                <strong className="block text-sm text-slate-900">
                  {location.namaTitik}
                </strong>
                <span className="mt-1 block text-xs text-slate-500">
                  {location.alamatLengkap}
                </span>
                <span className="mt-2 block text-xs font-semibold text-emerald-700">
                  {location.jadwalPenjemputan}
                </span>
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>

      {selectedLocation ? (
        <div className="pointer-events-none absolute inset-x-3 bottom-3 z-[500] rounded-2xl border border-emerald-100 bg-white/95 p-4 shadow-xl shadow-slate-900/10 backdrop-blur">
          <p className="text-[11px] font-bold uppercase tracking-wide text-emerald-700">
            Titik dipilih
          </p>
          <p className="mt-1 text-sm font-bold text-slate-900">
            {selectedLocation.namaTitik}
          </p>
          <p className="mt-0.5 text-xs text-slate-500">
            {selectedLocation.jadwalPenjemputan}
          </p>
        </div>
      ) : null}
    </div>
  );
}
