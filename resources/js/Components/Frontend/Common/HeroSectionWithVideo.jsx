import VideoPlayer from "@/Components/Frontend/Common/VideoPlayer.jsx";

export default function HeroSectionWithVideo({ title, subtitle, video }) {
    return (
        <section className="p-4">
            <div className="container mx-auto text-center">
                {/* Heading */}
                <h2
                    className="text-[48px] font-bold text-[#2B3C50] leading-tight dark-text"
                    data-aos="fade-right"
                    dangerouslySetInnerHTML={{ __html: title }}
                />

                {/* Subheading */}
                <div className="w-7/12 mx-auto" data-aos="fade-right">
                    <p className="mt-4 text-gray-500 text-[16px] font-roboto max-w-2xl mx-auto leading-relaxed dark-text">
                        {subtitle}
                    </p>
                </div>

                {/* Video */}
                <div className="mt-10">
                    <VideoPlayer
                        src={video}
                        className="w-full h-48 sm:h-56 lg:h-[232px] rounded-3xl"
                    />
                </div>
            </div>
        </section>
    );
}
