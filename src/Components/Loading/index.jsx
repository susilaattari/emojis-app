import Style from "./Loading.module.css";

const Loading = () => {
  return (
    <div className={Style.loading}>
      <div className={Style.isi}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loading;
