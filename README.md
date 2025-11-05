# Shahkar Rugs - Handmade Rug E-commerce Website

A professional, responsive React website for Shahkar Rugs - manufacturer and exporter of handmade rugs.

## Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Product Collections**: Browse through various rug categories
- **Custom Rug Form**: Request personalized quotes for custom rugs
- **Contact System**: Easy-to-use contact form
- **SEO Friendly**: Optimized for search engines

## Pages

1. **Home** - Hero section with featured collections and company information
2. **Shop/Collection Pages** - Browse all products with filtering options
   - Hand Knotted
   - Hand Tufted
   - Handloom
   - Patched Work
   - Leather Carpet
   - Jute Rugs
   - Flat Weave
   - Designers Edition
   - Coir Mats
3. **Custom Rug Form** - Request personalized quotes
4. **Contact Us** - Get in touch with the team
5. **About Us** - Company history and values
6. **Size Guide** - Rug size recommendations (placeholder)
7. **How We Work** - Manufacturing process (placeholder)
8. **Testimonials** - Customer reviews (placeholder)
9. **Blog** - Latest updates (placeholder)

## Technologies Used

- React 18
- React Router DOM (for navigation)
- Tailwind CSS (for styling)
- Lucide React (for icons)

## Installation

1. Navigate to the project directory:
```bash
cd shahkar-rugs
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Build for Production

To create a production build:

```bash
npm run build
```

The build folder will contain the optimized production files.

## Project Structure

```
shahkar-rugs/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   └── Footer.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Shop.jsx
│   │   ├── CustomRugForm.jsx
│   │   ├── Contact.jsx
│   │   └── About.jsx
│   ├── App.js
│   ├── index.js
│   └── index.css
├── tailwind.config.js
├── package.json
└── README.md
```

## Customization

### Colors
Update the color scheme in `tailwind.config.js`:
```javascript
colors: {
  primary: '#8B4513',    // Brown
  secondary: '#D2691E',  // Chocolate
}
```

### Products
Add or modify products in `src/pages/Shop.jsx` in the `allProducts` array.

### Contact Information
Update contact details in `src/components/Footer.jsx` and `src/pages/Contact.jsx`.

## Deployment

This app can be deployed to:
- Vercel
- Netlify
- GitHub Pages
- Any static hosting service

## Future Enhancements

- Product detail pages
- Shopping cart functionality
- User authentication
- Payment integration
- Admin dashboard for product management
- Blog CMS integration
- Customer testimonials section
- Size guide calculator

## License

© 2025 Shahkar Rugs. All rights reserved.

## Contact

For questions or support, please contact:
- Email: info@shahkarrugs.com
- Website: www.shahkarrugs.com

# SHAHKAN-RUGS
