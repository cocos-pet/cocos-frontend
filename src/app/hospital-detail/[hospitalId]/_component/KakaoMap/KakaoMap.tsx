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
    console.log("KAKAO API KEY:", apiKey);
    if (!apiKey) {
      console.error("Kakao Map API key is not defined");
      return;
    }

    const loadKakaoMap = () => {
      const container = document.getElementById("map");
      if (!container) return;

      const options = {
        center: new kakao.maps.LatLng(latitude, longitude),
        level: 3,
      };
      const map = new kakao.maps.Map(container, options);
      const markerPosition = new kakao.maps.LatLng(latitude, longitude);
      const marker = new kakao.maps.Marker({
        position: markerPosition,
      });
      marker.setMap(map);
    };

    // 이미 스크립트가 로드되어 있는 경우
    if (window.kakao?.maps) {
      window.kakao.maps.load(loadKakaoMap);
      return;
    }

    // 스크립트 로드
    const script = document.createElement("script");
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${apiKey}&autoload=false`;
    script.async = true;

    script.onload = () => {
      window.kakao.maps.load(() => {
        loadKakaoMap();
      });
    };

    document.head.appendChild(script);

    return () => {
      // cleanup
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
