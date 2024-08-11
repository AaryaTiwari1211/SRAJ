import React from 'react'
import { products1 } from '../../firebase/firebase';
import Products from '../../components/Products/Products';
import HomeExtras from '../../components/Extra/HomeExtras';
function Lehengas() {
    const lehengas = products1.filter(p => p.Category === "Lehengas");

    return (
        <div>
            <HomeExtras title='Lehengas' subtitle='New launches every day, styles that promise to capture your heart' />
            <Products products={lehengas} />
        </div>
    );
}

export default Lehengas