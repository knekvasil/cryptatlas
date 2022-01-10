import { createContext, useState } from "react";

export const ModalButtonContext = createContext({});

function ModalButtonProvider({ children }) {
	const [ModalButtonText, setModalButtonText] = useState({
		text: "Choose Coin",
		img: "",
	});

	return (
		<ModalButtonContext.Provider
			value={{ ModalButtonText, setModalButtonText }}
		>
			{children}
		</ModalButtonContext.Provider>
	);
}

export default ModalButtonProvider;
