import React from 'react'
import liminaLogo from '../assets/lumina-logo.png'
import luminaText from '../assets/lumina-text.png';

const Preloader = () => {
  return (
    <div className="fixed inset-0 z-9999 flex items-center justify-center bg-black/80  backdrop:blur-2xl">
      <div className="flex flex-col items-center gap-5">
        {/* ========== loader ========== */}
        <div className=" relative flex justify-center items-center">
          {/* ------- outer ring ------- */}
          <div className="h-20 w-20 rounded-full border-4 border-slate-200"></div>

          {/* --------- animated spinner ring -------- */}
          <div className=" absolute h-20 w-20 rounded-full border-4 border-transparent border-t-[#22709370] animate-spin"></div>

          {/* --------- cente pulsing dot ------------  */}
          <img
            className=" absolute w-10 h-10 object-cover animate-pulse "
            src={liminaLogo}
          />
        </div>

        <div>
          <img
            className="w-30 animate-pulse"
            src={luminaText}
          />
        </div>
      </div>
    </div>
  );
}

export default Preloader