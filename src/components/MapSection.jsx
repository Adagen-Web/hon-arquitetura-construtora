import { useEffect, useState } from "react";

const MapSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 300); // Aplica fade-in após 300ms
  }, []);

  return (
    <section className={`relative w-full h-[400px] sm:h-[500px] transition-opacity duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`}>
      {/* Google Maps Embed */}
      <iframe
        className="w-full h-full border-0"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3491.6459821239377!2d-49.72482128459529!3d-29.336125382151867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x950132c7e462d30b%3A0xd3b3d3d3d3d3d3d!2sAvenida%20Silva%20Jardim%201541%2C%20Predial%2C%20Torres%20-%20RS%2C%2095500-000!5e0!3m2!1sen!2sbr!4v1618979937508!5m2!1sen!2sbr"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </section>
  );
};

export default MapSection;
