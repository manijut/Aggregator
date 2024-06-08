import Moralis from 'moralis';
import fetch from 'node-fetch';
import * as CONST from './constant.js';

export async function getTokenData(CA, chain) {
  try {
    if (!Moralis.Core.isStarted) {
      await Moralis.start({
        apiKey: CONST.MORALIS_API_KEY,
      });
    }
    let result = {};

    const getChain = CONST.CHAINS.find((obj) => obj.id == chain);

    if (getChain.id !== 3) {
      let response = await Moralis.EvmApi.token.getTokenMetadata({
        chain: getChain.chain,
        addresses: [CA],
      });

      const resp = await Moralis.EvmApi.token.getTokenPrice({
        chain: getChain.chain,
        include: 'percent_change',
        address: CA,
      });

      response.jsonResponse[0]['chain'] = getChain.name;
      result = { ...response.jsonResponse[0], ...resp.jsonResponse };
    } else {
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          'X-API-Key': CONST.MORALIS_API_KEY,
        },
      };

      const response = await fetch(
        `https://solana-gateway.moralis.io/token/mainnet/${CA}/metadata`,
        options
      );
      const responseJson = await response.json();

      let data = {};
      if (responseJson?.metaplex?.metadataUri) {
        const response = await fetch(responseJson?.metaplex?.metadataUri);
        if (response.ok) {
          data = await response.json();
          data.links = data?.extensions;
        }
      }

      const resp = await Moralis.SolApi.token.getTokenPrice({
        network: 'mainnet',
        address: CA,
      });
      result = { ...responseJson, ...resp.jsonResponse, ...data };
      result.address = result.mint;
      result.chain = getChain.name;
    }

    return result;
  } catch (e) {
    console.error(e);
    throw e;
  }
}
