import prismaClient from "../../prisma";

interface UserRequest {
  user_id: string;
}

class RemovePhotoUserService {
  async execute({ user_id }: UserRequest) {
    const userPhotho = prismaClient.user.findUnique({
      where: {
        id: user_id,
      },
    });
    return userPhotho;
  }
}

export { RemovePhotoUserService };
