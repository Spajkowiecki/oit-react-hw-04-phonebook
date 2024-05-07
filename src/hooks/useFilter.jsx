import { useState } from 'react';

export default function useFilter() {
  const [filter, setFilter] = useState('');

  const FilterContacts = contacts => {
    return contacts.filter(filteredContacts => {
      return (
        filteredContacts.name.toLowerCase().includes(filter.toLowerCase()) ||
        filteredContacts.phone.toLowerCase().includes(filter.toLowerCase()) ||
        filteredContacts.email.toLowerCase().includes(filter.toLowerCase())
      );
    });
  };

  return { filter, setFilter, FilterContacts };
}
