// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
import { collection, addDoc } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAAMfAqMpeJG631G1hYTaVYZa1F2liYM0g",
  authDomain: "sraj-4c32c.firebaseapp.com",
  projectId: "sraj-4c32c",
  storageBucket: "sraj-4c32c.appspot.com",
  messagingSenderId: "869955808074",
  appId: "1:869955808074:web:4aadd0f26184134f752fb3",
  measurementId: "G-8XRQ62BGNL"
};

export const products1 = [
    {
        Name: "Banarasi Silk Saree",
        Category: "Sarees",
        Old_Price: 120.00,
        New_Price: 100.00,
        Images: ["https://lajreedesigner.com/cdn/shop/products/Policona-Mandakinisilk-Rama_2_900x1350_crop_center@2x.jpg?v=1682157698"],
        Desc: "A luxurious Banarasi silk saree perfect for special occasions.",
        isNew: true
    },
    {
        Name: "Red Lehenga Choli",
        Category: "Lehengas",
        Old_Price: 250.00,
        New_Price: 230.00,
        Images: ["https://images.meesho.com/images/products/193152626/clidg_512.webp"],
        Desc: "Elegant red lehenga choli set for weddings and festivals.",
        isNew: false
    },
    {
        Name: "Embroidered Anarkali Kurti",
        Category: "Kurtis",
        Old_Price: 80.00,
        New_Price: 65.00,
        Images: ["https://5.imimg.com/data5/SELLER/Default/2021/4/TB/LR/BL/53641370/whatsappimage2021-03-06at1-19-05pm-1024x1024-2x-500x500.jpg"],
        Desc: "Beautifully embroidered Anarkali kurti for traditional events.",
        isNew: true
    },
    {
        Name: "Silk Nightwear Set",
        Category: "Nightwear",
        Old_Price: 90.00,
        New_Price: 75.00,
        Images: ["https://images-cdn.ubuy.ae/63dca6935373ed594f6c5be3-ichuanyi-womens-silk-satin-pajamas-set.jpg"],
        Desc: "Luxurious silk nightwear set for a comfortable night's sleep.",
        isNew: false
    },
    {
        Name: "Chanderi Silk Suit",
        Category: "Suits",
        Old_Price: 150.00,
        New_Price: 120.00,
        Images: ["https://narayanivastra.in/cdn/shop/products/custom_resized_5931e62d-4b61-4d1e-af5e-b5526e061453.jpg?v=1674309409&width=1946"],
        Desc: "Elegant Chanderi silk suit set for festive occasions.",
        isNew: true
    },
    {
        Name: "Gold Plated Necklace Set",
        Category: "Jewellery",
        Old_Price: 130.00,
        New_Price: 110.00,
        Images: ["https://rubans.in/cdn/shop/products/rubans-24k-gold-plated-necklace-set-with-pearls-pink-stones-and-godess-motifs-necklace-set-32816761766062.jpg?v=1664963024"],
        Desc: "Traditional gold plated necklace set to complement any outfit.",
        isNew: false
    },
    {
        Name: "Kanjivaram Saree",
        Category: "Sarees",
        Old_Price: 200.00,
        New_Price: 180.00,
        Images: ["https://afbrand.s3.ap-south-1.amazonaws.com/images/items/Saundaryam-Pink-Kanjivaram-Silk-Saree-With-Amazing-Weaving-All-Over-02_8637617.webp"],
        Desc: "Richly woven Kanjivaram saree for ceremonial occasions.",
        isNew: true
    },
    {
        Name: "Heavy Embroidered Lehenga",
        Category: "Lehengas",
        Old_Price: 300.00,
        New_Price: 270.00,
        Images: ["https://5.imimg.com/data5/QT/WI/MY-26152501/heavy-designer-embroidered-lehenga-choli.jpg"],
        Desc: "Gorgeous heavy embroidered lehenga for grand celebrations.",
        isNew: false
    },
    {
        Name: "Georgette Kurti",
        Category: "Kurtis",
        Old_Price: 70.00,
        New_Price: 55.00,
        Images: ["https://m.media-amazon.com/images/I/710m9reKo-L._AC_UY350_.jpg"],
        Desc: "Lightweight and stylish Georgette kurti for daily wear.",
        isNew: true
    },
    {
        Name: "Cotton Nightdress",
        Category: "Nightwear",
        Old_Price: 40.00,
        New_Price: 30.00,
        Images: ["https://www.libas.in/cdn/shop/files/grey-printed-cotton-nightdress-libas-1.jpg?v=1705685069"],
        Desc: "Comfortable and breathable cotton nightdress for relaxation.",
        isNew: false
    },
];


export async function addProducts(products) {
    try {
        const productsRef = collection(db, "Products");

        for (const product of products) {
            await addDoc(productsRef, product);
        }
        console.log("Products added successfully!");
    } catch (e) {
        console.error("Error adding products: ", e);
    }
}

addProducts();

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const storage = getStorage(app)
export const db = getFirestore(app)
export const analytics = getAnalytics(app);