import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './menu.css';

function Menu() {
  const [products] = useState([
    { name: 'Pizza', status: 1, price: 10, productId: '101' },
    { name: 'Burger', status: 0, price: 8, productId: '102' },
  ]);

  const [isUpdateOpen, setIsUpdateOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const navigate = useNavigate(); // Hook for navigation

  const toggleUpdateForm = () => setIsUpdateOpen(!isUpdateOpen);
  const toggleDeleteForm = () => setIsDeleteOpen(!isDeleteOpen);

  const handleAddProduct = (e) => {
    e.preventDefault();
    // Add product logic here
  };

  const handleUpdateProduct = (e) => {
    e.preventDefault();
    // Update product logic here
  };

  const handleDeleteProduct = (e) => {
    e.preventDefault();
    // Delete product logic here
  };

  const goToHome = () => {
    navigate('/'); // Navigate to the home page
  };

  return (
    <div className="container mt-5">
      <div className="jumbotron text-center">
        <h1 className="display-4">Restaurant Menu</h1>
        <p className="lead">Welcome to our restaurant menu management system.</p>
      </div>

      <div className="row">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">
              <h3>Add Menu Item</h3>
            </div>
            <div className="card-body">
              <form onSubmit={handleAddProduct}>
                <div className="form-group">
                  <label htmlFor="name">Name:</label>
                  <input type="text" className="form-control" id="name" name="name" required />
                </div>

                <div className="form-group">
                  <label htmlFor="status">Availability:</label>
                  <input
                    type="text"
                    placeholder="0 for not available, 1 for available"
                    className="form-control"
                    id="status"
                    name="status"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="price">Price:</label>
                  <input type="number" className="form-control" id="price" name="price" required />
                </div>

                <button type="submit" className="btn btn-primary">Add Menu Item</button>
              </form>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card">
            <div className="card-header">
              <h3>Update or Delete Menu Item</h3>
            </div>
            <div className="card-body">
              <div className="btn-group" role="group" aria-label="Update or Delete">
                <button type="button" className="btn btn-secondary" onClick={toggleUpdateForm}>
                  Update
                </button>
                <button type="button" className="btn btn-secondary" onClick={toggleDeleteForm}>
                  Delete
                </button>
              </div>

              {isUpdateOpen && (
                <div className="mt-3">
                  <form onSubmit={handleUpdateProduct}>
                    <div className="form-group">
                      <label htmlFor="productNameUpdate">Product Name:</label>
                      <select id="productNameUpdate" name="productNameUpdate" className="form-control" required>
                        {products.map((product) => (
                          <option key={product.productId} value={product.name}>
                            {product.name}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="form-group">
                      <label htmlFor="nameUpdate">Name:</label>
                      <input type="text" className="form-control" id="nameUpdate" name="nameUpdate" />
                    </div>

                    <div className="form-group">
                      <label htmlFor="statusUpdate">Availability:</label>
                      <input
                        type="text"
                        placeholder="0 for not available, 1 for available"
                        className="form-control"
                        id="statusUpdate"
                        name="statusUpdate"
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="priceUpdate">New Price:</label>
                      <input type="number" className="form-control" id="priceUpdate" name="priceUpdate" />
                    </div>

                    <button type="submit" className="btn btn-primary">Update Menu Item</button>
                  </form>
                </div>
              )}

              {isDeleteOpen && (
                <div className="mt-3">
                  <form onSubmit={handleDeleteProduct}>
                    <div className="form-group">
                      <label htmlFor="productNameDelete">Product Name:</label>
                      <select id="productNameDelete" name="productNameDelete" className="form-control" required>
                        {products.map((product) => (
                          <option key={product.productId} value={product.name}>
                            {product.name}
                          </option>
                        ))}
                      </select>
                    </div>

                    <button type="submit" className="btn btn-danger">Delete Menu Item</button>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-5">
        <h3>Product List</h3>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Status</th>
              <th>Price</th>
              <th>Product ID</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.productId}>
                <td>{product.name}</td>
                <td>{product.status === 1 ? 'Available' : 'Not Available'}</td>
                <td>{product.price}</td>
                <td>{product.productId}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Home Button */}
      <div className="text-center mt-4">
        <button onClick={goToHome} className="btn btn-success">Go to Home</button>
      </div>
    </div>
  );
}

export default Menu;
