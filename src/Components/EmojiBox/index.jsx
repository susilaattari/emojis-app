import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import Style from "./EmojiBox.module.css";
import classNames from "classnames";

const EmojiBox = ({ symbol, title }) => {
  const [seleced, setSeleced] = useState(false);

  useEffect(() => {
    const time = setTimeout(() => {
      setSeleced(false);
    }, 600);

    return () => clearTimeout(time);
  }, [seleced]);
  return (
    <div
      onClick={() => {
        navigator.clipboard.writeText(symbol);
        setSeleced(true);
      }}
      className={classNames(Style.EmojiBox, {
        [Style.selected]: seleced,
      })}
    >
      <p
        className={Style.emoji}
        dangerouslySetInnerHTML={{
          __html: `&#${symbol.codePointAt(0)}`,
        }}
      />
      <p
        className={classNames(Style.emojiTitle, {
          [Style.selectedTitle]: seleced,
        })}
      >
        {seleced ? "Copy" : title}
      </p>
    </div>
  );
};

EmojiBox.propTypes = {
  symbol: PropTypes.string,
  title: PropTypes.string,
};
export default EmojiBox;
