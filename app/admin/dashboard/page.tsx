"use client";

import React, { useEffect, useState } from "react";

type Order = {
  id: number;
  customerName: string;
  place: string;
  country: string;
  price: number;
  rating: number;
  createdAt: string;
};

const DashboardPage = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [form, setForm] = useState<Partial<Order>>({});
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Fetch orders on component mount
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch("/api/orders");
        if (!response.ok) {
          throw new Error("Failed to fetch orders");
        }
        const data = await response.json();
        setOrders(data);
      } catch (err: any) {
        setError(err.message);
      }
    };

    fetchOrders();
  }, []);

  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  // Add a new order
  const handleAddOrder = async () => {
    if (!form.customerName || !form.place || !form.country || !form.price || !form.rating) {
      alert("Please fill out all fields.");
      return;
    }

    const newOrder = { ...form, id: Date.now(), createdAt: new Date().toISOString() } as Order;
    setOrders((prev) => [...prev, newOrder]);
    setForm({});
  };

  // Edit an existing order
  const handleEditOrder = (id: number) => {
    const order = orders.find((order) => order.id === id);
    if (order) {
      setForm(order);
      setIsEditing(true);
      setEditingId(id);
    }
  };

  // Save changes to an existing order
  const handleSaveOrder = () => {
    if (!editingId) return;

    setOrders((prev) =>
      prev.map((order) => (order.id === editingId ? { ...order, ...form } : order))
    );
    setForm({});
    setIsEditing(false);
    setEditingId(null);
  };

  // Delete an order
  const handleDeleteOrder = (id: number) => {
    setOrders((prev) => prev.filter((order) => order.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>

      {error && <div className="text-red-500 mb-4">{error}</div>}

      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-4">{isEditing ? "Edit Order" : "Add Order"}</h2>
        <div className="grid grid-cols-2 gap-4">
          <input
            type="text"
            name="customerName"
            placeholder="Customer Name"
            value={form.customerName || ""}
            onChange={handleInputChange}
            className="p-2 rounded bg-gray-800 text-white"
          />
          <input
            type="text"
            name="place"
            placeholder="Place"
            value={form.place || ""}
            onChange={handleInputChange}
            className="p-2 rounded bg-gray-800 text-white"
          />
          <input
            type="text"
            name="country"
            placeholder="Country"
            value={form.country || ""}
            onChange={handleInputChange}
            className="p-2 rounded bg-gray-800 text-white"
          />
          <input
            type="number"
            name="price"
            placeholder="Price"
            value={form.price || ""}
            onChange={handleInputChange}
            className="p-2 rounded bg-gray-800 text-white"
          />
          <input
            type="number"
            name="rating"
            placeholder="Rating"
            value={form.rating || ""}
            onChange={handleInputChange}
            className="p-2 rounded bg-gray-800 text-white"
          />
        </div>
        <div className="mt-4">
          {isEditing ? (
            <button
              onClick={handleSaveOrder}
              className="bg-green-500 px-4 py-2 rounded mr-2"
            >
              Save Changes
            </button>
          ) : (
            <button
              onClick={handleAddOrder}
              className="bg-blue-500 px-4 py-2 rounded"
            >
              Add Order
            </button>
          )}
        </div>
      </div>

      <h2 className="text-2xl font-bold mb-4">Orders</h2>
      <div className="overflow-x-auto">
        <table className="table-auto w-full bg-gray-800 text-white rounded">
          <thead>
            <tr>
              <th className="px-4 py-2">ID</th>
              <th className="px-4 py-2">Customer Name</th>
              <th className="px-4 py-2">Place</th>
              <th className="px-4 py-2">Country</th>
              <th className="px-4 py-2">Price</th>
              <th className="px-4 py-2">Rating</th>
              <th className="px-4 py-2">Created At</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {orders.length > 0 ? (
              orders.map((order) => (
                <tr key={order.id}>
                  <td className="border px-4 py-2">{order.id}</td>
                  <td className="border px-4 py-2">{order.customerName}</td>
                  <td className="border px-4 py-2">{order.place}</td>
                  <td className="border px-4 py-2">{order.country}</td>
                  <td className="border px-4 py-2">{order.price}</td>
                  <td className="border px-4 py-2">{order.rating}</td>
                  <td className="border px-4 py-2">
                    {new Date(order.createdAt).toLocaleString()}
                  </td>
                  <td className="border px-4 py-2 flex gap-2">
                    <button
                      onClick={() => handleEditOrder(order.id)}
                      className="bg-yellow-500 px-2 py-1 rounded"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDeleteOrder(order.id)}
                      className="bg-red-500 px-2 py-1 rounded"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={8} className="text-center py-4">
                  No orders available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DashboardPage;
