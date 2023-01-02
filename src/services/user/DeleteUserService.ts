import prismaClient from "../../prisma";

interface PostRequest {
    user_id: string;
  }

class DeleteUserService {
  async execute({ user_id }: PostRequest){

    const users = await prismaClient.user.delete({
      where:{
        id: user_id
      }
    })

    return users;
    
  }
}

export { DeleteUserService }