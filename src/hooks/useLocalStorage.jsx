import { useState, useCallback } from "react"
export function useLocalStorage(key, initialValue) {
    const [storedValue, setStoredValue] = useState(() => {
        try {
            if (typeof window !== "undefined") {
                const item = window.localStorage.getItem(key)
                return item ? JSON.parse(item) : initialValue
            }
            return initialValue
        } catch (error) {
            console.error(`Error reading localStorage key "${key}":`, error)
            return initialValue
        }
    });
    const setValue = useCallback(
        (value) => {
            try {
                const valueToStore = value instanceof Function ? value(storedValue) : value
                setStoredValue(valueToStore)

                // Save to localStorage
                if (typeof window !== "undefined") {
                    window.localStorage.setItem(key, JSON.stringify(valueToStore))
                }
            } catch (error) {
                console.error(`Error setting localStorage key "${key}":`, error)
            }
        },
        [key, storedValue],
    );
    return [storedValue, setValue]
}