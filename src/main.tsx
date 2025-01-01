import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import { ThemeProvider } from "./providers/themeProvider.tsx";
import { store } from "./redux/store.ts";
import routes from "./routes/route.tsx";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<ThemeProvider storageKey="vite-ui-theme">
			<Provider store={store}>
				<RouterProvider router={routes} />
			</Provider>
		</ThemeProvider>
	</StrictMode>
);
