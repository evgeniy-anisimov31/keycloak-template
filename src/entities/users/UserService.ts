import {DB_DATA} from "../../db/db";

class UserService {
  async getUsers() {
    return (await DB_DATA.query('SELECT * FROM public.users')).rows
  }
}

export default new UserService();