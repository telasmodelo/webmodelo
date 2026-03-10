const whatsappNumber = "5491151512570"; // international format without +
const whatsappMessage = "Hola, quiero consultar por telas.";

const FloatingWhatsAppButton = () => {
  const encodedMessage = encodeURIComponent(whatsappMessage);
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50"
    >
      <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#25D366] shadow-lg shadow-black/25 flex items-center justify-center hover:scale-105 active:scale-95 transition-transform transition-smooth">
        {/* WhatsApp icon (SVG) */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          className="w-7 h-7 md:w-8 md:h-8 text-white fill-current"
        >
          <path d="M16.04 3C9.41 3 4 8.41 4 15.04c0 2.65.87 5.1 2.36 7.12L4 29l7.03-2.29a11.97 11.97 0 004.99 1.09h.01C22.67 27.8 28.08 22.39 28.08 15.76 28.08 9.13 22.67 3 16.04 3zm0 21.88h-.01a9.77 9.77 0 01-4.98-1.37l-.36-.21-4.17 1.36 1.37-4.06-.24-.42A9.75 9.75 0 016.3 15.1c0-5.38 4.37-9.75 9.76-9.75 5.38 0 9.76 4.37 9.76 9.75 0 5.38-4.38 9.78-9.78 9.78zm5.35-7.29c-.29-.15-1.7-.84-1.97-.93-.27-.1-.47-.15-.67.15-.2.29-.77.93-.94 1.12-.17.2-.35.22-.64.07-.29-.15-1.23-.45-2.34-1.43-.86-.77-1.44-1.72-1.61-2.01-.17-.29-.02-.45.13-.6.13-.13.29-.35.44-.52.15-.17.2-.29.3-.49.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.29-1.05 1.03-1.05 2.51 0 1.47 1.08 2.9 1.23 3.1.15.2 2.12 3.24 5.14 4.54.72.31 1.28.5 1.72.64.72.23 1.38.2 1.9.12.58-.09 1.7-.7 1.94-1.38.24-.68.24-1.27.17-1.38-.07-.11-.26-.18-.55-.33z" />
        </svg>
      </div>
    </a>
  );
};

export default FloatingWhatsAppButton;

