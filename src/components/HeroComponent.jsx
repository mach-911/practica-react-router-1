export default ({ url }) => {
  return (
    <div className="home-imagen">
      {url.includes(".mp4") ? (
        <video src={url} autoPlay loop></video>
      ) : (
        <img src={url} alt="imagen" style={{ width: "100%" }} />
      )}
    </div>
  );
};
