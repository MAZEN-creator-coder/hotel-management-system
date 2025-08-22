# 🏨 EliteStay Hotel - Luxury Hotel Website

A modern, responsive hotel website built with HTML, CSS, and JavaScript that provides an elegant user experience for hotel guests and visitors.

## 🌟 Features

### ✨ User Experience
- **Responsive Design** - Optimized for all devices (desktop, tablet, mobile)
- **Dark/Light Theme Toggle** - Customizable theme with persistent settings
- **Smooth Animations** - AOS (Animate On Scroll) library integration
- **Interactive Elements** - Hover effects, smooth scrolling, and transitions

### 🏠 Room Management
- **Room Categories**: Standard, Deluxe, and Suite rooms
- **Room Filtering** - Search by name, type, and price range
- **Room Gallery** - Interactive image carousel for each room
- **Booking System** - Multi-step booking process with validation

### 🔐 Authentication System
- **User Registration** - Sign up with email and password
- **User Login** - Secure authentication with session management
- **Profile Management** - User account status and logout functionality

### 📱 Navigation & UI
- **Responsive Navigation** - Mobile-friendly hamburger menu
- **Dropdown Menus** - Organized room type navigation
- **Contact Form** - Interactive contact form with validation
- **FAQ Section** - Expandable FAQ accordion
- **Testimonials** - Auto-rotating customer reviews

### 🗺️ Interactive Features
- **Google Maps Integration** - Location display with Leaflet.js
- **Toast Notifications** - User feedback for actions
- **Back to Top Button** - Smooth scroll navigation
- **Parallax Effects** - Dynamic background animations

## 🛠️ Technologies Used

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Styling**: Custom CSS with CSS Variables
- **Icons**: Font Awesome 6.4.2
- **Fonts**: Google Fonts (Playfair Display, Poppins)
- **Animations**: AOS (Animate On Scroll) library
- **Maps**: Leaflet.js for interactive maps
- **Responsive Design**: Mobile-first approach

## 📁 Project Structure

```
HOTEL/
├── index.html          # Main homepage
├── rooms.html          # Rooms listing and booking
├── auth.html           # Authentication page
├── css/
│   ├── style.css       # Main stylesheet
│   ├── *.webp          # Room images
│   ├── *.jpeg          # Additional images
│   └── *.png           # UI elements
├── js/
│   └── main.js         # Main JavaScript functionality
└── README.md           # Project documentation
```

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Local web server (optional, for development)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/elitestay-hotel.git
   cd elitestay-hotel
   ```

2. **Open in browser**
   - Simply open `index.html` in your web browser
   - Or use a local server for development:
     ```bash
     # Using Python
     python -m http.server 8000
     
     # Using Node.js
     npx serve .
     ```

3. **Access the website**
   - Navigate to `http://localhost:8000` (if using local server)
   - Or open `index.html` directly in your browser

## 📱 Usage

### Navigation
- **Home**: Main landing page with featured rooms and services
- **Rooms**: Browse and filter available room types
- **Facilities**: View hotel amenities and services
- **Contact**: Get in touch or view location on map

### Room Booking
1. Navigate to the Rooms page
2. Use filters to find your preferred room
3. Click "Book Now" on your chosen room
4. Follow the 3-step booking process:
   - Select check-in/check-out dates
   - Enter guest information
   - Confirm booking

### User Account
1. Click "Log In / Sign Up" in the navigation
2. Choose between login or registration
3. Fill in required information
4. Access your account features

### Theme Customization
- Toggle between light and dark themes
- Customize primary color using the color picker
- Theme preferences are saved locally

## 🎨 Customization

### Colors
Modify CSS variables in `css/style.css`:
```css
:root {
  --primary-color: #1e3a8a;
  --secondary-color: #f59e0b;
  --text-color: #1f2937;
  --background-color: #ffffff;
}
```

### Content
- Update room information in `js/main.js`
- Modify hotel details in HTML files
- Replace images in the `css/` directory

### Styling
- Edit `css/style.css` for layout changes
- Modify animations in JavaScript files
- Update responsive breakpoints as needed

## 🔧 Browser Support

- ✅ Chrome 60+
- ✅ Firefox 55+
- ✅ Safari 12+
- ✅ Edge 79+
- ⚠️ Internet Explorer (not supported)

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🚀 Performance Features

- **Lazy Loading**: Images load as needed
- **Optimized Assets**: Compressed images and minified code
- **Efficient Animations**: Hardware-accelerated CSS transitions
- **Minimal Dependencies**: Lightweight external libraries

## 🐛 Known Issues

- Theme toggle may not persist across browser sessions in some cases
- Mobile menu dropdowns require JavaScript for full functionality
- Image gallery navigation works best on touch devices

## 🔮 Future Enhancements

- [ ] Real-time room availability
- [ ] Payment gateway integration
- [ ] Multi-language support
- [ ] Advanced search filters
- [ ] User reviews and ratings
- [ ] Email notification system
- [ ] Admin dashboard
- [ ] Booking management system

## 👥 Team Members

This project was developed by:

- **Mazen Ahmed** - Frontend Development & UI/UX Design
- **Mohamed Amgad** - JavaScript Functionality & User Experience
- **Ahmed Hussin** - Responsive Design & Cross-browser Compatibility

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Support

For support and questions:
- Email: elitestay@gmail.com
- Phone: +1 234 567 890
- Address: 123 Main St, City, Country

## 🙏 Acknowledgments

- Font Awesome for icons
- Google Fonts for typography
- AOS library for scroll animations
- Leaflet.js for map functionality
- Unsplash for stock images

---

**EliteStay Hotel** - Where luxury meets comfort, and every stay becomes a memorable experience. ✨

*Built with ❤️ by the EliteStay Development Team*
