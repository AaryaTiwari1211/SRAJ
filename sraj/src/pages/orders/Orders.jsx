import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { collection, getDocs } from "firebase/firestore";
import { db } from '../../firebase/firebase';
import { toast } from 'react-toastify';

function Orders() {
    const userInfo = useSelector((state) => state.auth);
    const orders = [
        {
            id: "order1",
            txn: "0x1234abcd",
            amount: 250,
            status: "Completed",
            products: [
                { name: "NFT Art Piece 1", price: 100, quantity: 1 },
                { name: "NFT Art Piece 2", price: 50, quantity: 3 },
            ]
        },
        {
            id: "order2",
            txn: "0x5678efgh",
            amount: 300,
            status: "Pending",
            products: [
                { name: "Exclusive Avatar", price: 150, quantity: 1 },
                { name: "Rare Collectible", price: 75, quantity: 2 },
            ]
        },
        {
            id: "order3",
            txn: "0x9abcijkl",
            amount: 150,
            status: "Shipped",
            products: [
                { name: "Mystery Box", price: 50, quantity: 3 },
            ]
        },
        {
            id: "order4",
            txn: "0xdefgmnop",
            amount: 75,
            status: "Cancelled",
            products: [
                { name: "Limited Edition Card", price: 75, quantity: 1 },
            ]
        },
        {
            id: "order5",
            txn: "0xqrstuvwx",
            amount: 200,
            status: "Completed",
            products: [
                { name: "NFT Token", price: 100, quantity: 2 },
            ]
        }
    ]


    // useEffect(() => {
    //     const fetchOrders = async () => {
    //         try {
    //             const ordersCollection = collection(db, "orders");
    //             const ordersSnapshot = await getDocs(ordersCollection);
    //             const ordersData = ordersSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    //             setOrders(ordersData);
    //         } catch (error) {
    //             toast.error("Failed to fetch orders");
    //             console.error("Error fetching orders:", error);
    //         }
    //     };
    //     fetchOrders();
    // }, []);

    return (
        <div className="container p-5">
            <h1 className="mt-4 mb-6 text-3xl font-bold text-center">Your Orders</h1>
            {orders.length === 0 ? (
                <p className="text-center text-gray-500">No orders found.</p>
            ) : (
                <div className="flex flex-wrap justify-between w-full gap-4">
                    {orders.map((order) => (
                        <OrderCard key={order.id} order={order} />
                    ))}
                </div>
            )}
        </div>
    );
}

function OrderCard({ order }) {
    return (
        <div className="p-4 transition max-w-[400px] m-2 duration-300 bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg">
            <h2 className="mb-2 text-2xl font-semibold text-gray-800">Order ID: {order.id}</h2>
            <p className='text-[12px]'><strong>Transaction Hash:</strong> {order.txn}</p>
            <p className='text-[12px]'><strong>Amount:</strong> ${order.amount}</p>
            <p className='text-[12px]'><strong>Status:</strong> {order.status}</p>
            <div className="mt-4">
                <h3 className="text-2xl font-semibold">Products:</h3>
                <ul className="list-disc list-inside">
                    {order.products.map((product, index) => (
                        <li key={index}>
                            {product.name} - ${product.price} x {product.quantity}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Orders;
