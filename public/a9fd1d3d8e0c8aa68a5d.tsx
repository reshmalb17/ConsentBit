import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import App from "./App";
import { ScriptProvider } from "./context/ScriptContext";
const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            // Prevent duplicate requests in development
            retry: false,
            // Deduplicate requests made within this time window
            staleTime: 1000 * 60 * 5, // 5 minutes
            // Don't refetch on window focus
            refetchOnWindowFocus: false,
            // Deduplicate identical requests made within 2 seconds
            gcTime: 2000,
        },
    },
});
ReactDOM.createRoot(document.getElementById("root")).render(
// <React.StrictMode>
React.createElement(QueryClientProvider, { client: queryClient },
    React.createElement(ScriptProvider, null,
        React.createElement(App, null)))
// </React.StrictMode>
);
