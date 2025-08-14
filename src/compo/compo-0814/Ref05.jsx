import React, { useRef } from 'react';

const Ref05 = () => {
    const itemsRef = useRef([])

    const addItem = () => {
        const newItem = `Item ${itemsRef.current.length + 1}`

        itemsRef.current = [...itemsRef.current, newItem]

        console.log(itemsRef.current)
    }

    return (
        <div>
            <button onClick={addItem}>Add Item</button>
            <ul>
                {itemsRef.current.map((item, index) => (
                    <li key={index}>{item}</li>
                ))
                }
            </ul>
        </div>
    );
};

export default Ref05;