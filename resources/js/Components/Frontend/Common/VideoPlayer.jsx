export default function VideoPlayer({className = "w-full max-w-5xl mx-auto rounded-2xl overflow-hidden", src = "/assets/video/Promo.mp4"}) {
    return (
        <div className="relative">
            {/* Video */}
            <video
                className={`w-full h-auto object-cover ${className}`}
                src={src}
                autoPlay
                loop
                muted
                playsInline
            />
        </div>
    );
}
