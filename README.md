# Vanilla JavaScript SPA

A lightweight Single Page Application built with vanilla JavaScript, featuring client-side routing and state management.

## 🚀 Features

- Client-side routing with dynamic parameters
- State management system
- No framework dependencies
- Clean and modern UI
- Responsive design

## 📋 Prerequisites

- Node.js (for development server)
- Modern web browser

## 🛠️ Installation

1. Clone the repository:

```bash
git clone https://github.com/gauravnumber/vanilla-SPA.git
cd vanilla-SPA
```

2. Start the development server:

```bash
node server.js
```

3. Open your browser and visit:

```
http://localhost:3000
```

## 🏗️ Project Structure

```
vanilla-SPA/
├── index.html          # Main HTML file
├── style.css          # Global styles
├── routing.js         # Router implementation
├── stateManagement.js # State management
├── server.js          # Development server
├── components/        # Page components
│   ├── Home.js
│   ├── About.js
│   ├── Contact.js
│   └── UserDetail.js
└── README.md
```

## 🎯 Usage

### Navigation

Use the `data-link` attribute for client-side navigation:

```html
<a href="/about" data-link>About</a>
<a href="/user/123" data-link>User Profile</a>
```

### State Management

```javascript
// Subscribe to state changes
store.subscribe((state) => {
  console.log("State updated:", state);
});

// Update state
store.setState({ count: 1 });
```

## 🚀 Deployment

1. Build the project:

```bash
# Create dist directory
mkdir dist

# Copy files to dist
copy index.html dist/
copy style.css dist/
copy routing.js dist/
copy stateManagement.js dist/
copy components/* dist/
```

2. Deploy to GitHub Pages:
   - Push the `dist` folder to your repository
   - Enable GitHub Pages in repository settings
   - Select the branch and folder to deploy

## 🛠️ Development

### Adding New Routes

1. Create a new component in the `components` directory
2. Add the route in `routing.js`:

```javascript
this.routes = {
  "/new-route": NewComponent,
};
```

### Styling

- Global styles are in `style.css`
- Component-specific styles can be added inline or in separate CSS files

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📧 Contact

Your Name - [@yourtwitter](https://twitter.com/yourtwitter) - email@example.com

Project Link: [https://github.com/yourusername/vanilla-SPA](https://github.com/yourusername/vanilla-SPA)
