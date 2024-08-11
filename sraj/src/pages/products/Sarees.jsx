import React from 'react'
import { products1 } from '../../firebase/firebase';
import Products from '../../components/Products/Products';
import HomeExtras from '../../components/Extra/HomeExtras';
function Sarees() {
    const sarees = products1.filter(p => p.Category === "Sarees");

    return (
        <div>
            <HomeExtras title='Sarees' subtitle='New launches every day, styles that promise to capture your heart' />
            <Products products={sarees} />
        </div>
    );
}

export default Sarees