const { PrismaClient } = require("@prisma/client");
const express = require("express");
const prisma = new PrismaClient();

const listOrder = async (request, response) => {

    const orderList = await prisma.order.findMany();
    if (orderList.length === 0) {
        return response.status(200).json("no order avaible");
    } else {
        response.status(200).send(orderList);
        return;
    }
    };

module.exports = { listOrder };
