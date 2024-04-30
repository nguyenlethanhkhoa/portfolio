import { useLayoutEffect, useState } from "react";



export const useWindowSize = () => {
    const [size, setSize] = useState<{w: number, h: number}>({w: 0, h: 0});
    useLayoutEffect(() => {
        function updateSize() {
            setSize({w:  window.innerWidth, h: window.innerHeight});
        }
        window.addEventListener('resize', updateSize);
        updateSize();
        return () => window.removeEventListener('resize', updateSize);
    }, []);
    return size;
}