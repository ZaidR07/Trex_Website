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
  const [showForm, setShowForm] = useState(false);
  const [selectedClient, setSelectedClient] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortField, setSortField] = useState("createdAt");
  const [sortDirection, setSortDirection] = useState("desc");
  const [formData, setFormData] = useState({
    dbname: "",
    email: "",
    number: "",
    campanyname: "",
    date: "",
    amount: "",
    payment: "",
    balance: "",
    emailPack: 0,
  });

  const [clients, setClients] = useState([]);
  const [client_id, setClientId] = useState(null);

  const LoadData = async () => {
    try {
      const response = await axios.get(`${URI}getgstinvoiceclients`,{
        params: {
          db: "invoiceclient",
        },
      });
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prev) => {
      const updated = {
        ...prev,
        [name]: value,
      };

      if (name === "amount" || name === "payment") {
        const amount = parseFloat(updated.amount) || 0;
        const payment = parseFloat(updated.payment) || 0;
        updated.balance = (amount - payment).toString().replace(/\.00$/, "");
      }

      return updated;
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (
        !formData.dbname ||
        !formData.email ||
        !formData.number ||
        !formData.campanyname ||
        !formData.date ||
        !formData.amount ||
        !formData.payment
      ) {
        alert("Please fill in all required fields");
        return;
      }

      const payload = {
        formData: {
          ...formData,
          amount: parseFloat(formData.amount),
          payment: parseFloat(formData.payment),
          balance: parseFloat(formData.balance),
          emailPack: parseInt(formData.emailPack) || 0,
        },
        client_id: client_id,
      };

      const response = await axios.post(`${URI}addupdategstinvoiceclient`, payload);

      alert(response.data.message);

      LoadData();

      setFormData({
        dbname: "",
        email: "",
        number: "",
        campanyname: "",
        date: "",
        amount: "",
        payment: "",
        balance: "",
        emailPack: 0,
      });
      setShowForm(false);
      setClientId(null);
      setSelectedClient(null);
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
      campanyname: client.campanyname,
      date: client.date,
      amount: client.amount.toString(),
      payment: client.payment.toString(),
      balance: client.balance.toString().replace(/\.00$/, ""),
      emailPack: client.emailPack,
    });
    setClientId(client.client_id);
    setShowForm(true);
  };

  const handleCancel = () => {
    setFormData({
      dbname: "",
      email: "",
      number: "",
      campanyname: "",
      date: "",
      amount: "",
      payment: "",
      balance: "",
      emailPack: 0,
    });
    setShowForm(false);
    setClientId(null);
    setSelectedClient(null);
  };

  // Filter and sort clients
  const filteredAndSortedClients = clients
    .filter(
      (client) =>
        client.dbname?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        client.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        client.campanyname?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        client.client_id?.toString().includes(searchTerm)
    )
    .sort((a, b) => {
      let aValue = a[sortField];
      let bValue = b[sortField];

      // Handle undefined or null values
      if (aValue === undefined || aValue === null) aValue = "";
      if (bValue === undefined || bValue === null) bValue = "";

      if (typeof aValue === "string") {
        aValue = aValue.toLowerCase();
        bValue = typeof bValue === "string" ? bValue.toLowerCase() : bValue;
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
          onClick={() => setShowForm(true)}
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

      {/* Unified Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-2xl p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">
                {selectedClient ? "Edit Client" : "Add New Client"}
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
                    disabled={!!selectedClient}
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
                    htmlFor="campanyname"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Campany Name *
                  </label>
                  <input
                    type="text"
                    id="campanyname"
                    name="campanyname"
                    value={formData.campanyname}
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
                    disabled={!!selectedClient}
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
                    readOnly
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-100 cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                  {selectedClient ? "Update Client" : "Add Client"}
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
                    onClick={() => handleSort("campanyname")}
                  >
                    Classes
                    {sortField === "campanyname" && (
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
                        {client.campanyname}
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
              onClick={() => setShowForm(true)}
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