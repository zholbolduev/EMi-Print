import Link from "next/link";
import "./Logo.scss";

const Logo = () => {
  return (
    <Link href="/" className="logo">
      <span>
        EM<span>i</span>
      </span>{" "}
      <span>Print</span>
    </Link>
  );
};

export default Logo;
