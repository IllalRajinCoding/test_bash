import { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Pastikan Anda mendaftarkan plugin ScrollTrigger hanya sekali
gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const [result, setResult] = useState("");
  const formSectionRef = useRef(null); // Ref untuk section pembungkus utama
  const titleRef = useRef(null);
  const inputRefs = useRef([]);
  // Menggunakan array untuk mereferensikan input secara dinamis
  const inputElements = useRef([]);

  // Fungsi untuk menambahkan ref ke array inputElements
  const addInputToRefs = (el) => {
    if (el && !inputElements.current.includes(el)) {
      inputElements.current.push(el);
    }
  };

  useEffect(() => {
    // Pastikan semua referensi sudah ada sebelum menjalankan animasi
    if (!formSectionRef.current || !titleRef.current || inputElements.current.length === 0) {
      return; // Jangan jalankan animasi jika elemen belum siap
    }

    // Inisialisasi Timeline GSAP untuk animasi sekuensial
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: formSectionRef.current,
        start: "top 75%", // Mulai animasi saat bagian atas section masuk 75% viewport
        toggleActions: "play none none none",
        once: true, // Hanya animasikan sekali
      },
    });

    // Animasi Judul
    tl.fromTo(
      titleRef.current,
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
      0 // Mulai di awal timeline
    );

    // Animasi Input Fields (dengan stagger)
    tl.fromTo(
      inputElements.current, // Target semua elemen input/textarea yang direferensikan
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        stagger: 0.15, // Efek tumpuk/berurutan
        ease: "power2.out",
      },
      0.3 // Mulai 0.3 detik setelah judul
    );

    // Animasi Button
    tl.fromTo(
      formSectionRef.current.querySelector("button"),
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
      },
      "<0.2" // Mulai 0.2 detik sebelum animasi input terakhir selesai (relative to previous animation)
    );

    // Cleanup function untuk menghentikan animasi saat komponen unmount
    return () => {
      tl.kill(); // Menghentikan timeline secara keseluruhan
      // Tidak perlu membunuh ScrollTrigger satu per satu jika timeline sudah di-kill
    };
  }, []); // [] agar efek hanya berjalan sekali setelah mount

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "4e32698a-4b7a-468b-b830-9fcb0a87155c");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully!");
        event.target.reset();
      } else {
        console.error("Error submitting form:", data); // Lebih baik pakai console.error
        setResult(data.message || "Failed to submit form.");
      }
    } catch (error) {
      console.error("Network or submission error:", error);
      setResult("An error occurred. Please try again.");
    }
   setTimeout(() => {
      setResult("");
    }, 3000);
  };

  return (
    <section className="py-15 lg:py-20 px-4" ref={formSectionRef}>
      <h2 ref={titleRef} className="my-20 text-center text-4xl">
        Contact Me
      </h2>
      <form onSubmit={onSubmit} className="max-w-3xl mx-auto space-y-8">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          ref={addInputToRefs} // Menggunakan fungsi addInputToRefs
          className="w-full p-4 bg-transparent border-b-2 border-neutral-700 text-neutral-200 placeholder-neutral-500 focus:outline-none focus:border-purple-500 transition-colors duration-300 text-lg"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          ref={addInputToRefs} // Menggunakan fungsi addInputToRefs
          className="w-full p-4 bg-transparent border-b-2 border-neutral-700 text-neutral-200 placeholder-neutral-500 focus:outline-none focus:border-purple-500 transition-colors duration-300 text-lg"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          required
          rows="6"
          ref={addInputToRefs} // Menggunakan fungsi addInputToRefs
          className="w-full p-4 bg-transparent border-b-2 border-neutral-700 text-neutral-200 placeholder-neutral-500 focus:outline-none focus:border-purple-500 transition-colors duration-300 text-lg resize-y"
        ></textarea>

        <button
          type="submit"
          className="block w-full lg:w-1/3 mx-auto px-8 py-4 mt-6 bg-purple-600 text-white font-semibold rounded-full shadow-lg hover:bg-purple-700 active:bg-purple-800 transition-all duration-300 text-lg relative overflow-hidden group"
        >
          <span className="relative z-10">Send Message</span>
          {/* Efek kilat pada button saat hover - pastikan keyframes CSS ini ada di global stylesheet Anda */}
          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-500 animate-shine"></span>
        </button>
      </form>
      <span className="block text-center mt-6 text-xl font-medium text-neutral-300">{result}</span>
    </section>
  );
}