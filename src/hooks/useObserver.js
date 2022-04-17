import {useEffect, useRef} from "react";

export const useObserver = (ref, canLoad, isLoading, callback) => {
    const observer = useRef();

    useEffect(() => {
        if(isLoading) return;
        if(observer.current) observer.current.disconnect()
        var callb = function(entries, observer) {
            if(entries[0].isIntersecting && canLoad) {
                callback()
            }
        };
        observer.current = new IntersectionObserver(callb);
        observer.current.observe(ref.current)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isLoading])
}