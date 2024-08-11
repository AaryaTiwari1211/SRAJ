import React from 'react'
import { products1 } from '../../firebase/firebase';
import Products from '../../components/Products/Products';
import HomeExtras from '../../components/Extra/HomeExtras';
function NightWear() {
    const nightwear = products1.filter(p => p.Category === "Nightwear");

    return (
        <div>
            <HomeExtras title='Nightwear' subtitle='New launches every day, styles that promise to capture your heart' />
            <Products products={nightwear} />
        </div>
    );
}

export default NightWear