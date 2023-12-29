interface User {
  name?: string;
  date?: string;
  gender?: string;
  email?: string;
  password?: string;
  address?: string;
  join?: string;
  status?: string;
  classIdResult?: ClassItem[];
  examTypeResult?: ExamTypeItem[];
  classId?: string | number;
  examType?: string | number;
}
type ClassItem = {
  id: number;
  grade: string;
};

type ExamTypeItem = {
  id: number;
  type: string;
};
const urlcalling = async (url: string, method: string, data: User) => {
  console.log(url);
  const result = await fetch(url, {
    method: method,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: "Bearer " + localStorage.getItem("jwttoken"),
    },

    body: JSON.stringify(data),
  });
  return result.json();
};

export default urlcalling;
