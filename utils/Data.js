import React, { useState } from 'react';

const Data = () => {
    const apiUrl = 'http://localhost:9000/products';

    const [items, setItems] = useState([]);

    const dodo = items;

    useEffect(() => {
        fetch(apiUrl)
            .then((res) => res.json())
            .then((data) => {
                setItems(data);
            });
    }, []);
    return <div>data</div>;
};

export default Data;
