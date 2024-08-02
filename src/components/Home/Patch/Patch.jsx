import { Link } from "react-router-dom";
import css from "./Patch.module.css";
import { useEffect, useState } from "react";

const Patch = () => {
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    if (window.innerWidth >= 768) {
      setIsMobile(false);
    } else{
      setIsMobile(true);
    }
  });

  return (
    <div
      style={{
        backgroundImage: isMobile
          ? "linear-gradient(to right, #21222966, #1a1b2066), url('https://res.cloudinary.com/dfasgvfex/image/upload/v1714240906/web-banners/patchBack-mobile.png')"
                  : "linear-gradient(to right, #21222966, #1a1b2066), url('https://res.cloudinary.com/dfasgvfex/image/upload/v1712075741/web-banners/patchBack.jpg')",
          backgroundPosition: 'center'
      }}
      className={css.section}
    >
      <Link to={"/patch"}>
        <div className={css.patchNews}>
          <div>
            <h3 className={css.title}>Зміни оновлення 14.8</h3>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Patch;
