import { createContext, useState } from "react";

export const TableToChartContext = createContext({});

function TableToChartProvider({ children }) {
	const [coinToChartStore, setcoinToChartStore] = useState(initialState);

	return (
		<TableToChartContext.Provider
			value={(coinToChartStore, setcoinToChartStore)}
		>
			{children}
		</TableToChartContext.Provider>
	);
}

export default TableToChartProvider;
