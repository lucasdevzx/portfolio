import { useInView } from '../../hooks/useInView';
import './FadeInSection.css';

const FadeInSection = ({ children, className = '', delay = 0 }) => {
    const [ref, isVisible] = useInView();

    return (
        <div
            ref={ref}
            className={`fade-in-section ${isVisible ? 'visible' : ''} ${className}`}
            style={{ transitionDelay: `${delay}s` }}
        >
            {children}
        </div>
    );
};

export default FadeInSection;