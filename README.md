
# Wedding Management

[![Deployment Status](https://img.shields.io/badge/deployed-success-brightgreen)](https://wedding-management.onrender.com/v1/homepage)

## Introduction

**Wedding Management** is a web application that allows users to easily find wedding halls, view available booking dates, check hall ratings and prices, and even filter halls based on specific requirements. Users can add halls to their wishlist or report any issues with them.

### Key Features

- **Find Wedding Halls**: Browse through a variety of wedding halls with detailed information.
- **Check Availability**: View available dates for hall booking in real time.
- **Ratings & Pricing**: Get insights into hall ratings and pricing.
- **Wishlist**: Save your favorite halls to your wishlist for easy access later.
- **Report**: Report any issues with halls for further action.
- **Filter Options**: Filter halls based on ratings, pricing, and availability.

## Live Demo

The project is live and can be accessed here: [Wedding Management](https://wedding-management.onrender.com/v1/homepage).

## Technologies Used

- **Node.js**: Backend runtime environment.
- **Express.js**: Web application framework.
- **EJS**: Templating engine for rendering dynamic pages.
- **PostgreSQL**: Database for storing hall information, availability, user data, etc.
- **Render**: Hosting platform for the backend and database.

## Getting Started

### Prerequisites

To run this project locally, you need to have:

- [Node.js](https://nodejs.org/) installed
- [PostgreSQL](https://www.postgresql.org/) database set up
- A `.env` file with the following environment variables:
  \`\`\`bash
  DATABASE_URL=<your_postgresql_connection_string>
  \`\`\`

### Installation

1. Clone the repository:
   \`\`\`bash
   git clone https://github.com/Ratre-ishwari/wedding-management.git
   \`\`\`

2. Navigate to the project directory:
   \`\`\`bash
   cd wedding-management
   \`\`\`

3. Install dependencies:
   \`\`\`bash
   npm install
   \`\`\`

4. Set up your environment variables in a `.env` file (refer to `.env.example`).

5. Run the application:
   \`\`\`bash
   npm start
   \`\`\`

   Or, to start the server with nodemon for development:
   \`\`\`bash
   npm run dev
   \`\`\`

6. Open your browser and navigate to \`http://localhost:3000/v1/homepage\`.

### Build and Deployment Commands

For deployment, ensure you have the following build and start commands:

- **Build Command**: 
  \`\`\`bash
  npm install
  \`\`\`

- **Start Command**:
  \`\`\`bash
  npm start
  \`\`\`

## API Endpoints

- \`GET /v1/homepage\`: Fetch the homepage.
- \`GET /v1/halls\`: Retrieve a list of available halls.
- \`POST /v1/wishlist\`: Add a hall to your wishlist.
- \`POST /v1/report\`: Report a hall.

## Future Enhancements

- Implement OTP verification for user authentication
- Create a separate page for vendors to manage their listings
- Implement lazy loading for improved performance and user experience

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the project.
2. Create your feature branch: \`git checkout -b feature/my-feature\`.
3. Commit your changes: \`git commit -m 'Add some feature'\`.
4. Push to the branch: \`git push origin feature/my-feature\`.
5. Open a pull request.

## Contact

If you have any questions or feedback, feel free to reach out:

- **GitHub**: [Ratre-ishwari](https://github.com/Ratre-ishwari)
- **Email**: ratreishu6263@gmail.com
