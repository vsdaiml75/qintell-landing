/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#38BDF8",
          primaryDark: "#0EA5E9",
          secondary: "#2563EB",
          secondaryLight: "#3B82F6",

          bgPrimary: "#0F172A",
          bgSecondary: "#1E293B",
          bgTertiary: "#0B1120",

          textPrimary: "#F1F5F9",
          textSecondary: "#CBD5E1",
          textMuted: "#94A3B8",

          success: "#10B981",
          warning: "#F59E0B",
          error: "#EF4444",
          info: "#0EA5E9",
        },
      },
    },
  },
  plugins: [],
};
