import axios from "axios";

const scrumApi = axios.create({
  baseURL: "http://127.0.0.1:8000/api",
});
export async function create(studentData) {
  try {
    return await scrumApi.post("/usuario", studentData);
  } catch (error) {
    console.log(error);
  }
}
const rol = axios.create({
  baseURL: "http://127.0.0.1:8000/api",
});
export async function createRol(rolData) {
  try {
    return await rol.post("/rol", rolData);
  } catch (error) {
    console.log(error);
  }
}