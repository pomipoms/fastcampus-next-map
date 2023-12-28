import { StoreType } from "@/interface";
import stores from "@/pages/stores";
import { useEffect, Dispatch, SetStateAction, useCallback } from "react";

interface MarkerProps {
    map: any;
    stores: any[];
    setCurrentStore: Dispatch<SetStateAction<any>>;
}

export default function Markers({ map, stores, setCurrentStore, }: MarkerProps){
    const loadKakaoMarkers = useCallback(() => {
        if (map) {
        //Restaurant data MARKER
          stores?.map((store) => {

            var imageSrc = store?.bizcnd_code_nm 
                ? `/images/markers/${store?.bizcnd_code_nm}.png`
                :'/images/markers/default.png',
                imageSize = new window.kakao.maps.Size(40, 40),
                imageOption = { offset: new window.kakao.maps.Point(27, 69) };

            var markerImage = new window.kakao.maps.MarkerImage(
                imageSrc, imageSize, imageOption
            );

            var markerPosition = new window.kakao.maps.LatLng(
                store?.y_dnts,
                store?.x_cnts
            );

            // create marker
            var marker = new window.kakao.maps.Marker({
                position: markerPosition,
                image: markerImage,
            });

            marker.setMap(map);

            //Marker cursor over info window 
            var content = `<div class="infowindow">${store?.upso_nm}</div>`;
            var customOverlay = new window.kakao.maps.CustomOverlay({
                position: markerPosition,
                content: content,
                xAnchor: 0.6,
                yAnchor: 0.91,
            });

            //mouse over event 
            window.kakao.maps.event.addListener(marker, 'mouseover', function() {
                customOverlay.setMap(map);
            });

            //mouse out event 
            window.kakao.maps.event.addListener(marker, 'mouseout', function() {
                customOverlay.setMap(null);
            });

            //Save selected store 
            window.kakao.maps.event.addListener(marker, 'click', function() {
                setCurrentStore(store);

            });

          });
        }

    }, [map, setCurrentStore, stores]);
    useEffect(()=> {
        loadKakaoMarkers();
    }, [loadKakaoMarkers, map])
    
    return <>
    </>
}