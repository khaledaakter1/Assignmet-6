# Peddy - Pet Adoption Platform

**Peddy** is a web-based pet adoption platform where users can browse and adopt pets from various categories like dogs, cats, rabbits, and birds. This platform provides all the information needed about the pets, including their breed, age, and price, along with detailed descriptions for each pet. The goal of this project is to simplify the process of finding and adopting a new best friend.

## Key Features:
1. **Dynamic Pet Listings**: Displays a list of available pets dynamically fetched from the API, including the ability to filter by category.
2. **Detailed Pet Information**: Modal pop-ups provide detailed information about each pet, including breed, gender, and vaccination status.
3. **Like and Adopt Pets**: Users can "like" pets to save them in a special section and initiate an adoption process with a countdown before the adoption is confirmed.
4. **Sort by Price**: A button that allows users to sort pets by price in descending order, making it easier to find pets that fit their budget.
5. **Responsive Design**: Fully responsive layout across all devices, from mobile to desktop, using Tailwind CSS and DaisyUI.

## ES6 Features Used:
- **Arrow Functions**: Used for concise function expressions, especially in event listeners and API handling.
- **Template Literals**: For dynamically generating HTML content based on API data.
- **let/const**: Variables are declared using `let` and `const` for block scoping and immutability where appropriate.
- **Destructuring**: Destructuring assignment is used to extract specific properties from objects (e.g., pet details from API responses).
- **Modules**: JavaScript files are modularized for better code organization and reuse, separating concerns such as API calls, DOM manipulation, and utilities.

## Live Link:
Check out the live version of Peddy here: https://peddy-as-6.netlify.app/

---

### APIs Used:
- **Fetch All Pets**: `https://openapi.programming-hero.com/api/peddy/pets`
- **Fetch Pet Details**: `https://openapi.programming-hero.com/api/peddy/pet/{id}`
- **Fetch Pet Categories**: `https://openapi.programming-hero.com/api/peddy/categories`
- **Fetch Pets by Category**: `https://openapi.programming-hero.com/api/peddy/category/{categoryName}`

