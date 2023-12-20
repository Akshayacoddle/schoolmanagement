const ulrcalling = async (url: string = "", data = {}, method: string) => {
  const result = await fetch(url, {
    method: method,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(data),
  });
  return result.json();
};
export default ulrcalling;
