import prismaClient from "../../prisma";

class AvatarUserService {
  async execute({name}){
    const user = await prismaClient.user.findUnique({
      where:{
        name
      },
      select:{
        photo: true,
      }
    })

    return user;
  }
}

export { AvatarUserService }