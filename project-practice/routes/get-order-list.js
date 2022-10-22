"use strict";

const Joi = require("joi");
const Dao = require("../util/dao");

const route_controller = {
    method: "GET",
    path: '/get-order-list',
    options: {
        description: "Get order list"
    },
    handler: async (request, h) => {
        const data = await get_data(request);
        return h.response({
            status: true,
            code: 200,
            data: data
        });
    },
};

const get_data = async (request) => {
    let data = [];

    let query = `select * from public.order i`;

    let sql = {
        text: query,
        values: data,
    };
    try {
        data = await Dao.get_data(request.pg, sql);
    } catch (e) {
        console.log(`An exception occurred while getting issue list : ${e?.message}`);
    }
    return data;
};

module.exports = route_controller;
