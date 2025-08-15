"use client";

import { useEffect } from "react";
import * as styles from "./KakaoMap.css";
interface KakaoMapProps {
  address: string;
  latitude?: number;
  longitude?: number;
}
declare global {
  interface Window {
    kakao: any;
  }
}

const KakaoMap = ({ address, latitude, longitude }: KakaoMapProps) => {
  const apiKey = process.env.NEXT_PUBLIC_KAKAO_MAP_API_KEY;
  const { kakao } = window;
  useEffect(() => {
    if (!apiKey) return;

    const loadKakaoMap = () => {
      const container = document.getElementById("map");
      if (!container) return;
      if (latitude && longitude) {
        const coords = new kakao.maps.LatLng(latitude, longitude);
        const map = new kakao.maps.Map(container, {
          center: coords,
          level: 3,
        });
        new kakao.maps.Marker({
          position: coords,
          map: map,
        });
        return;
      }

      const geocoder = new window.kakao.maps.services.Geocoder();

      const searchAddress = address
        .replace(/\([^)]*\)/g, "")
        .split(",")[0]
        .trim();

      geocoder.addressSearch(searchAddress, (result, status) => {
        if (status === window.kakao.maps.services.Status.OK) {
          const coords = new kakao.maps.LatLng(result[0].y, result[0].x);
          const map = new kakao.maps.Map(container, {
            center: coords,
            level: 3,
          });
          new kakao.maps.Marker({
            position: coords,
            map: map,
          });
        }
      });
    };

    if (window.kakao?.maps) {
      window.kakao.maps.load(loadKakaoMap);
      return;
    }

    const script = document.createElement("script");
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${apiKey}&libraries=services&autoload=false`;
    script.async = true;

    script.onload = () => {
      window.kakao.maps.load(() => {
        loadKakaoMap();
      });
    };

    document.head.appendChild(script);

    return () => {
      const mapScript = document.querySelector(`script[src*="dapi.kakao.com"]`);
      if (mapScript) {
        document.head.removeChild(mapScript);
      }
    };
  }, [apiKey, latitude, longitude]);

  return (
    <div style={{ position: "relative", width: "100%", height: "16.1rem" }}>
      <div className={styles.address}>{address}</div>
      <div
        id="map"
        style={{
          width: "100%",
          height: "16.1rem",
          borderRadius: "1rem",
          border: "1px solid #E4E4E4",
          background: "#f5f5f5",
        }}
      />
    </div>
  );
};

export default KakaoMap;
