import axios from "axios";

export function getRentals() {
  return axios.get("https://bonos-backend-ecode.vercel.app/api/projects");
}
