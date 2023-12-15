const { PrismaClient } = require("@prisma/client");
const express = require("express");
const { criptoPassword } = require("../../helper/bcrypt");
const { verificarEmail } = require("../../middlewares/mailBox");
const prisma = new PrismaClient();

// Creating a new user
const createUser = async (request, response) => {
  try {
    const { name, email, password } = request.body;

    // Checking if the email is valid
    const emailValid = await verificarEmail(email);

    //if the response is 'false', it throws a message and exit
    if (emailValid === false) {
      response.status(200).json("invalid email");
      return;
    }

    // Checking if the email already exists in the database
    /*
    const verifyEmail = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    // If it exists, return a response; otherwise, continue with the code
    if (verifyEmail) {
      return response.status(401).json("Email already registered");
    }
    */
    // Using bcrypt to hash the password
    const passCript = await criptoPassword(password);

    // Using Prisma to create the new user
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: passCript,
      },
      // Selecting the data to be returned
      select: {
        id: true,
        name: true,
        email: true,
        createdAt: true,
      },
    });

    // Returning the user data
    return response.status(201).json(user);
  } catch (error) {
    console.error("Error creating user:", error);
    return response.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { createUser };
