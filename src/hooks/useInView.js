import { useEffect, useRef, useState } from 'react';

export function useInView(options = { threshold: 0.15 }) {
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            setIsVisible(entry.isIntersecting); // true quando entra, false quando sai
        }, options);

        if (ref.current) observer.observe(ref.current);

        return () => observer.disconnect();
    }, []);

    return [ref, isVisible];
}