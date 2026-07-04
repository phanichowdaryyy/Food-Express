// DOM Elements
const pageContent = document.getElementById('page-content');

// Mock data for restaurants
const restaurants = [
  {
    id: '1',
    name: 'Pizza Palace',
    image: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    cuisine: 'Italian, Pizza',
    rating: 4.7,
    deliveryTime: '25-35 min',
    priceRange: '$$',
    discount: '50% OFF',
    isPromoted: true,
  },
  {
    id: '2',
    name: 'Burger House',
    image: 'https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    cuisine: 'American, Burgers',
    rating: 4.5,
    deliveryTime: '15-25 min',
    priceRange: '$$',
    discount: '30% OFF',
  },
  {
    id: '3',
    name: 'Thai Delight',
    image: 'https://images.unsplash.com/photo-1503764654157-72d979d9af2f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    cuisine: 'Thai, Asian',
    rating: 4.8,
    deliveryTime: '30-40 min',
    priceRange: '$$$',
    isPromoted: true,
    veg: true,
  },
  {
    id: '4',
    name: 'Spice Garden',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    cuisine: 'Indian, Curry',
    rating: 4.6,
    deliveryTime: '35-45 min',
    priceRange: '$$',
    veg: true,
  },
  {
    id: '5',
    name: 'Sweet Treats',
    image: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    cuisine: 'Desserts, Bakery',
    rating: 4.9,
    deliveryTime: '20-30 min',
    priceRange: '$$',
    discount: '15% OFF',
  },
  {
    id: '6',
    name: 'Sushi Bar',
    image: 'https://images.unsplash.com/photo-1540648639573-8c848de23f0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    cuisine: 'Japanese, Sushi',
    rating: 4.7,
    deliveryTime: '25-35 min',
    priceRange: '$$$',
    isPromoted: true,
  },
  {
    id: '7',
    name: 'Taco Fiesta',
    image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    cuisine: 'Mexican, Tacos',
    rating: 4.3,
    deliveryTime: '20-30 min',
    priceRange: '$',
    discount: '20% OFF',
  },
  {
    id: '8',
    name: 'Green Bowl',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    cuisine: 'Salads, Healthy',
    rating: 4.5,
    deliveryTime: '15-25 min',
    priceRange: '$$',
    veg: true,
  },
];

// Mock data for popular items
const popularItems = [
  {
    id: '1',
    name: 'Margherita Pizza',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    price: '$12.99',
    restaurant: 'Pizza Palace',
    rating: 4.7
  },
  {
    id: '2',
    name: 'Classic Burger',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    price: '$9.99',
    restaurant: 'Burger House',
    rating: 4.5
  },
  {
    id: '3',
    name: 'Pad Thai',
    image: 'https://images.unsplash.com/photo-1559314809-0d155014e29e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    price: '$14.50',
    restaurant: 'Thai Delight',
    rating: 4.8
  },
  {
    id: '4',
    name: 'Chicken Biryani',
    image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    price: '$15.99',
    restaurant: 'Spice Garden',
    rating: 4.6
  },
  {
    id: '5',
    name: 'Chocolate Cake',
    image: 'https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    price: '$8.50',
    restaurant: 'Sweet Treats',
    rating: 4.9
  },
  {
    id: '6',
    name: 'Sushi Platter',
    image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    price: '$24.99',
    restaurant: 'Sushi Bar',
    rating: 4.7
  },
];

// Menu data for food items section
const foodItems = [
  {
    id: 'f1',
    name: 'Margherita Pizza',
    description: 'Classic tomato sauce, mozzarella, fresh basil',
    price: '$12.99',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    category: 'Pizza'
  },
  {
    id: 'f2',
    name: 'Double Cheeseburger',
    description: 'Two beef patties, cheese, lettuce, pickles, special sauce',
    price: '$9.99',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    category: 'Burger'
  },
  {
    id: 'f3',
    name: 'Chicken Biryani',
    description: 'Fragrant basmati rice cooked with tender chicken and spices',
    price: '$14.99',
    image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    category: 'Indian'
  },
  {
    id: 'f4',
    name: 'Vegan Buddha Bowl',
    description: 'Quinoa, avocado, roasted vegetables, tahini dressing',
    price: '$11.99',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    category: 'Healthy'
  },
  {
    id: 'f5',
    name: 'Fish & Chips',
    description: 'Beer-battered cod with crispy fries and tartar sauce',
    price: '$13.99',
    image: 'https://images.unsplash.com/photo-1576777647209-e8733d7b851d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    category: 'Seafood'
  },
  {
    id: 'f6',
    name: 'Chocolate Brownie Sundae',
    description: 'Warm brownie with vanilla ice cream and hot fudge',
    price: '$7.99',
    image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    category: 'Dessert'
  },
  {
    id: 'f7',
    name: 'Pad Thai',
    description: 'Stir-fried rice noodles with egg, tofu, bean sprouts, peanuts',
    price: '$12.99',
    image: 'https://images.unsplash.com/photo-1559314809-0d155014e29e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    category: 'Thai'
  },
  {
    id: 'f8',
    name: 'California Sushi Roll',
    description: 'Crab, avocado, cucumber, wrapped in seaweed and rice',
    price: '$10.99',
    image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    category: 'Sushi'
  }
];

