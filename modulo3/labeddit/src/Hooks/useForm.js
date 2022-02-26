import { useState } from "react";

const useForm = (initialState) => {
    const [form, setForm] = useState(initialState)

    const handleInputChage = (event) => {
        const {value, name} = event.target
        setForm({...form, [name]: value})
    }

    const clear = () => {
        setForm(initialState)
    }

    return [form, handleInputChage, clear]
}

export default useForm