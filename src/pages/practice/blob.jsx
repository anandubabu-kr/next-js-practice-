import useDownloadDocument from "@/libs/get-blob";
import React from "react";

const Blob = () => {
  const { downloadDocument } = useDownloadDocument();
  return (
    <div>
      <h1>Blob download</h1>
      <button onClick={() => downloadDocument("data.xlsx")}>download</button>
    </div>
  );
};

export default Blob;
