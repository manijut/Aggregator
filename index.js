import TelegramBot from 'node-telegram-bot-api';
import * as CONST from './constant.js';
import { identifyBlockchain } from './blockchain.js';
import { getTokenData } from './tokenInfo.js';

const token = '7085010836:AAEG91FvXrKgHLppodTVnrdv7blcO7dcCEg';

// const token = '7084623925:AAEIkICz7Gdistqf0EKmU9Jrg6neK-mCDZc';

// Create a new bot instance
const bot = new TelegramBot(token, { polling: true });
const CHANNEL_ID = '-1002069024087';

// Initialize an object to track the bot's usage
let performanceTracker = {};
let linkClicks = {};
let botList = {};
let userState = {
  add_bot: false,
  add_address: false,
  select_chain: false,
  selection: null,
};

// Define the main menu
const mainMenu = {
  reply_markup: {
    inline_keyboard: CONST.MAIN_MENU,
  },
};

// Handle the /start command
bot.onText(/\/start/, async (msg) => {
  const chatId = msg.chat.id;
  const userId = msg.from.id;

  try {
    // Check if the user is a member of the channel
    const chatMember = await bot.getChatMember(CHANNEL_ID, userId);
    const isMember = ['member', 'administrator', 'creator'].includes(
      chatMember.status
    );

    if (isMember) {
    // User is a member, allow access
    const photoUrl = './design2.png';
    const caption = CONST.MENU_TEXT;

    bot.sendPhoto(chatId, photoUrl, {
      caption,
      reply_markup: mainMenu.reply_markup,
    });
    // Add your bot's functionalities here
    } else {
      // User is not a member, deny access
      bot.sendMessage(chatId, CONST.WELCOME_TEXT, { parse_mode: 'HTML' });
    }
  } catch (error) {
    console.error('Error checking membership:', error);
    bot.sendMessage(
      chatId,
      'An error occurred while checking your membership status.'
    );
  }
});

// Handle the /help command
bot.onText(/\/help/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, CONST.HELP_MESSAGE);
});

// Handle the /add command
bot.onText(/\/add/, (msg) => {
  const chatId = msg.chat.id;
  userState.add_bot = true;
  bot.sendMessage(chatId, 'Please send the URL of your bot.');
});

// Handle the /tutorial command
bot.onText(/\/tutorial/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, 'Rawr! soon');
});

// Handle the /donate command
bot.onText(/\/donate/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, CONST.DONATION_TEXT, { parse_mode: 'Markdown' });
});

