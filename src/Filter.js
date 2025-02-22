// import React, { useState } from 'react';
// import './Filter.css';
// const Filter = ({ onFilter }) => {
//   const [filters, setFilters] = useState({});

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFilters({
//       ...filters,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onFilter(filters);
//   };

//   return (
//     <form onSubmit={handleSubmit} className="filter-form">
//       <div>
//         <label>Price</label>
//         <select name="price" onChange={handleChange}>
//           <option value="">Select</option>
//           <option value="Below 100">Below Rs.100</option>
//           <option value="101-200">Rs.101-200</option>
//         </select>
//       </div>
//       <div>
//         <label>Brand</label>
//         <select name="brand" onChange={handleChange}>
//           <option value="">Select</option>
//           <option value="Dabur">Dabur</option>
//           <option value="Veet">Veet</option>
//         </select>
//       </div>
//       <div>
//         <label>Ideal For</label>
//         <select name="gender" onChange={handleChange}>
//           <option value="">Select</option>
//           <option value="Men">Men</option>
//           <option value="Women">Women</option>
//         </select>
//       </div>
//       <button type="submit">Apply Filter</button>
//     </form>
//   );
// };

// export default Filter;



import React, { useState } from 'react';
import './Filter.css';

const filterOptions = {
  brand: ['Himalaya', 'Lakme', 'Raaga', 'Cosmetofood', 'Mamaearth', 'Biotique'],
  price: ['Below 500', '500-800'],
  gender: ['Men', 'Women', 'Unisex'],
};

const CheckboxGroup = ({ name, options, onChange }) => {
  return (
    <div>
      <label>{name.charAt(0).toUpperCase() + name.slice(1)}</label>
      {options.map((option) => (
        <div key={option}>
          <label>
            <input type="checkbox" name={name} value={option} onChange={onChange} />
            {option}
          </label>
        </div>
      ))}
    </div>
  );
};

const Filter = ({ onFilter }) => {
  const [filters, setFilters] = useState({
    price: [],
    brand: [],
    gender: [],
  });

  const handleChange = (e) => {
    const { name, value, checked } = e.target;

    setFilters((prevFilters) => {
      const newFilters = { ...prevFilters };
      if (checked) {
        newFilters[name].push(value);
      } else {
        newFilters[name] = newFilters[name].filter((item) => item !== value);
      }
      return newFilters;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onFilter(filters);
  };

  return (
    <form onSubmit={handleSubmit} className="filter-form">
      {Object.keys(filterOptions).map((key) => (
        <CheckboxGroup
          key={key}
          name={key}
          options={filterOptions[key]}
          onChange={handleChange}
        />
      ))}
      <button type="submit">Apply Filter</button>
    </form>
  );
};

export default Filter;
