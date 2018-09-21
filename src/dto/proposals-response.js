/*
 * Copyright (C) 2017 The "mysteriumnetwork/mysterium-vpn" Authors.
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

// @flow
import ProposalDTO from './proposal'

type ResponseMapped = {
  proposals: Array<Object>
}

class ProposalsResponseDTO {
  proposals: ?Array<ProposalDTO>

  constructor (responseData: ResponseMapped) {
    if (typeof responseData.proposals !== 'undefined') {
      this.proposals = responseData.proposals.map((proposal) => new ProposalDTO(proposal))
    }
  }
}

export default ProposalsResponseDTO