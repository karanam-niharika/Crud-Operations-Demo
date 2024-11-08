// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import "bootstrap-icons/font/bootstrap-icons.css";
// import './App.css';

// const ApiCalling = () => {
//   const [value, setValue] = useState([]);
//   const [newItem, setNewItem] = useState({
//     id: '',
//     title: '',
//     price: '',
//     category: '',
//     image: '',
//     description: ''
//   });
//   const [showInputs, setShowInputs] = useState(false);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get('https://fakestoreapi.com/products');
//         setValue(response.data);
//         console.log(response.data);
//       } catch (error) {
//         console.error('Error fetching the data', error);
//       }
//     };
//     fetchData();
//   }, []);

//   const handleAddItem = () => {
//     setValue([...value, { ...newItem, id: value.length + 1 }]);
//     setNewItem({
//       id: '',
//       title: '',
//       price: '',
//       category: '',
//       image: '',
//       description: ''
//     });
//     setShowInputs(false);
//     toast.success("Item added successfully!");
//   };

//   const handleDeleteItem = (id) => {
//     setValue(value.filter(item => item.id !== id));
//     toast.success("Item deleted successfully!");
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setNewItem({ ...newItem, [name]: value });
//   };

//   const toggleInputs = () => {
//     setShowInputs(!showInputs);
//   };

//   return (
//     <>
//       <ToastContainer />
//       <div className="navContainer">
//         <div className="addingButton">
//           <button className="buttonData" type="button" onClick={toggleInputs}>
//             {showInputs ? 'Hide' : 'Show'} Add New Item 
//           </button>
//         </div>
//       </div>
//       <div className="container mt-5">
//         {showInputs && (
//           <div className="mb-3">
//             <input type="text" name="title" placeholder="Title" value={newItem.title} onChange={handleInputChange} className="form-control mb-2" />
//             <input type="text" name="price" placeholder="Price" value={newItem.price} onChange={handleInputChange} className="form-control mb-2" />
//             <input type="text" name="category" placeholder="Category" value={newItem.category} onChange={handleInputChange} className="form-control mb-2" />
//             <input type="text" name="image" placeholder="Image URL" value={newItem.image} onChange={handleInputChange} className="form-control mb-2" />
//             <input type="text" name="description" placeholder="Description" value={newItem.description} onChange={handleInputChange} className="form-control mb-2" />

//             <button type="button" className="btn btn-success" onClick={handleAddItem}>
//               Add New Item
//             </button>
//           </div>
//         )}
//         <table className="table">
//           <thead>
//             <tr className="table-primary">
//               <th>Id</th>
//               <th>Title</th>
//               <th>Price</th>
//               <th>Category</th>
//               <th>Image</th>
//               <th>Description</th>
//               <th>Action</th>
//             </tr>
//           </thead>
//           <tbody className="table-secondary">
//             {value.map(product => (
//               <tr key={product.id}>
//                 <td>{product.id}</td>
//                 <td>{product.title}</td>
//                 <td>{product.price}</td>
//                 <td>{product.category}</td>
//                 <td><img src={product.image} height={'140px'} width={'150px'} alt={product.title} /></td>
//                 <td>{product.description}</td>
//                 <td>
//                   <div className="twoButtons">
//                     <button className="actionButton" type="button" onClick={() => alert("Edit functionality to be implemented")}>
//                       <i className="bi bi-pencil"></i>
//                     </button>
//                     <button className="dustbin" type="button" onClick={() => handleDeleteItem(product.id)}>
//                       <i className="bi bi-trash"></i>
//                     </button>
//                   </div>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </>
//   );
// };

// export default ApiCalling;
























import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import './App.css';

const ApiCalling = () => {
  const [value, setValue] = useState([]);
  const [newItem, setNewItem] = useState({
    id: '',
    title: '',
    price: '',
    category: '',
    image: '',
    description: ''
  });
  const [showInputs, setShowInputs] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        setValue(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching the data', error);
      }
    };
    fetchData();
  }, []);

  const handleAddItem = () => {
    setValue([...value, { ...newItem, id: value.length + 1 }]);
    setNewItem({
      id: '',
      title: '',
      price: '',
      category: '',
      image: '',
      description: ''
    });
    setShowInputs(false);
    toast.success("Item added successfully!");
  };

  const handleDeleteItem = (id) => {
    setValue(value.filter(item => item.id !== id));
    toast.success("Item deleted successfully!");
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewItem({ ...newItem, [name]: value });
  };

  const toggleInputs = () => {
    setShowInputs(!showInputs);
  };

  return (
    <>
      <ToastContainer />
      <div className="navContainer">
        <div className="addingButton">
          <button className="buttonData" type="button" onClick={toggleInputs}>
            {showInputs ? 'Hide' : 'Show'} Add New Item 
          </button>
        </div>
      </div>
      <div className="container mt-5">
        {showInputs ? (
          <div className="mb-3">
            <input type="text" name="title" placeholder="Title" value={newItem.title} onChange={handleInputChange} className="form-control mb-2" />
            <input type="text" name="price" placeholder="Price" value={newItem.price} onChange={handleInputChange} className="form-control mb-2" />
            <input type="text" name="category" placeholder="Category" value={newItem.category} onChange={handleInputChange} className="form-control mb-2" />
            <input type="text" name="image" placeholder="Image URL" value={newItem.image} onChange={handleInputChange} className="form-control mb-2" />
            <input type="text" name="description" placeholder="Description" value={newItem.description} onChange={handleInputChange} className="form-control mb-2" />

            <button type="button" className="btn btn-success" onClick={handleAddItem}>
              Add New Item
            </button>
          </div>
        ) : (
          <table className="table">
            <thead>
              <tr className="table-primary">
                <th>Id</th>
                <th>Title</th>
                <th>Price</th>
                <th>Category</th>
                <th>Image</th>
                <th>Description</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody className="table-secondary">
              {value.map(product => (
                <tr key={product.id}>
                  <td>{product.id}</td>
                  <td>{product.title}</td>
                  <td>{product.price}</td>
                  <td>{product.category}</td>
                  <td><img src={product.image} height={'140px'} width={'150px'} alt={product.title} /></td>
                  <td>{product.description}</td>
                  <td>
                    <div className="twoButtons">
                      <button className="actionButton" type="button" onClick={() => alert("Edit functionality to be implemented")}>
                        <i className="bi bi-pencil"></i>
                      </button>
                      <button className="dustbin" type="button" onClick={() => handleDeleteItem(product.id)}>
                        <i className="bi bi-trash"></i>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
};

export default ApiCalling;
