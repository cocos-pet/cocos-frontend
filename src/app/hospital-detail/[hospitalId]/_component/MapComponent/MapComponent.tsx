import { useEffect, useRef } from "react";
import * as styles from "./MapComponent.css";

interface MapComponentProps {
  address: string;
}

const MapComponent = ({ address }: MapComponentProps) => {
  const mapEl = useRef(null);

  useEffect(() => {
    const loadKakaoMapScript = () => {
      return new Promise((resolve) => {
        const script = document.createElement("script");
        script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_MAP_API_KEY}&libraries=services&autoload=false`;
        script.async = true;

        script.onload = () => {
          window.kakao.maps.load(() => {
            resolve(undefined);
          });
        };

        document.head.appendChild(script);
      });
    };

    const initializeMap = async () => {
      if (!window.kakao) {
        await loadKakaoMapScript();
      }

      if (!mapEl.current) return;

      const geocoder = new window.kakao.maps.services.Geocoder();

      geocoder.addressSearch(address, (result, status) => {
        if (status === window.kakao.maps.services.Status.OK) {
          const coords = new window.kakao.maps.LatLng(result[0].y, result[0].x);
          const map = new window.kakao.maps.Map(mapEl.current, {
            center: coords,
            level: 3,
          });
          new window.kakao.maps.Marker({
            map: map,
            position: coords,
          });
        }
      });
    };

    initializeMap();

    return () => {
      const mapScript = document.querySelector('script[src*="dapi.kakao.com"]');
      if (mapScript) {
        document.head.removeChild(mapScript);
      }
    };
  }, [address]);

  return (
    <div className={styles.mapWrapper}>
      <div ref={mapEl} className={styles.mapContainer} />
      <div className={styles.addressContainer}>
        <span className={styles.addressText}>{address}</span>
      </div>
    </div>
  );
};

export default MapComponent;
