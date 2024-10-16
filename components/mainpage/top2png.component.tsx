import Image from 'next/image';
import topv2 from "/public/images/Topv2.png"

export default function Topv2() {
    return (
      <div className="flex justify-center mx-auto bg-white container mt-8">
        <Image
        src={topv2}
        alt=""
        />
    </div>
    );
  }