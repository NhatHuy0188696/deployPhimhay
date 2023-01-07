import { useState, useEffect } from 'react';
function Usecreensize(value) {
    const [widthValue, setWidthValue] = useState(value);
    useEffect(() => {
        const handleSetWidth = () => {
            setWidthValue(window.innerWidth);
        };
        return window.addEventListener('resize', handleSetWidth);
    }, [widthValue]);
    return widthValue;
}
export default Usecreensize;
