# Product Dashboard

A React-based product management application for managing products with an intuitive interface. Built with React, Vite, and modern frontend practices.

## Features

- **Product Display**: View products in two formats - List View (table) and Card View (grid)
- **Search with Debounce**: Real-time search functionality with 500ms debounce for better performance
- **Add & Edit Products**: Full CRUD operations with form validation
- **Pagination**: Navigate through products efficiently with pagination controls
- **Responsive Design**: Works seamlessly on desktop and mobile devices

## Tech Stack

- React 19
- Vite
- Custom Hooks (useDebounce)
- CSS3 (Responsive)

## Project Structure

```
src/
 ├─ components/
 │   ├─ ProductTable.jsx    # List view component
 │   ├─ ProductCard.jsx     # Card view component
 │   ├─ ProductForm.jsx     # Reusable form for add/edit
 │   ├─ Pagination.jsx      # Pagination controls
 │   └─ ViewToggle.jsx      # View switcher
 │
 ├─ hooks/
 │   └─ useDebounce.js      # Custom debounce hook
 │
 ├─ utils/
 │   └─ validators.js       # Form validation utilities
 │
 ├─ data/
 │   └─ dummyProducts.js    # Initial product data
 │
 ├─ App.jsx                 # Main application component
 └─ main.jsx                # Entry point
```

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository or navigate to the project directory
2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and navigate to the URL shown in the terminal (typically `http://localhost:5173`)

## Usage

### View Toggle
- Switch between List View and Card View using the toggle buttons in the header
- List View supports editing functionality
- Card View is read-only for better visual browsing

### Search
- Type in the search box to filter products by name
- Search is debounced (500ms) to avoid excessive filtering

### Adding Products
1. Click "Add Product" button (available in List View)
2. Fill in the required fields (Name, Price, Category)
3. Optionally add Stock and Description
4. Click "Add Product" to save

### Editing Products
1. In List View, click "Edit" on any product row
2. Modify the fields in the form
3. Click "Update Product" to save changes

### Pagination
- Use Previous/Next buttons or page numbers to navigate
- Pagination works in both List and Card views
- Shows 6 products per page by default

## Why In-Memory State?

This application uses React state (in-memory) for data management instead of localStorage, backend API, or a database. Here's why:

1. **Simplicity**: Focuses on frontend implementation without backend complexity
2. **Performance**: Instant data operations without network latency
3. **Demo/Presentation**: Perfect for showcasing frontend skills and UI/UX design
4. **Development Speed**: Faster iteration during development without backend setup

Data persists during the session but resets on page refresh, which is acceptable for this demo application.

## Challenges Faced

1. **Debounce Implementation**: Implementing a reusable debounce hook that works seamlessly with React state updates
2. **Pagination Logic**: Ensuring pagination works correctly with filtered/search results
3. **Form State Management**: Handling form state for both add and edit modes while maintaining clean code
4. **Responsive Design**: Creating a layout that works well on different screen sizes while maintaining usability
5. **View State Management**: Coordinating between view modes, editing state, and form visibility

## Future Improvements

- **Persistent Storage**: Add localStorage or IndexedDB for data persistence
- **Backend Integration**: Connect to a REST API or GraphQL endpoint
- **Advanced Filtering**: Filter by category, price range, stock status
- **Sorting**: Sort products by name, price, stock, etc.
- **Bulk Operations**: Select multiple products for batch actions
- **Image Support**: Add product images with upload functionality
- **Export Functionality**: Export product data to CSV or JSON
- **Product Details Modal**: View full product details in a modal
- **Undo/Redo**: Implement undo/redo for product modifications
- **Search History**: Keep track of recent searches
- **Dark Mode**: Add theme switcher for dark/light modes

## Deployment

The application can be deployed to:

- **Vercel**: Connect your GitHub repository and deploy automatically
- **Netlify**: Drag and drop the build folder or connect via Git
- **Render**: Connect repository and set build command to `npm run build`

### Build for Production

```bash
npm run build
```

The build artifacts will be in the `dist` folder, ready to be deployed.

## License

This project is open source and available for educational purposes.
