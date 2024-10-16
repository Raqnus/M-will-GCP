import Image from 'next/image';
import shoppng from "/public/images/shop.png"


export default function Shoppage() {
  return (
    <div className=" container justify-center mx-auto">
        <div className="text-slate-950 justify-center mx-auto text-xl text-center mt-12">
          <a href="https://hidamari-meal.stores.jp/">
            <Image
            src={shoppng}
            alt=""
            />
            </a>
        </div>
        <a href="">
        </a>
    </div>
  );
}
