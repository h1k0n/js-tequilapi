"use strict";
/*
 * Copyright (C) 2017 The "mysteriumnetwork/js-tequilapi" Authors.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
Object.defineProperty(exports, "__esModule", { value: true });
function parseConsumerLocationDTO(data) {
    return {
        ip: data.ip,
        asn: data.asn,
        isp: data.isp,
        continent: data.continent,
        country: data.country,
        city: data.city,
        node_type: data.node_type
    };
}
exports.parseConsumerLocationDTO = parseConsumerLocationDTO;
