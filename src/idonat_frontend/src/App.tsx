// import { TooltipProvider } from '@/components/ui/tooltip';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFound from './pages/NotFound';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';

const queryClient = new QueryClient();

const App = () => (
	<QueryClientProvider client={queryClient}>
		{/* <TooltipProvider> */}
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Dashboard />} />
				<Route path="/login" element={<Login />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</BrowserRouter>
		{/* </TooltipProvider> */}
	</QueryClientProvider>
);

export default App;
