import React from 'react';

const Text: React.FC<{ value: string }> = ({ value }) => {
    return (
        <p>{value}</p>
    );
}

export default Text;