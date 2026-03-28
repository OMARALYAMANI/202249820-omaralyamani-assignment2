# Technical Documentation

## Project Structure
- `index.html`: Main page structure and sections (About, Projects, Contact)
- `css/styles.css`: Styling, responsive design, and animations
- `js/script.js`: Interactivity (theme toggle, greeting, smooth scroll, form validation)
- `assets/images/`: Images used in the site
- `docs/`: Reports and documentation

## Features
- Responsive navigation bar and layout
- Projects grid that becomes 1 column on smaller screens
- Dark/Light theme toggle (saved in localStorage)
- Greeting message based on current time
- Contact form validation with:
  - Empty field checking
  - Email format validation
  - Success and error messages
- Mobile navigation toggle menu
- Smooth scrolling between sections
- Hover effects on buttons and cards
- Fade-in animations for sections and messages

## Data Handling
- localStorage is used to store the user’s theme preference (dark/light mode)
- Form input is validated using JavaScript before submission

## User Feedback
- Error messages are shown if:
  - Fields are empty
  - Email format is invalid
- Success message is shown after form submission

## Animations and Transitions
- Smooth scrolling between sections
- Hover effects on cards, buttons, and links
- Fade-in animation for sections and form messages
- Transition effects for theme switching

## How to Test
1. Open `index.html` in a browser.
2. Resize the browser window to test responsiveness.
3. Click navigation links to test smooth scrolling.
4. Toggle the theme button and refresh the page (theme should persist).
5. Try submitting the contact form:
   - Leave fields empty → should show error
   - Enter invalid email → should show error
   - Enter valid data → should show success message
