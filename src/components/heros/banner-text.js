function BannerText(props) {
  return (
    <div className={"c-banner-text"}>
      <div className={"text-container"}>
        <h2>{props.text1}</h2>
        <h1>{props.text2}</h1>
      </div>
    </div>
  );
}

export default BannerText;
