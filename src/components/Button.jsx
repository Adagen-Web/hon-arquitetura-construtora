const Button = ({ text, icon, onClick, className = "", type = "button" }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`border cursor-pointer border-primary text-primary px-4 py-2 flex items-center text-base sm:text-lg hover:bg-gray-100 transition-all ${className}`}
    >
      <span>{text}</span>
      {icon && <span className="ml-2">{icon}</span>}
    </button>
  );
};

export default Button;
