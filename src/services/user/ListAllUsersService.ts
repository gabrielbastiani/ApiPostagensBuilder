import prismaClient from "../../prisma";

class ListAllUsersService {
   async execute() {
      const allUsers = await prismaClient.user.findMany();

      return allUsers;
   }
}

export { ListAllUsersService }