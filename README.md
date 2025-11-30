# GoIT Car Rental

**GoIT Car Rental** is a car rental application built with **Next.js**.  
In this project, I implemented for the first time storing dynamic data from the
backend in global state, and I also paid special attention to **SEO** and **Open
Graph**.  
You can view the design mockup here:
[Figma Design](https://www.figma.com/design/DJRaViKbsDW3WkCWtJgWFr/Rental-Car?node-id=0-1&p=f&t=kqOkWff6ouVVsfBa-0)

## Features

### 1. Home Page (`/`)

- Header with navigation.
- Hero section with a title, short tagline, image, and a button linking to the
  car catalog.

### 2. Car Catalog (`/catalog`)

- Filters by brand, maximum rental price, and mileage (from/to).
- Car cards with basic information, image, and a button to view car details.
- Ability to add cars to **favorites**, stored in **localStorage**.
- **Load more** button to fetch additional data from the server (hidden when no
  more data).
- Car cards are rendered using **global state management**.

### 3. Car Details Page (`/catalog/[:id]`)

- Detailed car information including images and full specifications.
- Booking form with fields: **name, email, date, comment**.
- Form validation using **Formik + Yup**.
- Date picker implemented with **react-flatpickr**.
- Booking confirmation displayed after form submission.

## Technologies

- **Next.js** (SSR + CSR)
- **React**
- **Formik + Yup** (forms and validation)
- **react-flatpickr** (date picker)
- **TypeScript**

## Highlights

- Car filters and ability to add to **favorites**.
- Server-side rendering for pages and dynamic car details.
- SEO optimization with metadata and **Open Graph** for each page.

## Author

**Henry Lytvyn**

- Email: [hennadii.lytvyn@gmail.com]
- GitHub: [https://github.com/HenryLytvyn]
- LinkedIn: [https://linkedin.com/in/henry-lytvyn]
