import React from "react";
import Products from "../../components/Products/Products";
import HomeExtras from "../../components/Extra/HomeExtras";
function Kurtas({ products1 }) {
  const kurtis = products1.filter((p) => p.Category === "Kurtis");

  return (
    <div>
      <HomeExtras
        title="Kurtis"
        subtitle="New launches every day, styles that promise to capture your heart"
      />
      <Products products={kurtis} />
    </div>
  );
}

export default Kurtas;
