import { createContext, useState } from "react";

export const NavBarContext = createContext({});

function NavBarProvider({ children }) {
	const [authPath, setAuthPath] = useState(true);

	return (
		<NavBarContext.Provider value={{ authPath, setAuthPath }}>
			{children}
		</NavBarContext.Provider>
	);
}

export default NavBarProvider;
