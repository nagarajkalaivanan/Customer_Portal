import React, { useEffect, useState } from 'react';
import CustomerDetails from './Customer_Details';
import { Customer } from '../types/customer';
import CustomerSideBar from './Customer_Sidebar';

const CustomerView: React.FC = () => {
  const [customers,setCustomers] = useState<Customer[]>([]);
  const [selectedCustomerId, setSelectedCustomerId] = useState<number | null>(null);


   useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const response = await fetch('/customer.json');
        const data = await response.json();
        setCustomers(data);
      } catch (error) {
        console.error('Error fetching customer data:', error);
      }
    };

    fetchCustomers();
  }, []);

  const selectedCustomer = customers.find((customer) => customer.id === selectedCustomerId) || null;

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Customer Details Portal</h1>
      </header>

      <div className="app-main">
        <CustomerSideBar
          customers={customers}
          selectedCustomerId={selectedCustomerId}
          onSelectCustomer={setSelectedCustomerId}
        />
        <CustomerDetails customer={selectedCustomer} />
      </div>
    </div>
  );
};

export default CustomerView;
