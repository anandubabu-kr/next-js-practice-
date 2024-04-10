export default function useDownloadDocument() {
  const downloadDocument = async (name = "testfile.txt") => {
    console.log("»»»» ⟪–DEBUG–⟫  »» ", "download");
    const service = `/api/sendblob`;

    const file = await fetchWithToken(service);

    if (file) {
      try {
        const url = URL.createObjectURL(file);
        const link = document.createElement("a");
        link.href = url;

        link.setAttribute("download", name);

        document.body.appendChild(link);

        link.click(); // download to the system

        // window.open(url, "_blank"); // to display in new tab [TESTING]

        document.body.removeChild(link);
      } catch (error) {}
    }
  };

  return { downloadDocument };
}

const fetchWithToken = async (service) => {
  try {
    const response = await fetch(`${service}`, {
      headers: { responseType: "blob" },
    });

    if (!response.ok) {
      throw "error";
    }

    const blob = await response.blob();
    console.log("»»»» ⟪–DEBUG–⟫  »» ");

    return blob;
  } catch (error) {
    console.error("Error downloading file:", error);
  }
};