// Handle callback queries (when inline buttons are clicked)
bot.on('callback_query', function onCallbackQuery(callbackQuery) {
  const action = callbackQuery.data;
  const msg = callbackQuery.message;
  const chatId = msg.chat.id;
  const messageId = msg.message_id;
  let text;
  let options;

  if (performanceTracker[action]) {
    performanceTracker[action]++;
  } else {
    performanceTracker[action] = 1;
  }

  switch (action) {
    /*<!---------------------------------Ethereum Menu -------------------------------->*/
    case 'ethereum':
      text = CONST.ETH_MENU_TEXT;
      options = optionsFormat(CONST.ETH_MENU);
      break;
    case 'eth_snipe':
      text = CONST.ETH_SNIPE_TEXT;
      options = optionsFormat(CONST.ETH_SNIPE);
      break;
    case 'eth_scan':
      text = CONST.ETH_SCAN_TEXT;
      options = optionsFormat(CONST.ETH_SCAN);
      break;
    case 'eth_audit':
      text = CONST.ETH_AUDIT_TEXT;
      options = optionsFormat(CONST.ETH_AUDIT);
      break;
    case 'eth_honeypot':
      text = CONST.ETH_HONEYPOT_TEXT;
      options = optionsFormat(CONST.ETH_HONEYPOT);
      break;
    case 'eth_research':
      text = CONST.ETH_RESEARCH_TEXT;
      options = optionsFormat(CONST.ETH_RESEARCH);
      break;
    /*<!--------------------------------- Solana Menu -------------------------------->*/
    case 'solana':
      text = CONST.SOL_MENU_TEXT;
      options = optionsFormat(CONST.SOL_MENU);
      break;
    case 'sol_snipe':
      text = CONST.SOL_SNIPE_TEXT;
      options = optionsFormat(CONST.SOL_SNIPE);
      break;
    case 'sol_scan':
      text = CONST.SOL_SCAN_TEXT;
      options = optionsFormat(CONST.SOL_SCAN);
      break;
    case 'sol_research':
      text = CONST.SOL_RESEARCH_TEXT;
      options = optionsFormat(CONST.SOL_RESEARCH);
      break;

    /*<!--------------------------------- Bsc Menu -------------------------------->*/

    case 'bsc':
      text = CONST.BSC_MENU_TEXT;
      options = optionsFormat(CONST.BSC_MENU);
      break;
    case 'bsc_snipe':
      text = CONST.BSC_SNIPE_TEXT;
      options = optionsFormat(CONST.BSC_SNIPE);
      break;
    case 'bsc_scan':
      text = CONST.BSC_SCAN_TEXT;
      options = optionsFormat(CONST.BSC_SCAN);
      break;
    case 'bsc_audit':
      text = CONST.BSC_AUDIT_TEXT;
      options = optionsFormat(CONST.BSC_AUDIT);
      break;
    case 'bsc_honeypot':
      text = CONST.BSC_HONEYPOT_TEXT;
      options = optionsFormat(CONST.BSC_HONEYPOT);
      break;
    case 'bsc_research':
      text = CONST.BSC_RESEARCH_TEXT;
      options = optionsFormat(CONST.BSC_RESEARCH);
      break;

    /*<!--------------------------------- Base Menu -------------------------------->*/

    case 'base':
      text = CONST.BASE_MENU_TEXT;
      options = optionsFormat(CONST.BASE_MENU);
      break;
    case 'base_snipe':
      text = CONST.BASE_SNIPE_TEXT;
      options = optionsFormat(CONST.BASE_SNIPE);
      break;
    case 'base_scan':
      text = CONST.BASE_SCAN_TEXT;
      options = optionsFormat(CONST.BASE_SCAN);
      break;
    case 'base_audit':
      text = CONST.BASE_AUDIT_TEXT;
      options = optionsFormat(CONST.BASE_AUDIT);
      break;
    case 'base_honeypot':
      text = CONST.BASE_HONEYPOT_TEXT;
      options = optionsFormat(CONST.BASE_HONEYPOT);
      break;
    case 'base_research':
      text = CONST.BASE_RESEARCH_TEXT;
      options = optionsFormat(CONST.BASE_RESEARCH);
      break;

    /*<!--------------------------------- Ton Menu -------------------------------->*/

    case 'ton':
      text = CONST.TON_MENU_TEXT;
      options = optionsFormat(CONST.TON_MENU);
      break;
    case 'ton_snipe':
      text = CONST.TON_SNIPE_TEXT;
      options = optionsFormat(CONST.TON_SNIPE);
      break;
    case 'ton_scan':
      text = CONST.TON_SCAN_TEXT;
      options = optionsFormat(CONST.TON_SCAN);
      break;
    case 'ton_research':
      text = CONST.TON_RESEARCH_TEXT;
      options = optionsFormat(CONST.TON_RESEARCH);
      break;

    /*<!--------------------------------- ADD BOT Menu -------------------------------->*/
    case 'addBot':
      userState.add_bot = true;
      bot.sendMessage(chatId, 'Please send the URL of your bot.');
      return;
    case 'addAddress':
      userState.select_chain = true;
      bot.sendMessage(
        chatId,
        `
          Please choose the corresponding number of your blockchain:
          1- Ethereum (ETH) ⛓️
          2- Binance Smart Chain (BNB) 💹
          3- Solana (SOL) ☀️
          4- Basechain (BASE) 🏢
          5- Polygon (MATIC) 🟣
          6- Chiliz (CHZ) 🌶️
          7- Avalanche (AVAX) 🏔️
          8- Arbitrum (ARB) ⚖️
          9- I'm not sure 🤔
        `
      );

      return;
    case 'back':
      text = CONST.MENU_TEXT;
      options = mainMenu;
      break;
    case 'tutorials':
      bot.sendMessage(chatId, CONST.TUTORIAL_TEXT);
      break;
    case 'donate':
      bot.sendMessage(chatId, CONST.DONATION_TEXT);
      break;
    default:
      // Track link clicks
      if (linkClicks[action]) {
        linkClicks[action]++;
      } else {
        linkClicks[action] = 1;
      }
      return;
  }
  // if(action != 'addBot' || action != 'tutorials' || action != 'donate')
  //    bot.editMessageText(text, {chat_id: chatId, message_id: messageId, ...options});
  if (action !== 'addBot' && action !== 'tutorials' && action !== 'donate') {
    bot
      .editMessageCaption(text, {
        chat_id: chatId,
        message_id: messageId,
        reply_markup: options.reply_markup,
      })
      .catch((error) => {
        console.error('Error editing message text:', error);
      });
  }
});

function optionsFormat(opt) {
  return {
    reply_markup: {
      inline_keyboard: opt,
    },
  };
}

