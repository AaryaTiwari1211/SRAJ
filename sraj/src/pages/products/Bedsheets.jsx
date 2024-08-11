import React from 'react'
import { products1 } from '../../firebase/firebase';
import Products from '../../components/Products/Products';
import HomeExtras from '../../components/Extra/HomeExtras';
function Bedsheets() {
    const bedsheets = products1.filter(p => p.Category === "Bedsheets");
    return (
        <div>
            <HomeExtras title='Bedsheets' subtitle='New launches every day, styles that promise to capture your heart' />
            <Products products={bedsheets} />
        </div>
    );
}

export default Bedsheets