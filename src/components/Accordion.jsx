import { useState } from 'react';

function Accordion({ title, content }) {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div className="w-full max-w-md">
        <div className="flex flex-col bg-white overflow-hidden shadow-lg">
            <button
            className="flex justify-between items-center px-8 py-4 bg-red-600 text-white focus:outline-none"
            onClick={() => setIsExpanded(!isExpanded)}
            >
            <span className="text-xl font-medium">{title}</span>
            <svg
                className={`w-6 h-6 transform transition-transform duration-200 ${isExpanded && 'rotate-180'}`}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M18 9L12 15L6 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            </button>
            {isExpanded && (
            <div className="px-6 py-4 bg-red-100">
                <p className="text-gray-700">{content}</p>
                <button className="mt-4 bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-500 focus:outline-none focus:bg-red-600">
                Subscribe
                </button>
            </div>
            )}
        </div>
        </div>
    );
}

export default Accordion;
