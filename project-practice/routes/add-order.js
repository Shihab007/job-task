"use strict";

const Joi = require("joi");
const Dao = require("../util/dao");
const uuid = require("uuid");

const payload_scheme = Joi.object({
    productId: Joi.string().allow(null, '').optional(),
    name: Joi.string().allow(null, '').optional(),
    email: Joi.string().allow(null, '').optional(),
    phone: Joi.string().allow(null, '').optional(),
    quantity: Joi.number().allow(null, '').optional(),
    address: Joi.string().allow(null, '').optional(),
    price: Joi.number().allow(null, '').optional(),
});

const route_controller = {
    method: "POST",
    path: '/add-order',
    options: {
        description: "Add order",
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
        if (data == null) {
            return h.response({
                status: false,
                code: 201,
                message: "Something is wrong"
            });
        }

        return h.response({
            status: true,
            code: 200,
            message: "Data has been inserted successfully"
        });
    },
};

const get_data = async (request) => {
    let data = null;

    let oid = uuid.v4();
    let query = `INSERT INTO public.order (oid, product_id, name, phone, email, quantity, address, price)
    VALUES ('${oid}','${request.payload.productId}', '${request.payload.name}', '${request.payload.phone}','${request.payload.email}', ${request.payload.quantity}, '${request.payload.address}', ${request.payload.price})`;

    let sql = {
        text: query,
        values: [],
    };
    try {
        data = await Dao.execute_value(request.pg, sql);
        return [];
    } catch (e) {
        console.log(`An exception occurred while getting issue list : ${e?.message}`);
    }
    return data;
};

module.exports = route_controller;

