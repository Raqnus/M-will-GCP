import company from "/public/images/company.png"
import Image from 'next/image';
import messagepng from "/public/images/message.png"

export default function companypage() {
    return (
      <div className="container justify-center mx-auto">
        <Image
        src={company}
        alt="companypng"
        ></Image>

        <div className="">
        <Image
        src={messagepng}
        alt=""
    
        />
        </div>
      </div>
    );
  }
  