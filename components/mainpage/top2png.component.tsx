import Image from 'next/image';
import Topv2 from "/public/images/Topv2.png"

export default function Topv2page() {
    return (
      <div className="flex justify-center mx-auto bg-white container mt-8">
        <Image
        src={Topv2}
        alt=""
        />
    </div>
    );
  }