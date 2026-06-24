// src/components/FadeIn.jsx
import useFadeIn from '../hooks/useFadeIn';

export default function FadeIn({ children, className = '', style = {} }) {
  const ref = useFadeIn();
  return (
    <div ref={ref} className={`fade-in ${className}`} style={style}>
      {children}
    </div>
  );
}