// Mock restaurant details data
const restaurantDetails = {
  id: '4',
  name: 'Spice Garden',
  coverImage: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
  logo: 'https://images.unsplash.com/photo-1571066811602-716837d681de?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
  cuisine: 'Indian, Curry, Vegetarian',
  rating: 4.6,
  reviewCount: 728,
  deliveryTime: '35-45 min',
  distance: '1.5 km',
  priceRange: '$$',
  discount: '50% OFF up to $10',
  address: '123 Main Street, Foodville, NY 10001',
  menuCategories: ['Starters', 'Main Course', 'Bread', 'Rice', 'Desserts', 'Drinks'],
  menuItems: [
    {
      id: 's1',
      name: 'Samosa',
      description: 'Crispy pastry filled with spiced potatoes and peas',
      price: '$4.99',
      image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      isVeg: true,
      isPopular: true,
      category: 'Starters'
    },
    {
      id: 's2',
      name: 'Paneer Tikka',
      description: 'Grilled Indian cottage cheese marinated in spices',
      price: '$8.99',
      image: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      isVeg: true,
      isPopular: true,
      category: 'Starters'
    },
    {
      id: 'm1',
      name: 'Paneer Butter Masala',
      description: 'Cottage cheese cubes in a rich tomato and butter sauce',
      price: '$14.99',
      image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      isVeg: true,
      isPopular: true,
      category: 'Main Course'
    },
    {
      id: 'm2',
      name: 'Chicken Tikka Masala',
      description: 'Grilled chicken in a spiced curry sauce',
      price: '$16.99',
      image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      isVeg: false,
      isPopular: true,
      category: 'Main Course'
    },
    {
      id: 'b1',
      name: 'Garlic Naan',
      description: 'Leavened bread with garlic and butter',
      price: '$3.99',
      image: 'https://images.unsplash.com/photo-1633263482380-d693023382be?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      isVeg: true,
      isPopular: false,
      category: 'Bread'
    },
    {
      id: 'r1',
      name: 'Jeera Rice',
      description: 'Basmati rice cooked with cumin seeds',
      price: '$5.99',
      image: 'https://images.unsplash.com/photo-1596797038534-2926ac528d2b?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      isVeg: true,
      isPopular: false,
      category: 'Rice'
    },
    {
      id: 'd1',
      name: 'Gulab Jamun',
      description: 'Sweet milk dumplings soaked in rose syrup',
      price: '$6.99',
      image: 'https://images.unsplash.com/photo-1589466725882-f47191371b64?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      isVeg: true,
      isPopular: true,
      category: 'Desserts'
    },
    {
      id: 'dr1',
      name: 'Mango Lassi',
      description: 'Yogurt drink with mango and cardamom',
      price: '$4.99',
      image: 'https://images.unsplash.com/photo-1626078497839-9b3ae0654f29?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      isVeg: true,
      isPopular: false,
      category: 'Drinks'
    }
  ]
};

// Mock order data
const orderData = {
  orderId: "FE-" + Math.floor(100000 + Math.random() * 900000),
  restaurantName: "Spice Garden",
  items: [
    { name: "Paneer Butter Masala", quantity: 1, price: 240 },
    { name: "Garlic Naan", quantity: 2, price: 60 },
    { name: "Dal Tadka", quantity: 1, price: 180 },
  ],
  subtotal: 540,
  deliveryFee: 40,
  tax: 27,
  total: 607,
  address: "123 Main Street, Apartment 4B, Bangalore",
  estimatedDelivery: "30-35 min",
  paymentMethod: "Paid Online (Credit Card)"
};

