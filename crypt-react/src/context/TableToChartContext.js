import { createContext, useState } from "react";

export const TableToChartContext = createContext({});

function TableToChartProvider({ children }) {
	const [CoinDatePriceStore, setCoinDatePriceStore] = useState({});

	return (
		<TableToChartContext.Provider
			value={(CoinDatePriceStore, setCoinDatePriceStore)}
		>
			{children}
		</TableToChartContext.Provider>
	);
}

export default TableToChartProvider;
