// import { useEffect, useRef } from "react";
// import './modal.css';


// export function Modal({
//   children,
//   isOpen,
//   onClose,
//   autoClose = false,
//   autoCloseDuration = 3000,
//   overlayClickClose = true,
//   showCloseButton = false,
//   animation = "slideIn",
//   className = "",
//   overlayClassName = "",
//   closeButtonClassName = "",
// }) {
//   const modalRef = useRef(null);

//   useEffect(() => {
//     if (isOpen && autoClose) {
//       const timer = setTimeout(() => {
//         onClose();
//       }, autoCloseDuration);
//       return () => clearTimeout(timer);
//     }
//   }, [isOpen, autoClose, autoCloseDuration, onClose]);

//   useEffect(() => {
//     if (isOpen) {
//       document.body.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = "";
//     }

//     return () => {
//       document.body.style.overflow = "";
//     };
//   }, [isOpen]);

//   if (!isOpen) return null;

//   const handleOverlayClick = (e) => {
//     if (overlayClickClose && e.target === e.currentTarget) {
//       onClose();
//     }
//   };

//   const getAnimationClass = () => {
//     switch (animation) {
//       case "fade":
//         return "animate-fadeIn";
//       case "slideUp":
//         return "animate-slideUp";
//       case "slideDown":
//         return "animate-slideDown";
//       case "scale":
//         return "animate-scaleIn";
//       default:
//         return "animate-slideIn";
//     }
//   };

//   return (
//     <div className="fixed inset-0 z-50">
//       {/* Overlay */}
//       <div
//         className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 ${getAnimationClass()} ${overlayClassName}`}
//         onClick={handleOverlayClick}
//       />

//       {/* Modal box */}
//       <div
//         className="fixed inset-0 flex items-center justify-center z-50 px-4"
//         ref={modalRef}
//       >
//         <div
//           className={`bg-neutral-900/90 rounded-2xl shadow-xl 
//             max-w-md w-full p-8 relative border border-neutral-800
//             transform transition-all duration-300 ease-out
//             ${getAnimationClass()} ${className}`}
//         >
//           {showCloseButton && (
//             <button
//               onClick={onClose}
//               className={`absolute top-4 right-4 text-neutral-400 hover:text-white transition-colors ${closeButtonClassName}`}
//               aria-label="Close modal"
//             >
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-6 w-6"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M6 18L18 6M6 6l12 12"
//                 />
//               </svg>
//             </button>
//           )}

//           {/* Modal content */}
//           <div className="text-center">
//             <div className="bg-neutral-800/50 rounded-xl px-6 py-4 backdrop-blur-sm">
//               {children}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Modal;
