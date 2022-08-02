import React from "react";

const Coins = ({
  name,
  image,
  id,
  index,
  current_price,
  total_volume,
  market_cap,
  symbol,
  change,
}) => {
  return (
    <tr key={id}>
      <td>{index}</td>
      <td>
        <img className="image-coin" src={image} alt={`image-${name}`} />
        <span className="name-coin">{name}</span>
        <span className="symbol-coin">{symbol}</span>
      </td>
      <td>{current_price} US$</td>
      <td
        style={
          change > 0
            ? { color: "rgb(31, 250, 169)" }
            : { color: "rgb(255, 65, 78)" }
        }>
        {change.toFixed(1)}%
      </td>
      <td>{total_volume}</td>
      <td>{market_cap}</td>
    </tr>
  );
};

export default Coins;
