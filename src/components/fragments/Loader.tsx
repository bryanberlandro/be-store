import React from "react";

interface LoaderProps{
    color?: string;
}

const Loader:React.FC<LoaderProps> = ({color}) => {
    return (
        <div className="flex flex-row gap-2 py-2">
            <div className={`w-2 h-2 rounded-full ${color ? color : 'bg-white'} animate-bounce`}></div>
            <div className={`w-2 h-2 rounded-full ${color ? color : 'bg-white'} animate-bounce [animation-delay:-.1s]`}></div>
            <div className={`w-2 h-2 rounded-full ${color ? color : 'bg-white'} animate-bounce [animation-delay:-.2s]`}></div>
        </div>
    )
}

export default Loader;