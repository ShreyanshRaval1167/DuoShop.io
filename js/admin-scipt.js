let products = [
    { id: 1, name: "Product A", price: 500, stock: 100 },
    { id: 2, name: "Product B", price: 600, stock: 80 },
    { id: 3, name: "Product C", price: 700, stock: 120 }
  ];
  
  // Function to display products in the table
  function displayProducts() {
    const tbody = document.querySelector(".product-list tbody");
    tbody.innerHTML = "";
    products.forEach(product => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td>${product.id}</td>
        <td>${product.name}</td>
        <td>Rs.${product.price}</td>
        <td>${product.stock}</td>
        <td>
          <button class="edit-btn" data-id="${product.id}">Edit</button>
          <button class="delete-btn" data-id="${product.id}">Delete</button>
        </td>
      `;
      tbody.appendChild(tr);
    });
  }
  
  // Function to handle adding a new product
  function addProduct() {
    const newName = prompt("Enter product name:");
    const newPrice = parseFloat(prompt("Enter product price:"));
    const newStock = parseInt(prompt("Enter product stock:"));
    const newId = products.length + 1;
    const newProduct = { id: newId, name: newName, price: newPrice, stock: newStock };
    products.push(newProduct);
    displayProducts();
  }
  
  // Function to handle deleting a product
  function deleteProduct(id) {
    products = products.filter(product => product.id !== id);
    displayProducts();
  }
  
  // Function to handle editing a product
  function editProduct(id) {
    const product = products.find(product => product.id === id);
    document.getElementById("edit-product-id").value = product.id;
    document.getElementById("edit-product-name").value = product.name;
    document.getElementById("edit-product-price").value = product.price;
    document.getElementById("edit-product-stock").value = product.stock;
  }
  
  // Function to save edited product changes
  function saveEdit() {
    const id = parseInt(document.getElementById("edit-product-id").value);
    const name = document.getElementById("edit-product-name").value;
    const price = parseFloat(document.getElementById("edit-product-price").value);
    const stock = parseInt(document.getElementById("edit-product-stock").value);
    const productIndex = products.findIndex(product => product.id === id);
    if (productIndex !== -1) {
      products[productIndex].name = name;
      products[productIndex].price = price;
      products[productIndex].stock = stock;
      displayProducts();
      // Clear edit form fields
      document.getElementById("edit-product-id").value = "";
      document.getElementById("edit-product-name").value = "";
      document.getElementById("edit-product-price").value = "";
      document.getElementById("edit-product-stock").value = "";
    }
  }
  
  // Event listener for Add Product button
  document.querySelector(".add-product-btn").addEventListener("click", addProduct);
  
  // Event delegation for Delete and Edit buttons
  document.querySelector(".product-list").addEventListener("click", function(event) {
    if (event.target.classList.contains("delete-btn")) {
      const id = parseInt(event.target.dataset.id);
      deleteProduct(id);
    } else if (event.target.classList.contains("edit-btn")) {
      const id = parseInt(event.target.dataset.id);
      editProduct(id);
    }
  });
  
  // Event listener for Save Changes button in the edit-product section
  document.querySelector(".save-edit-btn").addEventListener("click", saveEdit);
  
  // Initial display of products
  displayProducts();
// JavaScript for product management

// Function to show the edit product section
function showEditProduct() {
  const editProductSection = document.querySelector('.edit-product');
  editProductSection.style.display = 'block';
}

// Function to hide the edit product section
function hideEditProduct() {
  const editProductSection = document.querySelector('.edit-product');
  editProductSection.style.display = 'none';
}

// Event listener to show edit product section when edit button is clicked
const editButtons = document.querySelectorAll('.edit-btn');
editButtons.forEach(button => {
  button.addEventListener('click', showEditProduct);
});

// Event listener to hide edit product section when cancel button is clicked
const cancelEditButton = document.querySelector('.cancel-edit-btn');
cancelEditButton.addEventListener('click', hideEditProduct);

document.addEventListener("DOMContentLoaded", function() {
    const orderLists = document.querySelectorAll('.order-list');
  
    orderLists.forEach(orderList => {
      orderList.addEventListener('click', function(event) {
        const target = event.target;
        if (target.classList.contains('confirm-order-btn')) {
          confirmOrder(target);
        }
      });
    });
  
    function confirmOrder(button) {
      const order = button.closest('.order');
      // Add code here to confirm the order, for example, sending an API request
      // Once the order is confirmed, you can update the UI as needed, such as changing the order status
      order.classList.add('confirmed');
      button.remove(); // Remove the confirm button after confirming the order
    }
  });

  let users = [
    { user: 1, name: "Shrey", email: "harhar@gmail.com"},
    { user: 2, name: "user B", email: "harhar@gmail.com" },
    { user: 3, name: "user C", email: "harhar@gmail.com"}
  ];
  
  // Function to display users in the table
  function displayUsers() {
    const tbody = document.querySelector(".user-list tbody");
    tbody.innerHTML = "";
    users.forEach(user => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td>${user.user}</td>
        <td>${user.name}</td>
        <td>${user.email}</td>
        <td>
          <button class="edit-btn" data-user="${user.user}">Edit</button>
          <button class="delete-btn" data-user="${user.user}">Delete</button>
        </td>
      `;
      tbody.appendChild(tr);
    });
  }
  
  // Function to handle adding a new user
  function addUser() {
    const newName = prompt("Enter user name:");
    const newEmail = prompt("Enter user email:");
    if (newName && newEmail) {
      const newUser = { user: users.length + 1, name: newName, email: newEmail };
      users.push(newUser);
      displayUsers();
    }
  }
  
  // Function to handle deleting a user
  function deleteUser(userId) {
    users = users.filter(user => user.user !== userId);
    displayUsers();
  }
  
  // Function to handle editing a user
  function editUser(userId) {
    const user = users.find(user => user.user === userId);
    if (user) {
      const newName = prompt("Enter new user name:", user.name);
      const newEmail = prompt("Enter new user email:", user.email);
      if (newName && newEmail) {
        user.name = newName;
        user.email = newEmail;
        displayUsers();
      }
    } else {
      alert("User not found!");
    }
  }
  
  // Event listener for Add user button
  document.querySelector(".add-user-btn").addEventListener("click", addUser);
  
  // Event delegation for Delete and Edit buttons
  document.querySelector(".user-list").addEventListener("click", function(event) {
    if (event.target.classList.contains("delete-btn")) {
      const userId = parseInt(event.target.dataset.user);
      deleteUser(userId);
    } else if (event.target.classList.contains("edit-btn")) {
      const userId = parseInt(event.target.dataset.user);
      editUser(userId);
    }
  });
  
  // Initial display of users
  displayUsers();
  
  
  
// Dummy user data for chart
const userData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [{
      label: 'Number of Users',
      data: [150, 200, 180, 220, 250, 210],
      backgroundColor: 'rgba(54, 162, 235, 0.6)', // Blue color
      borderColor: 'rgba(54, 162, 235, 1)',
      borderWidth: 1
    }]
  };

  // Create the chart
  const ctx = document.getElementById('userChart').getContext('2d');
  const userChart = new Chart(ctx, {
    type: 'bar',
    data: userData,
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });

   // Dummy data for sales chart
   const salesData = {
    labels: ['Product A', 'Product B', 'Product C', 'Product D', 'Product E'],
    datasets: [{
      label: 'Sales',
      data: [200, 300, 150, 400, 250],
      backgroundColor: [
        'rgba(255, 99, 132, 0.6)',
        'rgba(54, 162, 235, 0.6)',
        'rgba(255, 206, 86, 0.6)',
        'rgba(75, 192, 192, 0.6)',
        'rgba(153, 102, 255, 0.6)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)'
      ],
      borderWidth: 1
    }]
  };

  // Create the sales chart
  const salesCtx = document.getElementById('salesChart').getContext('2d');
  const salesChart = new Chart(salesCtx, {
    type: 'bar',
    data: salesData,
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });