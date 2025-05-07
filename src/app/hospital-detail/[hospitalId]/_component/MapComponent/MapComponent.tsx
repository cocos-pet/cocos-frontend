import { useEffect, useRef } from "react";

const MapComponent = ({ address = "광주광역시 북구 양일로305번길 8 (일곡동)" }) => {
  const mapEl = useRef(null);

  useEffect(() => {
    // 카카오 스크립트가 이미 있으면 추가하지 않음
    if (!window.kakao) {
      const script = document.createElement("script");
      script.src = "//dapi.kakao.com/v2/maps/sdk.js?appkey=여기에_본인_카카오_키&libraries=services";
      script.async = true;
      document.head.appendChild(script);

      script.onload = () => {
        createMap();
      };
    } else {
      createMap();
    }

    function createMap() {
      if (!window.kakao || !mapEl.current) return;
      const geocoder = new window.kakao.maps.services.Geocoder();
      geocoder.addressSearch(address, function (result, status) {
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
    }
    // eslint-disable-next-line
  }, [address]);

  return (
    <div
      ref={mapEl}
      style={{ width: "100%", height: "180px", borderRadius: "1rem", background: "#f5f5f5" }}
    />
  );
};

export default MapComponent;
