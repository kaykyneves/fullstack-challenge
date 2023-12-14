const { PrismaClient } = require('@prisma/client');
const express = require('express');
const prisma = new PrismaClient();

const showPizzas = async (request, response) => {
    const listPizzas = await prisma.pizzas.findMany({
        select:{
            id_pizza: true,
            pizza: true,
            price: true,
            ingredients: true,
        },
    })

    if(listPizzas.length === 0){
        response.status(200).json('There is no pizza avaible');
    }
    response.status(200).json(listPizzas);
}

module.exports = {showPizzas};