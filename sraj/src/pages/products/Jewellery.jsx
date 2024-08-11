import React from 'react'
import { products1 } from '../../firebase/firebase';
import Products from '../../components/Products/Products';
import HomeExtras from '../../components/Extra/HomeExtras';
function Jewellery() {
    const jewellery = products1.filter(p => p.Category === "Jewellery");

    return (
        <div>
            <HomeExtras title='Jewellery' subtitle='New launches every day, styles that promise to capture your heart' />
            <Products products={jewellery} />
        </div>
    );
}

export default Jewellery