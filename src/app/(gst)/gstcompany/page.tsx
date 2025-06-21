"use client";

import React, { useState } from "react";
import {
  Users,
  Mail,
  MessageSquare,
  Package,
  DollarSign,
  BarChart3,
} from "lucide-react";

import Clients from "@/app/(gst)/components/Clients";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  const dashboardStats = [
    {
      title: "Total Clients",
      value: "1,247",
      icon: Users,
      color: "bg-blue-500",
      textColor: "text-blue-600",
    },
    {
      title: "Emails Remaining",
      value: "45,230",
      icon: Mail,
      color: "bg-green-500",
      textColor: "text-green-600",
    },
    {
      title: "SMS Remaining",
      value: "12,450",
      icon: MessageSquare,
      color: "bg-purple-500",
      textColor: "text-purple-600",
    },
    {
      title: "Packages Expiring",
      value: "23",
      subtitle: "This Month",
      icon: Package,
      color: "bg-orange-500",
      textColor: "text-orange-600",
    },
    {
      title: "Receivable Payments",
      value: "₹2,45,600",
      icon: DollarSign,
      color: "bg-red-500",
      textColor: "text-red-600",
    },
  ];

  const sidebarItems = [
    { id: "dashboard", label: "Dashboard", icon: BarChart3 },
    { id: "clients", label: "Clients", icon: Users },
  ];

  const renderDashboard = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900">Dashboard Overview</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {dashboardStats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center justify-between">
                <div className="space-y-2">
                  <p className="text-sm font-medium text-gray-600">
                    {stat.title}
                  </p>
                  <p className="text-3xl font-bold text-gray-900">
                    {stat.value}
                  </p>
                  {stat.subtitle && (
                    <p className="text-sm text-gray-500">{stat.subtitle}</p>
                  )}
                </div>
                <div className={`${stat.color} p-3 rounded-lg`}>
                  <Icon className="h-6 w-6 text-white" />
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-100">
                <div className={`flex items-center text-sm ${stat.textColor}`}>
                  <span className="font-medium">View Details →</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );


  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-xl">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-xl font-bold text-gray-800">CMS Dashboard</h2>
        </div>

        <nav className="p-4 space-y-2">
          {sidebarItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center px-4 py-3 rounded-lg text-left transition-colors ${
                  activeTab === item.id
                    ? "bg-blue-100 text-blue-700 border-r-2 border-blue-700"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                <Icon className="h-5 w-5 mr-3" />
                {item.label}
              </button>
            );
          })}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1">
        {/* Header */}
        <header className="bg-white shadow-sm border-b border-gray-200 p-4">
          <div className="flex items-center">
            <div className="flex items-center space-x-4">
              <div>
                <h1 className="text-lg font-semibold text-gray-900">
                  {sidebarItems.find((item) => item.id === activeTab)?.label}
                </h1>
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="p-6">
          {activeTab === "dashboard" && renderDashboard()}
          {activeTab === "clients" && <Clients/>}
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
