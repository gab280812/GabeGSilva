# DTC Consulting Website

A sophisticated, minimalist one-page website for DTC (Direct-to-Consumer) consulting services, featuring interactive animations and dynamic content.

## Features

### 🎨 Design System
- **Pure monochromatic palette**: Black (#000000), white (#ffffff), dark gray (#2a2a2a)
- **Typography**: Inter font family for clean, professional appearance
- **Consistent 8px border radius** throughout for warmth
- **Spacious layout** with proper whitespace and centered content

### ⚡ Interactive Elements
- **Typewriter Animation**: Google-style search interface that cycles through 10 common DTC problems
- **Dynamic Client Reviews**: Contextual testimonials that sync with each problem statement
- **Smooth Animations**: 0.3s ease-out transitions with hover effects
- **Modal Booking System**: Professional contact form with calendar integration

### 📱 Technical Specifications
- **Pure HTML/CSS/JS**: No frameworks, vanilla JavaScript only
- **Responsive Design**: Mobile-friendly with optimized breakpoints
- **Performance Optimized**: Fast loading with efficient animations
- **Accessibility**: Semantic HTML and ARIA labels
- **Reduced Motion Support**: Respects user preferences

## File Structure

```
├── index.html          # Main HTML structure
├── styles.css          # Complete CSS design system
├── script.js           # Interactive animations and functionality
└── README.md           # Project documentation
```

## Sections

### Hero Section
- Compelling headline: "Turn Your Commerce Vision Into Profitable Reality"
- Strategic subtitle positioning the consultant as expert
- Primary CTA button with arrow animation
- Social proof: "$50M+ in client revenue generated"

### Interactive Search Animation
- **10 Problem Statements** that cycle automatically:
  1. "Ecommerce Stuck at $2, 8 or 12 Million"
  2. "AI has tanked my SEO"
  3. "Can't scale advertising"
  4. "B2B launching DTC for the first time"
  5. "Founder Burnout"
  6. "My team needs training"
  7. "Making my ecommerce profitable"
  8. "Building stores that scale without hinderance"
  9. "I don't know my market"
  10. "How do I implement AI to improve my ecommerce"

- **Animation Timing**: 100ms typing, 50ms erasing, 3s pause
- **Visual Feedback**: Blinking cursor and green checkmark
- **Contextual Reviews**: Each problem shows matching client testimonial

### Dynamic Client Reviews
- **10 Unique Testimonials** with 4-5 star ratings
- **Realistic Client Profiles**: Names, titles, company avatars
- **Smooth Transitions**: Fade in/out with translateY transforms
- **Credible Content**: Specific results and metrics

### Additional Sections
- **Pain to Promise**: Problem/solution format with visual indicators
- **Services**: Two-panel layout for Ecommerce Founders vs B2B Companies
- **Process**: 4-step methodology with icons and descriptions
- **Contact Modal**: Professional booking form with validation

## Animation Details

### Typewriter Effect
- Characters appear at 100ms intervals
- Text erases at 50ms intervals
- 3-second pause when complete
- Animated blinking cursor ("|")
- Green checkmark appears on completion

### Review Synchronization
- Reviews automatically sync with current problem
- Smooth fade transitions between testimonials
- Color-coded avatars for visual variety
- Star ratings in gold (#fbbf24)

### Interaction States
- Hover effects with subtle scale and shadow changes
- Button animations with arrow movement
- Modal transitions with backdrop blur
- Scroll-triggered animations for sections

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile responsive (iOS Safari, Chrome Mobile)
- Graceful degradation for older browsers
- Reduced motion support for accessibility

## Performance

- **Optimized Loading**: Critical CSS inlined, fonts preloaded
- **Efficient Animations**: CSS transforms and opacity changes
- **Minimal JavaScript**: Vanilla JS with no external dependencies
- **Compressed Assets**: Optimized for fast loading

## Customization

### Colors
Update CSS custom properties in `:root` to change the color scheme:
```css
:root {
    --black: #000000;
    --white: #ffffff;
    --dark-gray: #2a2a2a;
    /* ... */
}
```

### Content
- Modify `problems` array in `script.js` to change search terms
- Update `reviews` array to customize client testimonials
- Edit HTML content for different messaging

### Animations
- Adjust timing variables in JavaScript for different speeds
- Modify CSS transition durations for smoother/faster effects
- Customize easing functions for different animation feels

## Setup

1. Clone or download the files
2. Open `index.html` in a web browser
3. No build process required - runs immediately
4. For development, use a local server for best results

## Browser Testing

Tested and optimized for:
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

This project is designed for DTC consulting services. Customize as needed for your specific business requirements.
