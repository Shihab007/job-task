"use strict";

const Joi = require("joi");
const Dao = require("../util/dao");


const payload_scheme = Joi.object({
    email: Joi.string().optional(),
});


const route_controller = {
    method: "POST",
    path: '/get-order-by-customer-mail',
    options: {
        description: "Get Order by Customer mail",
        validate: {
            payload: payload_scheme,
            options: {
                allowUnknown: false,
            },
            failAction: async (request, h, err) => {
                return h.response({ code: 301, status: false, message: err?.message }).takeover();
            },
        }
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


    let sql = {
        text: `select * from public.order where email = $1`,
        values: [request.payload.email]
    }
    try {
        data = await Dao.get_data(request.pg, sql);
    } catch (e) {
        console.log(`An exception occurred while getting user data : ${e?.message}`);
    }
    return data;
};

module.exports = route_controller;
