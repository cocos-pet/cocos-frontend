"use client";

import { useEffect } from "react";
import * as styles from "./KakaoMap.css";
interface KakaoMapProps {
  address: string;
  latitude: number;
  longitude: number;
}
declare global {
  interface Window {
    kakao: any;
  }
}

const KakaoMap = ({ address, latitude, longitude }: KakaoMapProps) => {
  const apiKey = process.env.NEXT_PUBLIC_KAKAO_MAP_API_KEY;

  useEffect(() => {
    if (!apiKey) {
      return;
    }

    const script = document.createElement("script");
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${apiKey}&autoload=false`;
    script.async = true;

    script.onload = () => {
      if (window.kakao && window.kakao.maps) {
        window.kakao.maps.load(() => {
          const container = document.getElementById("map");
          if (!container) {
            return;
          }

          const options = {
            center: new window.kakao.maps.LatLng(latitude, longitude),
            level: 3,
          };
          const map = new window.kakao.maps.Map(container, options);
          const markerPosition = new window.kakao.maps.LatLng(latitude, longitude);
          const marker = new window.kakao.maps.Marker({
            position: markerPosition,
          });
          marker.setMap(map);
        });
      }
    };

    document.head.appendChild(script);
  }, [apiKey]);

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
        }}
      />
    </div>
  );
};

export default KakaoMap;
