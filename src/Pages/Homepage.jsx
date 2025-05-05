import { useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";
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

        // Abstract shapes array
        const shapes = [];
        const shapeCount = 15;

        // Create abstract shapes
        for (let i = 0; i < shapeCount; i++) {
            shapes.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                size: Math.random() * 100 + 50,
                rotation: Math.random() * 360,
                speed: Math.random() * 0.5 + 0.2,
                color: `hsla(${Math.random() * 60 + 250}, 80%, 70%, ${Math.random() * 0.2 + 0.1})`,
                type: Math.floor(Math.random() * 3) // 0: circle, 1: triangle, 2: rectangle
            });
        }

        // Animation loop
        let animationFrameId;
        const animate = () => {
            ctx.fillStyle = 'rgba(5, 5, 10, 0.05)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // Draw abstract shapes
            shapes.forEach(shape => {
                shape.rotation += shape.speed * 0.2;
                shape.x += Math.sin(shape.rotation * Math.PI / 180) * shape.speed;
                shape.y += Math.cos(shape.rotation * Math.PI / 180) * shape.speed;

                // Wrap around screen
                if (shape.x < -shape.size) shape.x = canvas.width + shape.size;
                if (shape.x > canvas.width + shape.size) shape.x = -shape.size;
                if (shape.y < -shape.size) shape.y = canvas.height + shape.size;
                if (shape.y > canvas.height + shape.size) shape.y = -shape.size;

                ctx.save();
                ctx.translate(shape.x, shape.y);
                ctx.rotate(shape.rotation * Math.PI / 180);
                ctx.fillStyle = shape.color;

                switch (shape.type) {
                    case 0: // Circle
                        ctx.beginPath();
                        ctx.arc(0, 0, shape.size / 2, 0, Math.PI * 2);
                        ctx.fill();
                        break;
                    case 1: // Triangle
                        ctx.beginPath();
                        ctx.moveTo(0, -shape.size / 2);
                        ctx.lineTo(shape.size / 2, shape.size / 2);
                        ctx.lineTo(-shape.size / 2, shape.size / 2);
                        ctx.closePath();
                        ctx.fill();
                        break;
                    case 2: // Rectangle
                        ctx.fillRect(-shape.size / 2, -shape.size / 2, shape.size, shape.size);
                        break;
                }

                ctx.restore();
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
            {/* Abstract canvas background */}
            <canvas
                ref={canvasRef}
                className="absolute inset-0 w-full h-full pointer-events-none opacity-70"
            />

            {/* Main content - abstract floating elements */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
                className="z-10 relative w-full h-full"
            >
                {/* Floating abstract shapes */}
                <motion.div
                    animate={{
                        x: ["0%", "5%", "0%"],
                        y: ["0%", "-3%", "0%"],
                        rotate: [0, 5, 0]
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute top-1/4 left-1/4 w-40 h-40 rounded-full bg-purple-500/10 blur-3xl"
                />

                <motion.div
                    animate={{
                        x: ["0%", "-8%", "0%"],
                        y: ["0%", "10%", "0%"],
                        rotate: [0, -10, 0]
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute bottom-1/3 right-1/4 w-60 h-60 bg-blue-500/10 blur-3xl"
                    style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}
                />

                {/* Minimal interactive element */}
                <motion.div
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center"
                    whileHover={{ scale: 1.05 }}
                >
                    <motion.div
                        className="text-white text-2xl font-light mb-6 cursor-pointer rotate-12"
                        onClick={() => navigate("/Portofolio")}
                        whileHover={{ opacity: 0.8 }}
                    >
                        /enter to  <span className="text-2xl text-amber-600">Start</span>?
                    </motion.div>

                    <motion.div
                        className="w-20 h-1 bg-white/30 mx-auto mt-8"
                        animate={{
                            scaleX: [1, 1.5, 1],
                            opacity: [0.6, 1, 0.6]
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity
                        }}
                    />
                </motion.div>
            </motion.div>

            {/* Floating particles */}
            {[...Array(10)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute rounded-full bg-white/5 pointer-events-none"
                    style={{
                        width: `${Math.random() * 10 + 5}px`,
                        height: `${Math.random() * 10 + 5}px`,
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`
                    }}
                    animate={{
                        y: [0, (Math.random() - 0.5) * 100],
                        x: [0, (Math.random() - 0.5) * 100],
                        opacity: [0, Math.random() * 0.3 + 0.1, 0]
                    }}
                    transition={{
                        duration: Math.random() * 20 + 10,
                        repeat: Infinity,
                        repeatType: "reverse"
                    }}
                />
            ))}
        </div>
    );
};

export default Homepage;