import { useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";
import TypingEffect from "../fitur/TypingEffect";
import { motion } from "framer-motion";

const Homepage = () => {
    const navigate = useNavigate();
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        // Set canvas size
        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resizeCanvas();

        // Particle array
        const particles = [];
        const particleCount = 25; // Jumlah partikel lebih sedikit untuk kesan minimalis

        // Create particles
        for (let i = 0; i < particleCount; i++) {
            const isHorizontal = Math.random() > 0.5;
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                size: Math.random() * 1.5 + 0.5,
                speed: Math.random() * 0.3 + 0.2, // Lebih lambat
                direction: isHorizontal ? (Math.random() > 0.5 ? 1 : -1) : 0,
                directionY: !isHorizontal ? (Math.random() > 0.5 ? 1 : -1) : 0,
                color: `rgba(180, 179, 255, ${Math.random() * 0.15 + 0.05})`, // Warna lebih soft
                isHorizontal
            });
        }

        // Animation loop
        let animationFrameId;
        const animate = () => {
            // Clear dengan efek fade yang lebih halus
            ctx.fillStyle = 'rgba(8, 8, 16, 0.08)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            
            // Update and draw particles
            particles.forEach(particle => {
                // Gerakan linear
                if (particle.isHorizontal) {
                    particle.x += particle.speed * particle.direction;
                    if (particle.x < 0) particle.x = canvas.width;
                    if (particle.x > canvas.width) particle.x = 0;
                } else {
                    particle.y += particle.speed * particle.directionY;
                    if (particle.y < 0) particle.y = canvas.height;
                    if (particle.y > canvas.height) particle.y = 0;
                }
                
                // Draw particle dengan glow effect
                const gradient = ctx.createRadialGradient(
                    particle.x, particle.y, 0,
                    particle.x, particle.y, particle.size * 3
                );
                gradient.addColorStop(0, particle.color);
                gradient.addColorStop(1, 'rgba(180, 179, 255, 0)');
                
                ctx.fillStyle = gradient;
                ctx.beginPath();
                ctx.arc(particle.x, particle.y, particle.size * 3, 0, Math.PI * 2);
                ctx.fill();
                
                // Particle core
                ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
                ctx.beginPath();
                ctx.arc(particle.x, particle.y, particle.size * 0.6, 0, Math.PI * 2);
                ctx.fill();
            });

            animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        const handleResize = () => {
            resizeCanvas();
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <div className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden bg-neutral-950">
            {/* Background gradient */}
            <div className="fixed inset-0 -z-10 opacity-60">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/30 via-transparent to-transparent"></div>
            </div>
            
            {/* Particle canvas */}
            <canvas 
                ref={canvasRef} 
                className="absolute inset-0 w-full h-full pointer-events-none opacity-60"
            />

            {/* Main content */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="z-10 text-center p-8 rounded-3xl backdrop-blur-lg bg-white/5 border border-white/10 shadow-xl"
            >
                <div className="mb-6">
                    <TypingEffect 
                        text="Welcome Explorer" 
                        speed={80} 
                        delay={500}
                        className="text-4xl md:text-5xl font-light text-white tracking-wider"
                    />
                </div>
                
                <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2, duration: 0.8 }}
                    className="text-lg text-white/70 mb-10 max-w-md leading-relaxed font-light"
                >
                    Discover my digital creation journey
                </motion.p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-8 py-3 bg-white/5 border border-white/20 text-white rounded-lg hover:bg-white/10 transition-all duration-300 flex items-center gap-2 font-light"
                        onClick={() => navigate("/Portofolio")}
                    >
                        <span>View Portfolio</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
                        </svg>
                    </motion.button>
                    
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-8 py-3 bg-transparent border border-white/20 text-white rounded-lg hover:bg-white/5 transition-all duration-300 flex items-center gap-2 font-light"
                        onClick={() => navigate("/ChatBot")}
                    >
                        <span>Start Chat</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                        </svg>
                    </motion.button>
                </div>
            </motion.div>

            {/* Floating decorative elements */}
            <motion.div 
                animate={{
                    y: [0, -15, 0],
                    opacity: [0.6, 0.8, 0.6]
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute bottom-10 left-10 w-20 h-20 rounded-full bg-purple-500/10 blur-xl pointer-events-none"
            />
        </div>
    );
};

export default Homepage;