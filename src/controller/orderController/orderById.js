const { PrismaClient } = require("@prisma/client");
const express = require("express");
const prisma = new PrismaClient();

const orderById = async (request, response) => {
    try{
        const {id} = request.params;

        const oById = await prisma.order.findMany({
            where:{
                userId: parseInt(id),
            },
            include:{
                pizzas:{
                    select:{
                        pizza:true,
                    },
                },
            },
        })

        const pizzas = oById.flatMap(order => order.pizzas ? order.pizzas.pizza : []);
        response.status(200).send(pizzas);
    }catch(error){
        console.log(error)
        response.status(200).send('error')
    }
}

module.exports = {orderById};