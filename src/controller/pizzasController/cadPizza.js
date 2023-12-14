const { PrismaClient } = require('@prisma/client');
const express = require('express');
const prisma = new PrismaClient();

const cadPizza = async (request, response) => {
  try {
    const { name, price, ingredients} = request.body;

    const pizza = await prisma.pizzas.create({
      data: {
        pizza: name,
        price,
        ingredients
      },
      select: {
        pizza: true,
        price: true,
        ingredients: true,
        createdAt: true, 
      },
    });

    return response.json(pizza);
  } catch (error) {
    console.error('Error creating the pizza:', error);
    return response.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {cadPizza}