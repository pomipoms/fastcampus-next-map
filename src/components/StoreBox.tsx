import { SetStateAction, Dispatch } from "react";
import Image from 'next/image';
import { AiOutlineClose, AiOutlineInfoCircle, AiOutlineCheck, AiOutlinePhone } from "react-icons/ai";
import { HiOutlineMapPin} from 'react-icons/hi2';

interface StoreBoxProps {
    store: any;
    setStore: Dispatch<SetStateAction<any>>;
}

export default function StoreBox( {store, setStore}: StoreBoxProps ) {
    return (
    <div className="fixed transition ease-in-out delay-150 inset-x-0 mx-auto bottom-20 rounded-lg shadow-lg max-w-sm md:max-w-xl z-10 w-full bg-white">
        {store && (
            <>
            <div className="p-8">
                <div className="flex justify-between items-start ">
                    <div className="flex gap-4 items-center">
                    <Image 
                src={
                    store?.bizcnd_code_nm 
                    ? `/images/markers/${store?.bizcnd_code_nm}.png` : 
                    "/images/markers/default.png"
                }
                width = {40}
                height = {40}
                alt = "icon image" />
                <div>
                    <div className="font-semibold">{store?.upso_nm}</div>
                    <div className="text-sm">{store?.cob_code_nm}</div>
                </div>
            </div>
                    <button type="button" onClick={() => setStore(null)}>
                        <AiOutlineClose/>
                    </button>
                </div>

                    <div className="mt-6 flex gap-2 items-center">
                        <HiOutlineMapPin/>
                        {store?.rdn_code_nm}
                    </div>
                    <div className="mt-2 flex gap-2 items-center">
                        <AiOutlinePhone/>
                        {store?.tel_no}
                    </div>
                    <div className="mt-2 flex gap-2 items-center">
                        <AiOutlineInfoCircle/>
                        {store?.crtfc_gbn_nm}
                    </div>
                    <div className="mt-2 flex gap-2 items-center">
                        <AiOutlineCheck/>
                        {store?.bizcnd_code_nm}
                    </div>
                </div>
                <button type="button" onClick={()=> window.alert('under construction')}
                        className=" w-full bg-blue-700 hover:bg-blue-900 focus:bg-blue-500 text-white font-semibold rounded-b-md py-3">
                            Detail 
                </button>

        </>           
        )}

    </div>
    );
}