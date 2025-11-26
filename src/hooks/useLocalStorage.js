import { useState } from "react";

export default function useLocalStorage(key, initialValue) {
const [value, setValue] = useState(() => {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : initialValue;
});

const updateValue = (newValue) => {
    localStorage.setItem(key, JSON.stringify(newValue));
    setValue(newValue);
};

return [value, updateValue];
}
