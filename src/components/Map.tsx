/*GLOBAL KAKAO */
import Script from 'next/script';
declare global {
  interface Window {
    kakao: any;
  }
}

export default function Map(){
    const loadKakaoMap = () => {
        window.kakao.maps.load(()=> {
          const mapContainer = document.getElementById('map');
          const mapOption = {
            center: new window.kakao.maps.LatLng(37.5519, 126.9918),
            level : 3,
          };
          new window.kakao.maps.Map(mapContainer, mapOption);
        });
      };
      
    return (
    <>
        <Script 
        strategy='afterInteractive'
        type='text/javascript'
        src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_MAP_CLIENT}&autoload=false`} 
        onReady={loadKakaoMap} />
  
        <div id="map" className='w-full h-screen'></div>
    </>

    )

}