const ulrcalling = async (url: string, data = {}) => {
  const result = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(data),
  });
  return result.json();
};

export default ulrcalling;
