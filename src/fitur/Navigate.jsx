// import { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const Navi = () => {
    const navigate = useNavigate();
    // const adiosRef = useRef(null); // Ref untuk teks "Previous"

    const handlePrevious = () => {
        navigate(-1); // Navigasi ke halaman sebelumnya
    };

    // useEffect(() => {
    //     const adiosText = adiosRef.current;
        
    //     if (adiosText) {
    //         const handleMouseOut = () => {
    //             adiosText.style.display = "none"; // Sembunyikan teks saat mouse keluar
    //         };

    //         const handleMouseOver = () => {
    //             adiosText.style.display = "inline ease-in duration-300"; // Tampilkan lagi saat mouse masuk
    //         };

    //         // Dapatkan tombol parent-nya
    //         const button = adiosText.closest("button");
            
    //         if (button) {
    //             button.addEventListener("mouseout", handleMouseOut);
    //             button.addEventListener("mouseover", handleMouseOver);
    //         }

    //         // Cleanup
    //         return () => {
    //             if (button) {
    //                 button.removeEventListener("mouseout", handleMouseOut);
    //                 button.removeEventListener("mouseover", handleMouseOver);
    //             }
    //         };
    //     }
    // }, []);

    return (
        <div className="fixed bottom-4 left-0 right-0 m-6">
            <div className="flex justify-between mx-auto rounded-full shadow-lg p-2">
                <button
                    onClick={handlePrevious}
                    className="flex items-center justify-center gap-2 px-4 h-12 rounded-full bg-blue-500 text-white hover:bg-blue-600 transition-colors"
                    aria-label="Previous page"
                >
                    <FaArrowLeft size={20} />
                    <span 
                        className="hidden sm:inline" id="adios"
                        // ref={adiosRef}  // Pasang ref di sini
                    >
                        Previous
                    </span>
                </button>
            </div>
        </div>
    );
};

export default Navi;