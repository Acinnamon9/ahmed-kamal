import { useState, useEffect } from "react";

export const useCurrency = () => {
  const [currency, setCurrency] = useState("USD");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCurrency = async () => {
      try {
        const response = await fetch("https://ipapi.co/currency/");
        const currencyCode = await response.text();
        if (currencyCode && currencyCode.length === 3) {
          setCurrency(currencyCode);
        }
      } catch (error) {
        console.error("Failed to fetch currency based on location", error);
        // Fallback to USD is already set
      } finally {
        setLoading(false);
      }
    };

    fetchCurrency();
  }, []);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: currency,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return { currency, formatCurrency, loading };
};
