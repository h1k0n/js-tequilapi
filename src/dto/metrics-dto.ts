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

import { ConnectCountDTO, parseConnectionCountDTO } from './connect-count-dto'

export interface MetricsDTO {
  connectCount?: ConnectCountDTO
}

export function parseMetricsDTO (data: any): MetricsDTO {
  try {
    return { connectCount: parseConnectionCountDTO(data.connectCount) }
  } catch (err) {
    return { connectCount: undefined }
  }
}