// App state
let currentPage = 'home';
let selectedRestaurantId = '';
let selectedCategory = 'All';
let cartItems = {};
let isFavorite = false;

// Categories data
const categories = [
  'All', 'Pizza', 'Burger', 'Chinese', 'Italian', 'Indian', 
  'Mexican', 'Thai', 'Sushi', 'Dessert', 'Healthy', 'Vegetarian'
];

// Initialization
document.addEventListener('DOMContentLoaded', function() {
  // Initialize Lucide icons
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }
  
  // Initialize route handling based on URL
  handleRouting();
  
  // Add event listener for browser navigation
  window.addEventListener('popstate', handleRouting);
});

// Rendering functions
function renderHomePage() {
  const template = document.getElementById('home-template');
  pageContent.innerHTML = '';
  pageContent.appendChild(template.content.cloneNode(true));
  
  // Render popular items
  renderPopularItems();
  
  // Render food items
  renderFoodItems();
  
  // Render categories
  renderCategories();
  
  // Render restaurants
  renderRestaurants();
}

function renderPopularItems() {
  const container = document.getElementById('popular-items-container');
  if (!container) return;
  
  container.innerHTML = '';
  popularItems.forEach(item => {
    const itemElement = document.createElement('div');
    itemElement.className = 'popular-item';
    itemElement.innerHTML = `
      <img src="${item.image}" alt="${item.name}" class="popular-item-img">
      <div class="popular-item-content">
        <h3 class="popular-item-name">${item.name}</h3>
        <p class="popular-item-restaurant">${item.restaurant}</p>
        <div class="popular-item-meta">
          <span class="popular-item-price">${item.price}</span>
          <span class="popular-item-rating">
            <i data-lucide="star" class="lucide lucide-star"></i>
            ${item.rating}
          </span>
        </div>
      </div>
    `;
    container.appendChild(itemElement);
    
    // Add click event
    itemElement.addEventListener('click', () => {
      // Find restaurant ID by name
      const restaurant = restaurants.find(r => r.name === item.restaurant);
      if (restaurant) {
        navigateTo(`restaurant.html?id=${restaurant.id}`);
      }
    });
  });
  
  // Re-initialize icons
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }
}

// Render food items
function renderFoodItems() {
  const container = document.getElementById('food-items-container');
  if (!container) return;
  
  container.innerHTML = '';
  
  foodItems.forEach(item => {
    const itemElement = document.createElement('div');
    itemElement.className = 'food-item';
    itemElement.innerHTML = `
      <img src="${item.image}" alt="${item.name}" class="food-item-img">
      <div class="food-item-content">
        <h3 class="food-item-name">${item.name}</h3>
        <p class="food-item-desc">${item.description}</p>
        <div class="food-item-footer">
          <span class="food-item-price">${item.price}</span>
          <button class="add-to-cart-btn" data-id="${item.id}">
            <i data-lucide="plus"></i>
            Add to Cart
          </button>
        </div>
      </div>
    `;
    container.appendChild(itemElement);
    
    // Add click event for Add to Cart button
    const addToCartBtn = itemElement.querySelector('.add-to-cart-btn');
    addToCartBtn.addEventListener('click', (event) => {
      event.stopPropagation();
      const itemId = event.currentTarget.getAttribute('data-id');
      addToCart(itemId, 1);
      updateCartBadge();
      showToast(`${item.name} added to cart!`);
    });
  });
  
  // Re-initialize icons
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }
}

function renderCategories() {
  const container = document.getElementById('categories-container');
  if (!container) return;
  
  container.innerHTML = '';
  categories.forEach(category => {
    const categoryElement = document.createElement('div');
    categoryElement.className = `category-pill ${category === selectedCategory ? 'active' : 'inactive'}`;
    categoryElement.textContent = category;
    
    // Add click event
    categoryElement.addEventListener('click', () => {
      selectedCategory = category;
      renderCategories();
      filterRestaurants();
    });
    
    container.appendChild(categoryElement);
  });
}

function filterRestaurants() {
  const container = document.getElementById('restaurant-grid');
  if (!container) return;
  
  container.innerHTML = '';
  
  let filteredRestaurants = restaurants;
  if (selectedCategory !== 'All') {
    filteredRestaurants = restaurants.filter(restaurant => 
      restaurant.cuisine.toLowerCase().includes(selectedCategory.toLowerCase())
    );
  }
  
  renderRestaurantCards(filteredRestaurants);
}

