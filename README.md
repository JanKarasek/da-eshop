# Garage Shop E-commerce

A modern e-commerce platform for selling premium garages, built with SvelteKit, PostgreSQL, and Stripe.

## Features

- Modern, minimalist design
- Responsive layout
- Product catalog with filtering
- Detailed product pages
- Image galleries
- Secure checkout with Stripe
- Order management
- Local PostgreSQL database

## Prerequisites

- Node.js 18 or later
- PostgreSQL
- Stripe account

## Setup

1. Clone the repository:
```bash
git clone https://github.com/yourusername/garage-shop.git
cd garage-shop
```

2. Install dependencies:
```bash
npm install
```

3. Set up the database:
```bash
# Create a PostgreSQL database
createdb garage_shop

# Run Prisma migrations
npx prisma migrate dev
```

4. Configure environment variables:
- Copy `.env.example` to `.env`
- Update the database URL and Stripe keys

5. Start the development server:
```bash
npm run dev
```

## Development

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run test` - Run tests
- `npm run lint` - Run linter

## Database Schema

The application uses Prisma with the following models:

- Garage: Product information
- Order: Customer orders and payment status

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

MIT
