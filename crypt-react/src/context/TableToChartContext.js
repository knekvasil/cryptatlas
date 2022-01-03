import { createContext, useState } from "react";

export const TableToChartContext = createContext({});

function TableToChartProvider({ children }) {
	const [ChartStore, setChartStore] = useState({
		date: "",
		coin: "",
		value: "",
	});

	return (
		<TableToChartContext.Provider value={{ ChartStore, setChartStore }}>
			{children}
		</TableToChartContext.Provider>
	);
}

export default TableToChartProvider;
