"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    kakao: any;
  }
}

const KakaoMap = () => {
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
            center: new window.kakao.maps.LatLng(33.450701, 126.570667),
            level: 3,
          };

          new window.kakao.maps.Map(container, options);
        });

      }
    };

    document.head.appendChild(script);
  }, [apiKey]);

  return (
    <div
      id="map"
      style={{
        width: "100%",
        height: "16.1rem",
        borderRadius: "1rem",
        border: "1px solid #E4E4E4",

      }}
    />
  );
};

export default KakaoMap;