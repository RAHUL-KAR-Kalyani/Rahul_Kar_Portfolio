import { useEffect, useRef } from 'react';
import { ThemeProvider } from 'next-themes';
import Home from './components/Home';

export default function App() {
	return (
		<ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
			<Home />
		</ThemeProvider>
	);
}
