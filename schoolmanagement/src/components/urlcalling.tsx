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
  academicYearResult?: AcademicYearItem[];
  roomIdResult?: RoomItem[];
  subjectIdResult?: SubjectItem[];
  classId?: string | number;
  examType?: string | number;
  room?: string | number;
  subject?: string | number;
  academicYear?: string | number;
  examName?: string | number;
  startDate?: string | number;
  endDate?: string | number;
}
type ClassItem = {
  id: number;
  grade: string;
};

type ExamTypeItem = {
  id: number;
  type: string;
};
type AcademicYearItem = {
  academic_year: number;
};

type RoomItem = {
  id: number;
  name: string;
};
type SubjectItem = {
  id: number;
  name: string;
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