function renderRestaurants() {
  filterRestaurants();
}

function renderRestaurantCards(restaurantsList) {
  const container = document.getElementById('restaurant-grid');
  if (!container) return;
  
  restaurantsList.forEach(restaurant => {
    const restaurantElement = document.createElement('div');
    restaurantElement.className = 'restaurant-card';
    restaurantElement.innerHTML = `
      <img src="${restaurant.image}" alt="${restaurant.name}" class="restaurant-img">
      <div class="restaurant-content">
        <h3 class="restaurant-name">${restaurant.name}</h3>
        <p class="restaurant-cuisine">${restaurant.cuisine}</p>
        <div class="restaurant-meta">
          <span class="restaurant-rating">
            <i data-lucide="star" class="lucide lucide-star"></i>
            ${restaurant.rating}
          </span>
          <span>${restaurant.deliveryTime}</span>
          <span>${restaurant.priceRange}</span>
        </div>
        <div class="restaurant-tags">
          ${restaurant.discount ? `<span class="restaurant-tag tag-discount">${restaurant.discount}</span>` : ''}
          ${restaurant.isPromoted ? '<span class="restaurant-tag tag-promoted">Promoted</span>' : ''}
          ${restaurant.veg ? '<span class="restaurant-tag tag-veg">Pure Veg</span>' : ''}
        </div>
      </div>
    `;
    container.appendChild(restaurantElement);
    
    // Add click event
    restaurantElement.addEventListener('click', () => {
      navigateTo(`restaurant.html?id=${restaurant.id}`);
    });
  });
  
  // Re-initialize icons
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }
}

function renderRestaurantDetailsPage() {
  const template = document.getElementById('restaurant-details-template');
  pageContent.innerHTML = '';
  pageContent.appendChild(template.content.cloneNode(true));
  
  // Populate restaurant details
  document.getElementById('restaurant-cover').src = restaurantDetails.coverImage;
  document.getElementById('restaurant-cover').alt = restaurantDetails.name;
  document.getElementById('restaurant-logo').src = restaurantDetails.logo;
  document.getElementById('restaurant-logo').alt = `${restaurantDetails.name} logo`;
  document.getElementById('restaurant-name').textContent = restaurantDetails.name;
  document.getElementById('restaurant-cuisine').textContent = restaurantDetails.cuisine;
  document.getElementById('restaurant-rating').textContent = restaurantDetails.rating;
  document.getElementById('restaurant-reviews').textContent = ` (${restaurantDetails.reviewCount} reviews)`;
  document.getElementById('restaurant-delivery-time').textContent = restaurantDetails.deliveryTime;
  document.getElementById('restaurant-distance').textContent = restaurantDetails.distance;
  document.getElementById('restaurant-address').textContent = restaurantDetails.address;
  
  // Discount information
  const discountContainer = document.getElementById('restaurant-discount-container');
  if (restaurantDetails.discount) {
    discountContainer.style.display = 'flex';
    document.getElementById('restaurant-discount').textContent = restaurantDetails.discount;
  } else {
    discountContainer.style.display = 'none';
  }
  
  // Render menu categories
  const categoriesContainer = document.getElementById('menu-categories');
  restaurantDetails.menuCategories.forEach(category => {
    const categoryElement = document.createElement('div');
    categoryElement.className = `menu-category ${category === restaurantDetails.menuCategories[0] ? 'active' : ''}`;
    categoryElement.textContent = category;
    categoryElement.setAttribute('data-category', category);
    categoryElement.addEventListener('click', (e) => {
      // Update active category
      document.querySelectorAll('.menu-category').forEach(el => {
        el.classList.remove('active');
      });
      e.target.classList.add('active');
      
      // Scroll to section
      const sectionId = `menu-section-${category.replace(/\s+/g, '-').toLowerCase()}`;
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    });
    categoriesContainer.appendChild(categoryElement);
  });
  
  // Render menu sections
  const menuSections = document.getElementById('menu-sections');
  const menuByCategory = groupMenuByCategory(restaurantDetails.menuItems);
  
  Object.entries(menuByCategory).forEach(([category, items]) => {
    const sectionId = `menu-section-${category.replace(/\s+/g, '-').toLowerCase()}`;
    const sectionElement = document.createElement('div');
    sectionElement.className = 'menu-section';
    sectionElement.id = sectionId;
    
    sectionElement.innerHTML = `
      <h2 class="menu-section-title">${category}</h2>
      <div class="menu-items" id="menu-items-${category.replace(/\s+/g, '-').toLowerCase()}"></div>
    `;
    menuSections.appendChild(sectionElement);
    
    // Render menu items for this category
    const menuItemsContainer = document.getElementById(`menu-items-${category.replace(/\s+/g, '-').toLowerCase()}`);
    items.forEach(item => {
      const itemElement = document.createElement('div');
      itemElement.className = 'menu-item';
      itemElement.setAttribute('data-item-id', item.id);
      
      itemElement.innerHTML = `
        <div class="menu-item-img">
          <img src="${item.image}" alt="${item.name}">
        </div>
        <div class="menu-item-content">
          <div class="menu-item-header">
            <h3 class="menu-item-name">${item.name}</h3>
            ${item.isVeg ? `
              <div class="veg-icon">
                <div class="veg-icon-inner"></div>
              </div>
            ` : ''}
            ${item.isPopular ? '<span class="popular-tag">Popular</span>' : ''}
          </div>
          <p class="menu-item-desc">${item.description}</p>
          <div class="menu-item-footer">
            <span class="menu-item-price">${item.price}</span>
            <div class="item-actions" id="item-action-${item.id}">
              <button class="add-btn" data-item-id="${item.id}">Add</button>
            </div>
          </div>
        </div>
      `;
      menuItemsContainer.appendChild(itemElement);
      
      // Add click event for the Add button
      const addButton = itemElement.querySelector('.add-btn');
      addButton.addEventListener('click', (e) => {
        e.stopPropagation();
        const itemId = e.target.getAttribute('data-item-id');
        addToCart(itemId, 1);
        updateItemQuantity(itemId);
        updateCartView();
      });
    });
  });
  
  // Favorite button functionality
  const favoriteBtn = document.getElementById('favorite-btn');
  favoriteBtn.addEventListener('click', () => {
    isFavorite = !isFavorite;
    favoriteBtn.classList.toggle('active', isFavorite);
  });
  
  // Initialize cart view
  updateCartView();
  
  // Re-initialize icons
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }
}

