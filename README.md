# PriceTracker

PriceTracker is a **web application** built with **Next.js**, **React**, and **Tailwind CSS** to help users monitor product prices across various e-commerce platforms. The app allows users to track their desired products, set price alerts, and make informed purchasing decisions.

---

## 🚀 Features

- **Price Monitoring**: Track prices for specific products across e-commerce websites.
- **Real-Time Alerts**: Get notified when a product's price changes or hits a target threshold.
- **Responsive Interface**: Clean, responsive UI built with **Tailwind CSS** to ensure compatibility across all screen sizes.
- **Easy to Use**: Add products and set alerts in just a few clicks.

---

## 🛠️ Tech Stack

- **Frontend**: Next.js, React, Tailwind CSS
- **State Management**: React Hooks (`useState`, `useEffect`)
- **Deployment**: Vercel

---

## 📝 Installation

### Prerequisites

- **Node.js** (>= 16.x)
- **npm** or **yarn**

### Steps

1. **Clone the repository**:
    ```bash
    git clone https://github.com/yourusername/pricetracker.git
    cd pricetracker
    ```

2. **Install dependencies**:
    ```bash
    npm install
    # or if you're using yarn
    yarn install
    ```

3. **Run the development server**:
    ```bash
    npm run dev
    # or if you're using yarn
    yarn dev
    ```

4. **Visit the app**:
    - Open your browser and go to [http://localhost:3000](http://localhost:3000).

---

## 🧑‍💻 Usage

- **Add a Product**: Enter the product URL to start tracking its price.
- **Set Alerts**: Set a target price and receive notifications when the price drops.
- **Track Price Changes**: View historical price data for each product you’re tracking.
- **Responsive Design**: The interface is mobile-friendly, designed using **Tailwind CSS** for optimal viewing on all devices.

---

## 🗂️ Project Structure

```plaintext
pricetracker/
├── pages/                   # Next.js pages
│   ├── index.js             # Homepage of the app
├── components/              # Reusable UI components (buttons, cards, etc.)
├── styles/                  # Tailwind CSS configurations and global styles
├── public/                  # Public assets (images, fonts)
├── package.json             # Project dependencies and scripts
└── README.md                # Project documentation
