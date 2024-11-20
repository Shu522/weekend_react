const Content = () => {
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          color: "#dbdbdb",
        }}
      >
        <span>차량명</span>
        <span>트림</span>
        <span>차량번호</span>
        <span>차량등록일</span>
        <span>주행거리</span>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        <span>쏘렌토</span>
        <span>가솔린 터보 2.5</span>
        <span>123가0987</span>
        <span>2020년 8월 30일</span>
        <span>34,567km</span>
      </div>
    </div>
  );
};

export default Content;