// Handle the user's response after clicking the "Add Bot" button
bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  const text = msg.text;

  // If the message is a URL, add it to the bot list
  if (userState.add_bot && text.toLowerCase() != 'quit') {
    if (text.startsWith('http://') || text.startsWith('https://')) {
      if (!botList[chatId]) {
        botList[chatId] = [];
      }
      botList[chatId].push(text);
      bot.sendMessage(chatId, CONST.ADD_BOT_TEXT);
      userState.add_bot = false;
    } else {
      bot.sendMessage(
        chatId,
        " Bot Url isn't valid \n - To exit the adding bot process, type 'quit'."
      );
    }
  } else if (userState.add_bot && text.toLowerCase() == 'quit') {
    userState.add_bot = false;
  }

  if (userState.add_address) {
    if (userState.selection == 9) {
      identifyBlockchain(text)
        .then((blockchain) => {
          try {
            if (blockchain == 'eth') {
              userState.selection = 1;
            } else if (blockchain == 'bsc') {
              userState.selection = 2;
            } else if (blockchain == 'sol') {
              userState.selection = 3;
            } else if (blockchain == 'Unknown') {
              userState.add_address = false;
              userState.selection = null;
              bot.sendMessage(chatId, `This contract is on: ${blockchain}`);
            } else {
              userState.add_address = false;
              userState.selection = null;
              throw new Error(`Unsupported blockchain: ${blockchain}`);
            }

            tokenInformation(text, chatId);
          } catch (error) {
            console.error(error);
            bot.sendMessage(chatId, `An error occurred: ${error.message}`);
          }
        })
        .catch((error) =>
          console.error('Error identifying blockchain:', error)
        );
    } else {
      tokenInformation(text, chatId);
    }
  }

  if (userState.select_chain) {
    if (text.length !== 1) {
      bot.sendMessage(chatId, 'Invalid input. Please enter a single digit.');
    } else {
      const selection = parseInt(text);
      if (selection >= 1 && selection <= 9) {
        userState.add_address = true;
        userState.select_chain = false;
        userState.selection = selection;
        bot.sendMessage(chatId, 'Please send the Token Contract Address');
      } else {
        bot.sendMessage(chatId, 'Invalid selection. Please choose a number between 1 and 9.');
      }
    }
  }

  // Track the bot's performance
  if (performanceTracker[chatId]) {
    performanceTracker[chatId]++;
  } else {
    performanceTracker[chatId] = 1;
  }
  console.log(performanceTracker);
});

function tokenInformation(text, chatId) {
  return getTokenData(text, userState.selection)
    .then((data) => {
      const info = data;
      let linksMessage = '';

      let percentChange = parseFloat(info['24hrPercentChange']);
      let formattedPercentChange = !isNaN(percentChange)
        ? percentChange?.toFixed(2)
        : 'N/A';
      if (info && info.links) {
        linksMessage =
          Object.keys(info?.links)?.length > 0
            ? '🔗 Links:' + formatLinks(info?.links)
            : '';
      }
      let message = `
      Token info:
      📌 Address: ${info?.address ? `<code>${info?.address}</code>` : 'None'}
      📛 Name: ${info?.name ? info?.name : 'None'} | 🔤 Symbol: ${
        info.symbol ? info.symbol : 'None'
      }
      🔗 Chain: ${info?.chain ? info?.chain : 'None'}
      ${info?.description ? `📝 Description: ${info?.description}` : ''} 
      🧮 Total Supply: ${
        info?.total_supply_formatted
          ? convertToReadable(info?.total_supply_formatted)
          : 'N/A'
      } | 💰 FDV: $${
        info?.fully_diluted_valuation ? info?.fully_diluted_valuation : 'N/A'
      }
      ⚠️ Possible Spam: ${capitalizeFirstLetter(info.possible_spam?.toString())}
    
      💲 Price: $${info?.usdPrice}
      📈 24h: ${formattedPercentChange + '%'} | Exchange: ${
        info?.exchangeName ? info?.exchangeName : 'None'
      }
      ${linksMessage}
    `;

      bot.sendMessage(chatId, message, { parse_mode: 'HTML' });
      userState.add_address = false;
      userState.selection = null;
    })
    .catch((error) => {
      console.error(`Error: ${error}`);
      userState.add_address = false;
      userState.selection = null;
      bot.sendMessage(
        chatId,
        'Sorry, an error occurred while fetching the token data.'
      );
    });
}

function formatLinks(links) {
  let formattedLinks = '';
  const keys = Object?.keys(links);
  for (let i = 0; i < keys?.length; i++) {
    if (links[keys[i]]) {
      formattedLinks += ` <a href="${links[keys[i]]}">${capitalizeFirstLetter(
        keys[i]
      )}</a>`;
      if (i !== keys?.length - 1) {
        formattedLinks += ' |';
      }
    }
  }
  return formattedLinks;
}

function convertToReadable(num) {
  let absNum = Math.abs(num);
  if (absNum >= 1.0e12) {
    // It's in the trillions
    return (num / 1.0e12).toFixed(2) + ' Trillion';
  } else if (absNum >= 1.0e9) {
    // It's in the billions
    return (num / 1.0e9).toFixed(2) + ' Billion';
  } else if (absNum >= 1.0e6) {
    // It's in the millions
    return (num / 1.0e6).toFixed(2) + ' Million';
  } else {
    return num.toString();
  }
}

function capitalizeFirstLetter(string) {
  if (string) return string?.charAt(0)?.toUpperCase() + string?.slice(1);
  return;
}

setInterval(() => {
  console.log('Command usage:', performanceTracker);
  console.log('Link clicks:', linkClicks);
}, 60000);
