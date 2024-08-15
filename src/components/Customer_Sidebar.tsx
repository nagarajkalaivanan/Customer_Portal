import React from "react";
import { Customer } from "../types/customer";

interface SidebarProps {
    customers: Customer[];
    selectedCustomerId: number | null;
    onSelectCustomer: (customerId: number) => void;
  }

const CustomerSideBar :React.FC<SidebarProps> = ({ customers, selectedCustomerId, onSelectCustomer }) => {
    return (
      <div className="sidebar">
        {customers.map((customer) => (
          <div
            key={customer.id}
            className={`customer-card ${selectedCustomerId === customer.id ? 'selected' : ''}`}
            onClick={() => onSelectCustomer(customer.id)}
          >
            <h3>{customer.title}</h3>
            <h4>{customer.name}</h4>
          </div>
        ))}
      </div>
    );
  };
  
  export default CustomerSideBar;