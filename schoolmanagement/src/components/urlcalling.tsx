interface User {
  name?: string;
  date?: string;
  gender?: string;
  email: string;
  password: string;
  address?: string;
  join?: string;
  status?: string;
}
const urlcalling = async (url: string, method: string, data: User) => {
  console.log(url);
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

export default urlcalling;
