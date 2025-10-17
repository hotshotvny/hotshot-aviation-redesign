import { useEffect, useState } from 'react';
import { Plane, CheckCircle } from 'lucide-react';

interface SuccessOverlayProps {
  isVisible: boolean;
  onDismiss: () => void;
  title?: string;
  message?: string;
}

const SuccessOverlay = ({ 
  isVisible, 
  onDismiss, 
  title = "Message Sent Successfully!",
  message = "Thanks for reaching out. We'll get back to you within 24 hours."
}: SuccessOverlayProps) => {
  const [showContent, setShowContent] = useState(false);
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    if (isVisible) {
      // Stagger the animations
      setTimeout(() => setShowContent(true), 100);
      setTimeout(() => setShowText(true), 400);
    } else {
      setShowContent(false);
      setShowText(false);
    }
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div 
      className="absolute inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm animate-fade-in cursor-pointer"
      onClick={onDismiss}
    >
      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="particle particle-1"></div>
        <div className="particle particle-2"></div>
        <div className="particle particle-3"></div>
        <div className="particle particle-4"></div>
        <div className="particle particle-5"></div>
        <div className="particle particle-6"></div>
      </div>

      {/* Main success card */}
      <div 
        className={`
          relative bg-white/95 backdrop-blur-md rounded-2xl p-8 text-center shadow-2xl border border-white/20
          transform transition-all duration-700 ease-out
          ${showContent ? 'scale-100 opacity-100 animate-success-bounce' : 'scale-50 opacity-0'}
        `}
      >
        {/* Success icon with plane animation */}
        <div className="relative mb-6">
          <div className={`
            inline-flex items-center justify-center w-20 h-20 rounded-full 
            bg-gradient-to-r from-primary to-primary-glow shadow-success-glow
            transform transition-all duration-500 ease-out
            ${showContent ? 'animate-success-icon-bounce' : ''}
          `}>
            <CheckCircle className="w-10 h-10 text-white animate-success-check" />
          </div>
          
          {/* Flying plane animation */}
          <Plane className={`
            absolute -top-2 -right-2 w-8 h-8 text-primary
            transform transition-all duration-1000 ease-out
            ${showContent ? 'animate-plane-fly' : 'opacity-0 -translate-x-10'}
          `} />
        </div>

        {/* Success text with typewriter effect */}
        <div className="space-y-4">
          <h3 className={`
            text-2xl font-bold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent
            transform transition-all duration-500 ease-out delay-300
            ${showText ? 'animate-typewriter opacity-100' : 'opacity-0 translate-y-4'}
          `}>
            {title}
          </h3>
          
          <p className={`
            text-muted-foreground max-w-sm mx-auto
            transform transition-all duration-500 ease-out delay-500
            ${showText ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
          `}>
            {message}
          </p>

          {/* Dismissal hint */}
          <p className={`
            text-xs text-muted-foreground/70 mt-6
            transform transition-all duration-500 ease-out delay-700
            ${showText ? 'opacity-100' : 'opacity-0'}
          `}>
            Tap anywhere to close
          </p>
        </div>

        {/* Animated border glow */}
        <div className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r from-primary via-primary-glow to-primary bg-clip-border animate-border-glow opacity-20"></div>
      </div>
    </div>
  );
};

export default SuccessOverlay;