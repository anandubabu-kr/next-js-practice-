export default async function handler(req, res) {
  const endpoint = `https://www.w3resource.com/python-exercises/pandas/excel/SaleData.xlsx`;

  try {
    const response = await fetch(endpoint);

    if (!response.ok) {
      console.error(">>>   Error fetching document:", {
        endpoint,
        status: response.status,
        text: response.statusText,
      });

      return res.status(response.status).send("Error fetching document");
    }

    const blob = await response.blob();

    // const data = new Blob([blob], { type: blob.type });
    // const file = new File([blob], blob.name, { type: blob.type });

    const contentType =
      response.headers.get("content-type") || "application/octet-stream";

    console.log(
      "»»»»»» [DEBUG :  ] -- blob data :",
      response.headers.get("content-type"),
      response.headers.get("Content-Length")
    );

    // response.body.pipe(res);

    const data = {
      key: "value",
    };

    const jsonString = JSON.stringify(data);
    const test = new Blob([jsonString], { type: "application/json" });
    // console.log("»»»»»» [DEBUG : blob ] -- :", test); //Blob { size: 15, type: 'application/json' }

    const arrBuffer = await blob.arrayBuffer();
    const buffer = Buffer.from(arrBuffer);

    res
      .status(200)
      .setHeader("Content-Type", contentType || "application/octet-stream")
      //   .setHeader("Content-Disposition", `attachment; filename="localized.json"`)
      .send(buffer);
  } catch (error) {
    console.error("Error fetching document:", error);
    res.status(500).send("Error fetching document");
  }
}

/*
  
  
  
  const fetchWithToken = async (service, token) => {
  
    try {
  
      const response = await fetch(`${process.env.BACKEND_URL}${service}`, {
  
        headers: { Authorization: `Bearer ${token}` },
  
      });
  
  
  
      const blob = await response.blob();
  
      return blob;
  
    } catch (error) {
  
      console.error("Error downloading file:", error);
  
    }
  
  };
  
  
  
  */
