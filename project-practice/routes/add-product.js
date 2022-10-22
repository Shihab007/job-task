"use strict";

const Joi = require("joi");
const Dao = require("../util/dao");
const uuid = require("uuid");

const payload_scheme = Joi.object({
    name: Joi.string().required(),
    quantity: Joi.number().required(),
    available: Joi.number().required(),
    img: Joi.string().allow(null, '').optional(),
    price: Joi.number().required(),

});

const route_controller = {
    method: "POST",
    path: '/add-product',
    options: {
        description: "Add product",
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

    let oid = uuid.v4();

    let query = `INSERT INTO public.product (oid, name, quantity, available, img, price)
    VALUES ('${oid}', '${request.payload.name}', ${request.payload.quantity}, '${request.payload.available}', '${request.payload.img}', ${request.payload.price})`;

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

