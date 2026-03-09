import { MessageCircle, Phone } from "lucide-react";

const FloatingButtons = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      <a
        href="tel:+971527833727"
        className="w-14 h-14 bg-primary hover:bg-primary/90 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all hover:scale-110"
        aria-label="Call us"
      >
        <Phone className="w-6 h-6 text-primary-foreground" />
      </a>
      <a
        href="https://wa.me/971527833727?text=Hello%2C%20I%20am%20interested%20in%20your%20services"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-[hsl(142,70%,45%)] hover:bg-[hsl(142,70%,40%)] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all hover:scale-110"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-6 h-6 text-[hsl(0,0%,100%)]" />
      </a>
    </div>
  );
};

export default FloatingButtons;
