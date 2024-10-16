import Image from 'next/image';
import infopng from "/public/images/info.png"
import Instagrampng from "/public/images/m-willInstagram.png"

export default function Info() {
    return (
        <div className=" container justify-center mx-auto ">


            <div className="text-slate-950 justify-center mx-auto text-xl text-center mt-16 ">
                <Image
                src={infopng}
                alt=""
                height={250}
                width={500}
                />
            </div>

            <div className="lg:flex">
              
          <nav className="bg-red-50 lg:w-1/2">
            <div className="p-4  flex border-b border-stone-500 border-dotted text-xs lg:text-base">
                <a className="text-black">
                    2024年 10月26日 
                </a>
                <a href="https://hidamari-meal.stores.jp/items/6688ebabb4efa20a72ab20da" className=" text-amber-400 ml-14 hover:text-orange-500 duration-200 ">
                    新商品! やみつきジューシ―餃子 が登場!!
                </a>
            </div>
            <div className="p-4 border-b border-stone-500 border-dotted flex">
                <a className="text-black">
                   
                </a>
                <a href="" className=" text-black ml-32 hover:text-orange-500 duration-200 ">
                    ---coming soon---
                </a>
            </div>
            <div className="p-4 border-b border-stone-500 border-dotted flex">
                <a className="text-black">
                    
                </a>
                <a href="" className=" text-black ml-32 hover:text-orange-500 duration-200 text-center">
                    ---coming soon---
                </a>
            </div>
            
            
          </nav>
          
          <nav >
            <div className="lg:ml-36 lg:mt-6">
            <a href="https://t.co/WeVOkuR9iz" className="lg:w-1/2">
                <Image 
                src={Instagrampng}
                alt=""
                width={450}
                />

                
            </a>
            </div>
          </nav>
          </div>
      </div>
    );
  }
  