function renderOrderConfirmationPage() {
  const template = document.getElementById('order-confirmation-template');
  pageContent.innerHTML = '';
  pageContent.appendChild(template.content.cloneNode(true));
  
  // Populate order details
  document.getElementById('order-id').textContent = orderData.orderId;
  document.getElementById('order-restaurant-name').textContent = orderData.restaurantName;
  document.getElementById('order-delivery-time').textContent = orderData.estimatedDelivery;
  document.getElementById('order-address').textContent = orderData.address;
  document.getElementById('order-payment-method').textContent = orderData.paymentMethod;
  
  // Render order items
  const orderItemsContainer = document.getElementById('order-items');
  orderData.items.forEach(item => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${item.name}</td>
      <td class="text-right">${item.quantity}</td>
      <td class="text-right">₹${item.quantity * item.price}</td>
    `;
    orderItemsContainer.appendChild(row);
  });
  
  // Render order totals
  document.getElementById('order-subtotal').textContent = `₹${orderData.subtotal}`;
  document.getElementById('order-delivery-fee').textContent = `₹${orderData.deliveryFee}`;
  document.getElementById('order-tax').textContent = `₹${orderData.tax}`;
  document.getElementById('order-total').textContent = `₹${orderData.total}`;
  
  // Re-initialize icons
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }
}

function renderNotFoundPage() {
  const template = document.getElementById('not-found-template');
  pageContent.innerHTML = '';
  pageContent.appendChild(template.content.cloneNode(true));
  
  // Re-initialize icons
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }
}

// Utility functions
function navigateTo(url) {
  history.pushState(null, '', url);
  handleRouting();
}

function handleRouting() {
  const path = window.location.pathname;
  const search = window.location.search;
  
  if (path.endsWith('/index.html') || path === '/' || path === '') {
    currentPage = 'home';
    renderHomePage();
  } else if (path.includes('restaurant.html')) {
    currentPage = 'restaurant';
    const params = new URLSearchParams(search);
    selectedRestaurantId = params.get('id') || '';
    render
