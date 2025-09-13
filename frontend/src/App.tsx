import React from "react";
import Header from "./components/Header/Header";
import Quotes from "./components/Quotes/Quotes";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./api/queryClient";

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <main className="bg-gray-600 grow-1">
        <Quotes />
      </main>
    </QueryClientProvider>
  );
};

export default App;
