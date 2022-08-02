import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import { TableCoin } from "./components/TableCoin";

function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const URL =
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false";

    axios
      .get(URL)
      .then((res) => setCoins(res.data))
      .catch((err) => console.log(err.data));
  }, []);
  console.log(coins);

  return (
    <div className="App">
      <div className="container-input">
        <input
          type="text"
          placeholder="Search"
          className="input-serch"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <TableCoin coins={coins} search={search} />
    </div>
  );
}

export default App;
