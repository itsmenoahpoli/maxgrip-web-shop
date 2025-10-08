"use client";

import { useState } from "react";
import { formatCurrency } from "../../lib/currency";
import { motion } from "framer-motion";
import { User, ShoppingBag, MapPin, CreditCard, Settings, Package, Star, Eye } from "lucide-react";
import SubpageHero from "../../components/SubpageHero";
import * as Tabs from "@radix-ui/react-tabs";

export default function AccountPage() {
  const [activeTab, setActiveTab] = useState("profile");

  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+1 (555) 123-4567",
    joinDate: "January 2023"
  };

  const orders = [
    {
      id: "ORD-001",
      date: "2024-01-15",
      status: "Delivered",
      total: 234.97,
      items: 3
    },
    {
      id: "ORD-002", 
      date: "2024-01-10",
      status: "Shipped",
      total: 89.99,
      items: 1
    },
    {
      id: "ORD-003",
      date: "2024-01-05",
      status: "Processing",
      total: 156.98,
      items: 2
    }
  ];

  const addresses = [
    {
      id: 1,
      type: "Home",
      name: "John Doe",
      address: "123 Main Street",
      city: "New York",
      state: "NY",
      zipCode: "10001",
      phone: "+1 (555) 123-4567",
      isDefault: true
    },
    {
      id: 2,
      type: "Work",
      name: "John Doe",
      address: "456 Business Ave",
      city: "Brooklyn",
      state: "NY", 
      zipCode: "11201",
      phone: "+1 (555) 123-4567",
      isDefault: false
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Delivered": return "bg-green-100 text-green-800";
      case "Shipped": return "bg-blue-100 text-blue-800";
      case "Processing": return "bg-yellow-100 text-yellow-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <SubpageHero
        title="My Account"
        subtitle="Manage your profile, orders, and preferences"
      />

      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <motion.aside
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-1"
          >
            <div className="bg-white rounded-2xl p-6 shadow-sm sticky top-8">
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <User className="h-10 w-10 text-primary" />
                </div>
                <h2 className="text-xl font-bold">{user.name}</h2>
                <p className="text-sm text-muted">{user.email}</p>
              </div>

              <nav className="space-y-2">
                {[
                  { id: "profile", label: "Profile", icon: User },
                  { id: "orders", label: "Orders", icon: ShoppingBag },
                  { id: "addresses", label: "Addresses", icon: MapPin },
                  { id: "payment", label: "Payment", icon: CreditCard },
                  { id: "settings", label: "Settings", icon: Settings }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors ${
                      activeTab === item.id
                        ? 'bg-primary text-white'
                        : 'hover:bg-accent text-muted'
                    }`}
                  >
                    <item.icon className="h-5 w-5" />
                    <span className="font-medium">{item.label}</span>
                  </button>
                ))}
              </nav>
            </div>
          </motion.aside>

          <motion.main
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-3"
          >
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              {activeTab === "profile" && (
                <div>
                  <h2 className="text-2xl font-bold mb-6">Profile Information</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">Full Name</label>
                      <input
                        type="text"
                        defaultValue={user.name}
                        className="w-full px-4 py-3 rounded-lg border border-border focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Email Address</label>
                      <input
                        type="email"
                        defaultValue={user.email}
                        className="w-full px-4 py-3 rounded-lg border border-border focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Phone Number</label>
                      <input
                        type="tel"
                        defaultValue={user.phone}
                        className="w-full px-4 py-3 rounded-lg border border-border focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Member Since</label>
                      <input
                        type="text"
                        defaultValue={user.joinDate}
                        disabled
                        className="w-full px-4 py-3 rounded-lg border border-border bg-accent text-muted"
                      />
                    </div>
                  </div>
                  <button className="mt-6 px-6 py-3 rounded-lg bg-primary text-white font-semibold hover-glow-red">
                    Save Changes
                  </button>
                </div>
              )}

              {activeTab === "orders" && (
                <div>
                  <h2 className="text-2xl font-bold mb-6">Order History</h2>
                  <div className="space-y-4">
                    {orders.map((order, index) => (
                      <motion.div
                        key={order.id}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        className="border border-border rounded-lg p-6 hover:shadow-md transition-shadow"
                      >
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                          <div>
                            <h3 className="text-lg font-semibold">Order #{order.id}</h3>
                            <p className="text-sm text-muted">Placed on {order.date}</p>
                            <p className="text-sm text-muted">{order.items} item(s)</p>
                          </div>
                          <div className="flex flex-col sm:items-end gap-2">
                            <span className="text-lg font-bold">{formatCurrency(order.total)}</span>
                            <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
                              {order.status}
                            </span>
                          </div>
                        </div>
                        <div className="flex gap-3 mt-4">
                          <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border hover:bg-accent transition-colors">
                            <Eye className="h-4 w-4" />
                            View Details
                          </button>
                          {order.status === "Delivered" && (
                            <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border hover:bg-accent transition-colors">
                              <Package className="h-4 w-4" />
                              Reorder
                            </button>
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === "addresses" && (
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold">Saved Addresses</h2>
                    <button className="px-4 py-2 rounded-lg bg-primary text-white hover-glow-red">
                      Add New Address
                    </button>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {addresses.map((address, index) => (
                      <motion.div
                        key={address.id}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        className={`border rounded-lg p-6 ${
                          address.isDefault ? 'border-primary bg-primary/5' : 'border-border'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="font-semibold">{address.type}</h3>
                          {address.isDefault && (
                            <span className="px-2 py-1 bg-primary text-white text-xs rounded-full">
                              Default
                            </span>
                          )}
                        </div>
                        <div className="space-y-1 text-sm">
                          <p className="font-medium">{address.name}</p>
                          <p>{address.address}</p>
                          <p>{address.city}, {address.state} {address.zipCode}</p>
                          <p>{address.phone}</p>
                        </div>
                        <div className="flex gap-2 mt-4">
                          <button className="px-3 py-1 text-sm rounded border border-border hover:bg-accent transition-colors">
                            Edit
                          </button>
                          <button className="px-3 py-1 text-sm rounded border border-border hover:bg-accent transition-colors">
                            Delete
                          </button>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === "payment" && (
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold">Payment Methods</h2>
                    <button className="px-4 py-2 rounded-lg bg-primary text-white hover-glow-red">
                      Add New Card
                    </button>
                  </div>
                  <div className="space-y-4">
                    <div className="border border-border rounded-lg p-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-8 bg-blue-600 rounded flex items-center justify-center">
                            <CreditCard className="h-4 w-4 text-white" />
                          </div>
                          <div>
                            <p className="font-medium">•••• •••• •••• 1234</p>
                            <p className="text-sm text-muted">Expires 12/26</p>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <button className="px-3 py-1 text-sm rounded border border-border hover:bg-accent transition-colors">
                            Edit
                          </button>
                          <button className="px-3 py-1 text-sm rounded border border-border hover:bg-accent transition-colors">
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "settings" && (
                <div>
                  <h2 className="text-2xl font-bold mb-6">Account Settings</h2>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-4">Email Preferences</h3>
                      <div className="space-y-3">
                        <label className="flex items-center gap-3">
                          <input type="checkbox" defaultChecked className="rounded" />
                          <span>Order updates and shipping notifications</span>
                        </label>
                        <label className="flex items-center gap-3">
                          <input type="checkbox" defaultChecked className="rounded" />
                          <span>Product recommendations and promotions</span>
                        </label>
                        <label className="flex items-center gap-3">
                          <input type="checkbox" className="rounded" />
                          <span>Newsletter and company updates</span>
                        </label>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold mb-4">Privacy</h3>
                      <div className="space-y-3">
                        <label className="flex items-center gap-3">
                          <input type="checkbox" defaultChecked className="rounded" />
                          <span>Share purchase history for recommendations</span>
                        </label>
                        <label className="flex items-center gap-3">
                          <input type="checkbox" className="rounded" />
                          <span>Allow analytics and performance tracking</span>
                        </label>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold mb-4">Security</h3>
                      <div className="space-y-4">
                        <button className="px-4 py-2 rounded-lg border border-border hover:bg-accent transition-colors">
                          Change Password
                        </button>
                        <button className="px-4 py-2 rounded-lg border border-border hover:bg-accent transition-colors">
                          Enable Two-Factor Authentication
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </motion.main>
        </div>
      </div>
    </div>
  );
}
