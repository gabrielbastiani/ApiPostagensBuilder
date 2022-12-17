import prismaClient from "../../prisma";

class AvatarUserService {
  async execute({user_id}){
    const user = await prismaClient.user.findUnique({
      where:{
        id: user_id
      },
      select:{
        photo: true,
      }
    })

    return user;
  }
}

export { AvatarUserService }