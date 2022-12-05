import prismaClient from '../../prisma'
import { hash } from 'bcryptjs'
import nodemailer from "nodemailer";
require('dotenv/config');


interface UserRequest {
  name: string;
  email: string;
  password: string;
}

class CreateUserService {
  async execute({ name, email, password }: UserRequest) {

    // verificar se ele enviou um email
    if (!email) {
      throw new Error("Email incorrect")
    }

    //Verificar se esse email já está cadastrado na plataforma
    const userAlreadyExists = await prismaClient.user.findFirst({
      where: {
        email: email,
      }
    })

    if (userAlreadyExists) {
      throw new Error("User already exists")
    }

    const passwordHash = await hash(password, 8);

    const user = await prismaClient.user.create({
      data: {
        name: name,
        email: email,
        password: passwordHash,
      },
      select: {
        id: true,
        photo: true,
        name: true,
        email: true,
      }
    })

    /* const transporter = nodemailer.createTransport({
      host: process.env.HOST_SMTP,
      port: 465,
      auth: {
        user: process.env.USER_SMTP,
        pass: process.env.PASS_SMTP
      }
    })

    await transporter.sendMail({
      from: "'Blog - Builder Seu Negocio Online' <contato@builderseunegocioonline.com.br>",
      to: user.email,
      subject: "Confirme seu cadastro de usuario no Blog",
      html: `<div style="background-color: rgb(223, 145, 0); color: black; padding: 0 55px;">
                <h2>Confirme seu cadastro!</h2>
            </div>
            
            <article>
                <p>Olá, ${user.name}!</p>
                <p><a href="https://blog.builderseunegocioonline.com.br/userAuthenticated?user_id=${user.id}">CLIQUE AQUI</a>, para confirmar sua conta junto ao Blog e poder acessa-lo com os dados que cadastrou anteriormente.</p>
            </article>
            
            <div style="background-color: rgb(223, 145, 0); color: black; padding: 0 55px;">
                <h5>Blog Builder Seu Negocio Online</h5>
            </div>`,
    });

    await transporter.sendMail({
      from: "'Blog - Builder Seu Negocio Online' <contato@builderseunegocioonline.com.br>",
      to: "gabriel.bastiani@hotmail.com.br",
      subject: "Novo usúario se cadastrando no blog",
      html: `<div style="background-color: rgb(223, 145, 0); color: black; padding: 0 55px;">
                <h2>Novo usúario!</h2>
            </div>
            
            <article>
                <p>Olá!</p>
                <p>Um usúario de nome <b>${user.name}</b> se cadastrou no blog.</p>
            </article>
            
            <div style="background-color: rgb(223, 145, 0); color: black; padding: 0 55px;">
                <h5>Blog Builder Seu Negocio Online</h5>
            </div>`,
    }); */

    return user;
  }
}

export { CreateUserService }