import {useEffect, useState} from 'react';

export const SCREEN_SIZE = {
    MOBILE: 'mobile',
    TABLET: 'tablet',
    DESKTOP: 'desktop'
}

function getScreenSize() {
    if (window.innerWidth < 768) {
        return SCREEN_SIZE.MOBILE;
    } else if (window.innerWidth <= 1024) {
        return SCREEN_SIZE.TABLET;
    } else {
        return SCREEN_SIZE.DESKTOP;
    }
}

export default function useScreenSize() {
    const [screenSize, setScreenSize] = useState(getScreenSize());

    useEffect(() => {
        function handleResize() {
            setScreenSize(getScreenSize());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [])

    return screenSize;
}