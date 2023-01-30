import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import EmojiBox from "../EmojiBox";
import Style from "./Emojis.module.css";
import { FilterEmojis } from "../../utils/FilterEmojis";
import Empty from "../Empty";

function Emojis({ dataEmojis, searchText }) {
  const [filteredEmojis, setFilteredEmojis] = useState([]);
  useEffect(() => {
    setFilteredEmojis(
      FilterEmojis({
        emojisData: dataEmojis,
        searchText,
      })
    );
  }, [dataEmojis, searchText]);

  if (filteredEmojis.length > 0) {
    return (
      <div className={Style.emojis}>
        {filteredEmojis.map((data, index) => {
          return (
            <EmojiBox key={index} symbol={data.symbol} title={data.title} />
          );
        })}
      </div>
    );
  } else {
    return <Empty text="Opps... Emojis Kosong broooow" />;
  }
}

Emojis.propTypes = {
  dataEmojis: PropTypes.array,
};
export default Emojis;
