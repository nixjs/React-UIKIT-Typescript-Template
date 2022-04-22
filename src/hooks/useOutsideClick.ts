import React, { useCallback, useEffect } from 'react'

type Handler = (event: MouseEvent) => void

function useOutsideClick<T extends HTMLElement = HTMLElement>(boxRef: React.RefObject<T>, callbackFunction: Handler): void {
    const handleClickOutside = useCallback(
        (event) => {
            if (boxRef.current && !boxRef.current.contains(event.target)) {
                callbackFunction(event)
            }
        },
        [boxRef, callbackFunction]
    )

    useEffect(() => {
        document.addEventListener('click', handleClickOutside, true)
        return () => {
            document.removeEventListener('click', handleClickOutside, true)
        }
    })
}

export default useOutsideClick
