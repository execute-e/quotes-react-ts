import React from 'react';

const Header: React.FC = () => {
    

    return (
        <header className='bg-gray-900 text-white'>
            <div className="container mx-auto px-5 flex justify-between items-center h-10">
                <h1 className='font-bold text-2xl'>Random Quotes</h1>
            </div>
        </header>
    );
};

export default Header;