##Finance Dashboard

A responsive and visually appealing Finance Dashboard to display financial data, industry trends, and dynamic charts. Built using modern web technologies, this project is optimized for both functionality and user experience.

##Features

📊 Dynamic Charts: Interactive bar and donut charts using Chart.js.

📋 Data Table: Searchable, paginated, and responsive.

🌗 Theme Switcher: Toggle between light and dark mode.

📱 Responsive Design: Optimized for all screen sizes.

🧭 Sidebar Navigation: Hamburger menu for mobile and a full-height sidebar for desktop.

📈 Industry Metrics: Highlight key data with highest positive and negative changes.

##Frontend

⚛️ React: JavaScript library for building user interfaces.

🛠️ TypeScript: Typed superset of JavaScript.

🎨 Tailwind CSS: Utility-first CSS framework.

📊 Chart.js: For visualizing data.

🌟 React Icons: Icon library for financial icons.

##Backend

🚀 Express.js: Node.js web framework.

🗄️ JSON Data: Simulates API responses.

##Installation

Clone the repository:

git clone https://github.com/yourusername/finance-dashboard.git
cd finance-dashboard

Install dependencies:

npm install

Start the development server:

npm run dev

Start the backend server:

npm run server

Open the app:
Navigate to http://localhost:3000 in your browser.

##Folder Structure

finance-dashboard/
├── public/
├── src/
│ ├── components/
│ │ ├── BarChart.tsx
│ │ ├── DataTable.tsx
│ │ ├── DonutChart.tsx
│ │ ├── Footer.tsx
│ │ ├── MetricBox.tsx
│ │ ├── Pagination.tsx
│ │ ├── PriceTable.tsx
│ │ ├── SearchBar.tsx
│ │ ├── Sidebar.tsx
│ ├── context/
│ │ ├── ThemeContext.tsx
│ ├── hooks/
│ │ ├── useFetchData.ts
│ │ ├── usePaginatedData.ts
│ │ ├── useIndustryMetrics.ts
│ │ ├── useTopAndLowestPrices.ts
│ ├── pages/
│ │ ├── Dashboard.tsx
│ ├── services/
│ │ ├── dataService.ts
│ ├── styles/
│ │ ├── globals.css
│ ├── tailwind.config.js
│
├── package.json
├── tsconfig.json
├── README.md

##Environment Variables

Set the following environment variables in a .env file:

REACT_APP_API_URL=http://localhost:5000/data

Key Components

Sidebar

🧭 Full-height sidebar for desktop with a responsive hamburger menu for mobile.

MetricBox

📊 Displays key metrics such as highest positive and negative changes.

Charts

📈 Interactive visualizations for data insights using Chart.js.

Pagination

🔄 Smooth and responsive pagination for data navigation.

##Contributors

🌻 Azadeh Sharifi Soltani

Feel free to contribute to this project by submitting a pull request or opening an issue!

Made with 💻, ☕, and 🌻 by Azadeh Sharifi Soltani
