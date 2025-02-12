const AboutImage = ({ imageSrc }) => {
  return (
    <div className="w-full sm:w-1/2 flex justify-center">
      <img
        src={imageSrc}
        alt="Escritório HON"
        className="w-full h-auto max-w-[800px] object-cover"
      />
    </div>
  );
};

export default AboutImage;
