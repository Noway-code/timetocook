import { useState, useLayoutEffect, useEffect, useRef } from 'react';

const SkillsCarousel = ({ icons, visibleCount = 3, interval = 3000 }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [containerWidth, setContainerWidth] = useState(0);
    const containerRef = useRef(null);

    useLayoutEffect(() => {
        const updateWidth = () => {
            if (containerRef.current) {
                setContainerWidth(containerRef.current.offsetWidth);
            }
        };
        updateWidth();
        window.addEventListener('resize', updateWidth);
        return () => window.removeEventListener('resize', updateWidth);
    }, []);

    const iconSize = containerWidth / visibleCount || 0;

    useEffect(() => {
        const timer = setInterval(() => {
            setActiveIndex((prev) => {
                const maxIndex = icons.length - visibleCount;
                return prev >= maxIndex ? 0 : prev + 1;
            });
        }, interval);
        return () => clearInterval(timer);
    }, [icons.length, visibleCount, interval]);

    const translatePx = activeIndex * iconSize;

    return (
        <div
            ref={containerRef}
            className="relative overflow-hidden w-full"
            style={{ height: `${iconSize}px` }}
        >
            <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{
                    width: icons.length * iconSize,
                    transform: `translateX(-${translatePx}px)`,
                }}
            >
                {icons.map((icon) => (
                    <div
                        key={icon.name}
                        className="flex-shrink-0 flex items-center justify-center"
                        style={{ width: `${iconSize}px`, height: `${iconSize}px` }}
                    >
                        <img
                            src={icon.url}
                            alt={icon.name}
                            style={{
                                maxWidth: `${iconSize * 0.5}px`,
                                maxHeight: `${iconSize * 0.5}px`,
                                objectFit: 'contain',
                            }}
                        />
                    </div>
                ))}
            </div>
            <div
                className="absolute top-0 left-0 h-full pointer-events-none"
                style={{
                    width: '20px',
                    background: 'linear-gradient(to right, rgba(255,127,80,0.7), rgba(40,30,10,0))',
                    filter: 'blur(4px)',
                }}
            />
            <div
                className="absolute top-0 right-0 h-full pointer-events-none"
                style={{
                    width: '20px',
                    background: 'linear-gradient(to left, rgba(35,155,235,.7), transparent)',
                    filter: 'blur(4px)',
                }}
            />
        </div>
    );
};

export default SkillsCarousel;
