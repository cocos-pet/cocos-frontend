import { RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import router from "./route/Router";
//import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import "./style/global.css.ts";

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: true,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      {/*<ReactQueryDevtools initialIsOpen={false} />*/}
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
