import React, { createContext, useContext } from 'react'

const ScrollContext = createContext();

export const useScroll = () => {
	return useContext(ScrollContext);
}


export const ScrollProvider = ({ children }) => {
	const [scrollPosition, setScrollPosition] = React.useState(0);

	const handleScroll = () => {
		setScrollPosition(window.scrollY);
	}

	React.useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<ScrollContext.Provider value={scrollPosition}>
			{children}
		</ScrollContext.Provider>
	);
}
