const { PrismaClient } = require("@prisma/client");
const express = require("express");
const prisma = new PrismaClient();

const createOrder = async (request, response) => {
    try {
      const { idUser, idPizzas } = request.body;
      console.log(idPizzas)
      // If the user don't exist, it can not order a pizza
      const userExists = await prisma.user.findUnique({
        where: {
          id: idUser,
        },
      });
  
      if (!userExists) {
        response.status(404).send('User not found');
        return;
      }
  
      // it iterates the array passed by the variable 'idPizzas', and makes the insert in the database
      const orders = [];
      for (const pizzaId of idPizzas) {
        const order = await prisma.order.create({
          data: {
            user: {
                connect:{
                    id: idUser,
                },
            } ,
            pizzas:{
                connect:{
                    id_pizza: pizzaId,
                },
            },
          },
        });
        orders.push(order);
      }
  
      response.status(200).json(orders);
    } catch (error) {
      console.error('Error creating order:', error);
      response.status(500).json({ error: 'Internal Server Error' });
    }
  };  
module.exports = {createOrder};