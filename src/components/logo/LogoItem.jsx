import Link from "next/link";
import LogoWhite2 from "../../../public/assets/imgs/logo/logo1.png";
import LogoBlack from "../../../public/assets/imgs/logo/logo2.png";
import Image from "next/image";

export default function LogoItem() {
  return (
    <>
      <div className="header__logo-2">
        <Link href={"/"} className="logo-dark">
          <Image
            priority
            width={156}
            height={45}
            src={LogoBlack}
            alt="Site Logo"
          />
        </Link>
        <Link href={"/"} className="logo-light">
          <Image
            priority
            width={160}
            height={50}
            src={LogoWhite2}
            alt="Site Logo"
          />
        </Link>
      </div>
    </>
  );
}
