import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { collection, getDocs } from "firebase/firestore";
import { db } from '../../firebase/firebase';
import { toast } from 'react-toastify';

function Orders() {s
    const userInfo = useSelector((state) => state.auth);
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const ordersCollection = collection(db, "orders");
                const ordersSnapshot = await getDocs(ordersCollection);
                const ordersData = ordersSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                setOrders(ordersData);
            } catch (error) {
                toast.error("Failed to fetch orders");
                console.error("Error fetching orders:", error);
            }
        };
        fetchOrders();
    }, []);

    return (
        <div className="container p-5 mx-auto">
            <h1 className="mb-6 text-3xl font-bold text-center">Your Orders</h1>
            {orders.length === 0 ? (
                <p className="text-center text-gray-500">No orders found.</p>
            ) : (
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
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
        <div className="p-6 transition duration-300 bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg">
            <h2 className="mb-2 text-xl font-semibold text-gray-800">Order ID: {order.id}</h2>
            <p><strong>Transaction Hash:</strong> {order.txn}</p>
            <p><strong>Amount:</strong> ${order.amount}</p>
            <p><strong>Status:</strong> {order.status}</p>
            <div className="mt-4">
                <h3 className="font-medium text-gray-600">Products:</h3>
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
