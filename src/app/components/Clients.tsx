"use client";
import React, { useEffect, useState } from "react";
import {
  Users,
  Plus,
  X,
  Search,
  Filter,
  Calendar,
  Mail,
  Phone,
  Edit2,
} from "lucide-react";
import axios from "axios";
import { URI } from "@/contant";

const Clients = () => {
  const [showAddForm, setShowAddForm] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);
  const [selectedClient, setSelectedClient] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortField, setSortField] = useState("createdAt");
  const [sortDirection, setSortDirection] = useState("desc");
  const [formData, setFormData] = useState({
    dbname: "",
    email: "",
    number: "",
    classesname: "",
    date: "",
    amount: "",
    payment: "",
    balance: "",
    emailPack: 0,
    smsPack: 0,
  });

  const [clients, setClients] = useState([]);

  const [client_id, setClientId] = useState([]);

  const LoadData = async () => {
    try {
      const response = await axios.get(`${URI}getcmsclients`);
      setClients(response.data.payload);
    } catch (error) {
      if (error.response?.data?.payload) {
        alert(error.response.data.payload);
      } else {
        alert("Something Went Wrong");
      }
    }
  };

  useEffect(() => {
    LoadData();
  }, []);

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      // Validate required fields
      if (
        !formData.dbname ||
        !formData.email ||
        !formData.number ||
        !formData.classesname ||
        !formData.date ||
        !formData.amount ||
        !formData.payment ||
        !formData.balance
      ) {
        alert("Please fill in all required fields");
        return;
      }

      const response = await axios.post(`${URI}addclient`, {
        formData,
      });

      alert(response.data.message);

      // Refresh data from server
      LoadData();

      // Reset form and close modal
      setFormData({
        dbname: "",
        email: "",
        number: "",
        classesname: "",
        date: "",
        amount: "",
        payment: "",
        balance: "",
        emailPack: 0,
        smsPack: 0,
      });

      setShowAddForm(false);
    } catch (error) {
      alert("Something went wrong");
    }
  };

  const handleEditClick = (client) => {
    setSelectedClient(client);
    setFormData({
      dbname: client.dbname,
      email: client.email,
      number: client.number,
      classesname: client.classesname,
      date: client.date,
      amount: client.amount.toString(),
      payment: client.payment.toString(),
      balance: client.balance.toString(),
      emailPack: client.emailPack,
      smsPack: client.smsPack,
    });
    setClientId(client.client_id);

    setShowEditForm(true);
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      // Validate required fields
      if (
        !formData.email ||
        !formData.number ||
        !formData.classesname ||
        !formData.amount ||
        !formData.payment ||
        !formData.balance
      ) {
        alert("Please fill in all required fields");
        return;
      }

      // Update client in local state
      const updatedClient = {
        //@ts-expect-error err
        ...selectedClient,
        email: formData.email,
        number: formData.number,
        classesname: formData.classesname,
        amount: parseFloat(formData.amount),
        payment: parseFloat(formData.payment),
        balance: parseFloat(formData.balance),
        emailPack: parseInt(formData.emailPack) || 0,
        smsPack: parseInt(formData.smsPack) || 0,
        admin_id: formData.email,
      };

      await axios.post(`${URI}updateclient`, {
        data: updatedClient,
        client_id: client_id,
      });

      // Refresh data from server
      LoadData();

      // Reset form and close modal
      setFormData({
        dbname: "",
        email: "",
        number: "",
        classesname: "",
        date: "",
        amount: "",
        payment: "",
        balance: "",
        emailPack: 0,
        smsPack: 0,
      });
      setShowEditForm(false);
      setSelectedClient(null);
    } catch (error) {
      //@ts-expect-error err
      if (error.res.data.message) {
        //@ts-expect-error err
        alert(error.res.data.message);
      } else {
        alert("Something went wrong");
      }
    }
  };

  const handleCancel = () => {
    setFormData({
      dbname: "",
      email: "",
      number: "",
      classesname: "",
      date: "",
      amount: "",
      payment: "",
      balance: "",
      emailPack: 0,
      smsPack: 0,
    });
    setShowAddForm(false);
    setShowEditForm(false);
    setSelectedClient(null);
  };

  // Filter and sort clients
  const filteredAndSortedClients = clients
    .filter(
      (client) =>
        client.dbname.toLowerCase().includes(searchTerm.toLowerCase()) ||
        client.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        client.classesname.toLowerCase().includes(searchTerm.toLowerCase()) ||
        client.client_id.toString().includes(searchTerm)
    )
    .sort((a, b) => {
      let aValue = a[sortField];
      let bValue = b[sortField];

      if (typeof aValue === "string") {
        aValue = aValue.toLowerCase();
        bValue = bValue.toLowerCase();
      }

      if (sortDirection === "asc") {
        return aValue > bValue ? 1 : -1;
      } else {
        return aValue < bValue ? 1 : -1;
      }
    });

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
    }).format(amount);
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-IN", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const handleSort = (field) => {
    if (sortField === field) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortDirection("asc");
    }
  };

  return (
    <div className="space-y-6 p-6 bg-gray-50 min-h-screen">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900">Clients Management</h1>
        <button
          onClick={() => setShowAddForm(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2 shadow-lg"
        >
          <Plus className="h-4 w-4" />
          Add New Client
        </button>
      </div>

      {/* Search and Filter Bar */}
      <div className="bg-white rounded-xl shadow-lg p-4">
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <input
              type="text"
              placeholder="Search clients..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Filter className="h-4 w-4" />
            <span>Total Clients: {filteredAndSortedClients.length}</span>
          </div>
        </div>
      </div>

      {/* Add Client Form Modal */}
      {showAddForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-2xl p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">
                Add New Client
              </h2>
              <button
                onClick={handleCancel}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="dbname"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Database Name *
                  </label>
                  <input
                    type="text"
                    id="dbname"
                    name="dbname"
                    value={formData.dbname}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter database name"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="client@example.com"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="number"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="number"
                    name="number"
                    value={formData.number}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="+91 9876543210"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="classesname"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Classes Name *
                  </label>
                  <input
                    type="text"
                    id="classesname"
                    name="classesname"
                    value={formData.classesname}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter class name"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="date"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Date *
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="amount"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Amount *
                  </label>
                  <input
                    type="number"
                    id="amount"
                    name="amount"
                    value={formData.amount}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="0"
                    min="0"
                    step="0.01"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="payment"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Payment *
                  </label>
                  <input
                    type="number"
                    id="payment"
                    name="payment"
                    value={formData.payment}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="0"
                    min="0"
                    step="0.01"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="balance"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Balance *
                  </label>
                  <input
                    type="number"
                    id="balance"
                    name="balance"
                    value={formData.balance}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="0"
                    min="0"
                    step="0.01"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="emailPack"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email Pack
                  </label>
                  <input
                    type="number"
                    id="emailPack"
                    name="emailPack"
                    value={formData.emailPack}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Number of emails"
                    min="0"
                  />
                </div>

                <div>
                  <label
                    htmlFor="smsPack"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    SMS Pack
                  </label>
                  <input
                    type="number"
                    id="smsPack"
                    name="smsPack"
                    value={formData.smsPack}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Number of SMS"
                    min="0"
                  />
                </div>
              </div>

              <div className="flex justify-end space-x-3 pt-6 border-t border-gray-200">
                <button
                  type="button"
                  onClick={handleCancel}
                  className="px-4 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Add Client
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Edit Client Form Modal */}
      {showEditForm && selectedClient && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-2xl p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Edit Client</h2>
              <button
                onClick={handleCancel}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="dbname"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Database Name
                  </label>
                  <input
                    type="text"
                    id="dbname"
                    name="dbname"
                    value={formData.dbname}
                    disabled
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-100"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="wfull px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="client@example.com"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="number"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="number"
                    name="number"
                    value={formData.number}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="+91 9876543210"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="classesname"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Classes Name *
                  </label>
                  <input
                    type="text"
                    id="classesname"
                    name="classesname"
                    value={formData.classesname}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter class name"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="date"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Date
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    disabled
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-100"
                  />
                </div>

                <div>
                  <label
                    htmlFor="amount"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Amount *
                  </label>
                  <input
                    type="number"
                    id="amount"
                    name="amount"
                    value={formData.amount}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="0"
                    min="0"
                    step="0.01"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="payment"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Payment *
                  </label>
                  <input
                    type="number"
                    id="payment"
                    name="payment"
                    value={formData.payment}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="0"
                    min="0"
                    step="0.01"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="balance"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Balance *
                  </label>
                  <input
                    type="number"
                    id="balance"
                    name="balance"
                    value={formData.balance}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="0"
                    min="0"
                    step="0.01"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="emailPack"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email Pack
                  </label>
                  <input
                    type="number"
                    id="emailPack"
                    name="emailPack"
                    value={formData.emailPack}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Number of emails"
                    min="0"
                  />
                </div>

                <div>
                  <label
                    htmlFor="smsPack"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    SMS Pack
                  </label>
                  <input
                    type="number"
                    id="smsPack"
                    name="smsPack"
                    value={formData.smsPack}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Number of SMS"
                    min="0"
                  />
                </div>
              </div>

              <div className="flex justify-end space-x-3 pt-6 border-t border-gray-200">
                <button
                  type="button"
                  onClick={handleCancel}
                  className="px-4 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={handleUpdate}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Update Client
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Clients Data Table */}
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        {clients.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                    onClick={() => handleSort("client_id")}
                  >
                    Client ID
                    {sortField === "client_id" && (
                      <span className="ml-1">
                        {sortDirection === "asc" ? "↑" : "↓"}
                      </span>
                    )}
                  </th>
                  <th
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                    onClick={() => handleSort("dbname")}
                  >
                    Database
                    {sortField === "dbname" && (
                      <span className="ml-1">
                        {sortDirection === "asc" ? "↑" : "↓"}
                      </span>
                    )}
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Contact Info
                  </th>
                  <th
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                    onClick={() => handleSort("classesname")}
                  >
                    Classes
                    {sortField === "classesname" && (
                      <span className="ml-1">
                        {sortDirection === "asc" ? "↑" : "↓"}
                      </span>
                    )}
                  </th>
                  <th
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                    onClick={() => handleSort("date")}
                  >
                    Date
                    {sortField === "date" && (
                      <span className="ml-1">
                        {sortDirection === "asc" ? "↑" : "↓"}
                      </span>
                    )}
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Financial Details
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Packs
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredAndSortedClients.map((client, index) => (
                  <tr
                    key={client.client_id}
                    className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
                  >
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">
                        {client.client_id}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900 font-medium">
                        {client.dbname}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex flex-col space-y-1">
                        <div className="flex items-center text-sm text-gray-900">
                          <Mail className="h-3 w-3 mr-1 text-gray-400" />
                          {client.email}
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <Phone className="h-3 w-3 mr-1 text-gray-400" />
                          {client.number}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-900">
                        {client.classesname}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center text-sm text-gray-900">
                        <Calendar className="h-3 w-3 mr-1 text-gray-400" />
                        {formatDate(client.date)}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex flex-col space-y-1">
                        <div className="text-sm text-gray-900">
                          <span className="font-medium">Amount:</span>{" "}
                          {formatCurrency(client.amount)}
                        </div>
                        <div className="text-sm text-green-600">
                          <span className="font-medium">Paid:</span>{" "}
                          {formatCurrency(client.payment)}
                        </div>
                        <div
                          className={`text-sm font-medium ${
                            client.balance > 0
                              ? "text-red-600"
                              : "text-green-600"
                          }`}
                        >
                          <span>Balance:</span> {formatCurrency(client.balance)}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex flex-col space-y-1">
                        <div className="text-sm text-blue-600">
                          <span className="font-medium">Emails:</span>{" "}
                          {client.emailPack || 0}
                        </div>
                        <div className="text-sm text-purple-600">
                          <span className="font-medium">SMS:</span>{" "}
                          {client.smsPack || 0}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <button
                        onClick={() => handleEditClick(client)}
                        className="text-blue-600 hover:text-blue-800 transition-colors"
                      >
                        <Edit2 className="h-4 w-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="text-center py-12">
            <Users className="h-16 w-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              No Clients Yet
            </h3>
            <p className="text-gray-500 mb-4">
              Start by adding your first client to manage their information.
            </p>
            <button
              onClick={() => setShowAddForm(true)}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors inline-flex items-center gap-2"
            >
              <Plus className="h-4 w-4" />
              Add Your First Client
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Clients;
