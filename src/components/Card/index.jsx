import Link from "next/link";

const Card = ({ href, imageSrc, videoSrc, title }) => {
  return (
    <Link legacyBehavior href={href}>
      <a className="relative group w-80 h-48 overflow-hidden rounded-lg shadow-lg cursor-pointer block">
        {/* Изображение на заднем фоне */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-300 group-hover:opacity-0"
          style={{
            backgroundImage: `url(${imageSrc})`,
          }}
        ></div>

        {/* Видео при наведении */}
        <video
          className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-1000"
          loop
          autoPlay
          muted
        >
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Текст поверх изображения */}
        <div className="relative z-10 flex justify-center items-center h-full">
          <h2 className="text-white text-lg font-semibold group-hover:opacity-0 transition-opacity duration-300">
            {title}
          </h2>
        </div>

        {/* Полупрозрачный оверлей для контраста текста */}
        <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:bg-opacity-0 transition-opacity duration-300"></div>
      </a>
    </Link>
  );
};

export default Card;
