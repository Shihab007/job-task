"use strict";

const Joi = require("joi");
const Dao = require("../util/dao");
const uuid = require("uuid");

const payload_scheme = Joi.object({
    productOid: Joi.string().required(),
});

const route_controller = {
    method: "POST",
    path: '/delete-product-by-oid',
    options: {
        description: "Delete product",
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
        console.log("--------------------------------------------------------");
        const data = await delete_data(request);
        return h.response({
            status: true,
            code: 200,
            data: data
        });
    },
};

const delete_data = async (request) => {

    console.log(request.payload.productOid);

    let data = [];

    let query = `delete from public.product where oid = '${request.payload.productOid}'`;

    let sql = {
        text: query,
        values: data,
    };
    try {
        data = await Dao.execute_value(request.pg, sql);
    } catch (e) {
        console.log(`An exception occurred while delete issue : ${e?.message}`);
    }
    return data;
};

module.exports = route_controller;

