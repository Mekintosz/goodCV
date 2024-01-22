import React from "react";

export default function Button({text, onClick}) {
    return (
        <button
        onClick={handleClick}>
            {text}
        </button>
    )
}