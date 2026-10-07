import React, { useState } from 'react';
import { Compass, Image as ImageIcon } from 'lucide-react';

interface SafeImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
  fallbackText?: string;
}

export const SafeImage: React.FC<SafeImageProps> = ({
  src,
  alt,
  className = '',
  fallbackText,
  ...props
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  if (hasError || !src) {
    return (
      <div
        className={`bg-gradient-to-br from-[#242625] via-[#1a1d1c] to-[#0B0D0C] flex flex-col items-center justify-center text-white/70 p-4 relative overflow-hidden select-none ${className}`}
        role="img"
        aria-label={alt}
      >
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#556B2F_1px,transparent_1px)] [background-size:16px_16px]" />
        <Compass className="w-8 h-8 text-[#556B2F] mb-2 animate-pulse" />
        <span className="text-xs font-medium text-neutral-300 tracking-wide text-center line-clamp-1 max-w-[80%]">
          {fallbackText || alt || 'Wiktrip Experience'}
        </span>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {!isLoaded && (
        <div className="absolute inset-0 bg-[#E8EAE3] animate-pulse flex items-center justify-center">
          <ImageIcon className="w-6 h-6 text-[#556B2F]/40" />
        </div>
      )}
      <img
        src={src}
        alt={alt}
        referrerPolicy="no-referrer"
        loading="lazy"
        onLoad={() => setIsLoaded(true)}
        onError={() => setHasError(true)}
        className={`w-full h-full object-cover transition-opacity duration-300 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        {...props}
      />
    </div>
  );
};
