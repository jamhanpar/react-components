interface ImageProps {
  src: string;
  alt: string;
  className?: string;
  objectFit?: 'fill' | 'contain' | 'cover' | 'none' | 'scale-down';
}

export default function Image({ src, alt, className, objectFit }: ImageProps) {
  const imageStyle = {
    objectFit: objectFit || 'cover',
  };

  return (
    <div className={className} style={imageStyle}>
      <img src={src} alt={alt} />
    </div>
  );
}
