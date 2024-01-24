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
  examSubjectResult?: [];
  studentHallticketResult?: [];
  examResult?: events[];
  result?: Results[];
}
type Results = {
  name: string;
  total_mark: number;
  mark_obtained: number;
  type: string;
};
type ClassItem = {
  id: number;
  grade: string;
};
type events = {
  name: string;
  date: string;
  location: string;
  start_time: string;
  end_time: string;
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
const BASE = process.env.REACT_APP_BASE_URL;
console.log(BASE);

const urlcalling = async (url: string, method: string, data?: User) => {
  const result = await fetch(`${BASE}${url}`, {
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
