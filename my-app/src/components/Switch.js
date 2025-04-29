import React from "react";

const Swicht = ({val, SetListFilter, ListFilter, tipo}) => {
    const check = ListFilter[tipo].includes(val.id);

    const HandleSwitch = (id,tipo) => {
        SetListFilter(id,tipo)
    }

    return (
        <label
        htmlFor={`toggle-${val.id}-${tipo}`}
        className="cursor-pointer select-none text-dark dark:text-white"
        >
        <div className="relative">
            <input
            type="checkbox"
            id={`toggle-${val.id}-${tipo}`}
            checked={check}
            className="peer sr-only"
            value={val.id}
            onChange={() => HandleSwitch(val.id,tipo)}
            />
            <div
            className="block h-8 rounded-full box bg-gray-800 dark:bg-white w-14 peer-checked:bg-blue-800"
            ></div>
            <div
            className="absolute flex items-center justify-center w-6 h-6 transition bg-white rounded-full dot left-1 top-1 dark:bg-gray-400 peer-checked:translate-x-full peer-checked:dark:bg-white"
            ></div>
        </div>
    </label>
    )
}

export default Swicht