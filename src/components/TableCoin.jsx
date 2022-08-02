import React from "react";
import Coins from "./Coins";

const titles = ["#", "Coin", "Priece", "24h", "Volumeb 24h", "Market Cap"];

export const TableCoin = ({ coins, search }) => {
  const filterCoin = coins.filter(
    (coin) =>
      coin.name.toLowerCase().includes(search.toLowerCase()) ||
      coin.symbol.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <table className="table-container">
      <thead className="thead__titles">
        <tr>
          {titles.map((title) => (
            <td>{title}</td>
          ))}
        </tr>
      </thead>
      <tbody className="tbod__info-coin">
        {Object.values(filterCoin).map(
          (
            {
              name,
              image,
              id,
              current_price,
              total_volume,
              market_cap,
              symbol,
              price_change_percentage_24h,
            },
            index
          ) => (
            <Coins
              name={name}
              image={image}
              key={id}
              index={index + 1}
              current_price={current_price}
              total_volume={total_volume}
              market_cap={market_cap}
              symbol={symbol}
              change={price_change_percentage_24h}
            />
          )
        )}
      </tbody>
    </table>
  );
};
