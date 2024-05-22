import TelegramBot from 'node-telegram-bot-api';
import * as CONST from './constant.js'


const token = '7085010836:AAEG91FvXrKgHLppodTVnrdv7blcO7dcCEg';

// Create a new bot instance
const bot = new TelegramBot(token, {polling: true});
const CHANNEL_ID = '-1002069024087';

// Initialize an object to track the bot's usage
let performanceTracker = {};
let linkClicks = {};
let botList = {};

// Define the main menu
const mainMenu = {
    reply_markup: {
        inline_keyboard: CONST.MAIN_MENU
    }
};

// Handle the /start command
bot.onText(/\/start/, async (msg) => {
    const chatId = msg.chat.id;
    const userId = msg.from.id;

    try {
        // Check if the user is a member of the channel
        const chatMember = await bot.getChatMember(CHANNEL_ID, userId);
        const isMember = ['member', 'administrator', 'creator'].includes(chatMember.status);

        if (isMember) {
            // User is a member, allow access
            // bot.sendMessage(chatId, CONST.MENU_TEXT, mainMenu);
            // bot.sendPhoto(chatId, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTIpkosOyvRMJNsRi8dO0UBbMTbZgR4T4EAwBSw9e1nA&s', {
            //     caption: CONST.MENU_TEXT,
            //     reply_markup: mainMenu.reply_markup
            // });
             // User is a member, allow access
             const photoUrl = './design2.png';
             const caption = CONST.MENU_TEXT;
 
             bot.sendPhoto(chatId, photoUrl, { caption, reply_markup: mainMenu.reply_markup });
            // Add your bot's functionalities here
        } else {
            // User is not a member, deny access
            bot.sendMessage(chatId, CONST.WELCOME_TEXT, { parse_mode: 'HTML' });
        }
    } catch (error) {
        console.error('Error checking membership:', error);
        bot.sendMessage(chatId, 'An error occurred while checking your membership status.');
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
    bot.sendMessage(chatId, 'Please send the URL of your bot.');
});

// Handle the /tutorial command
bot.onText(/\/tutorial/, (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, "Rawr! soon");
});

// Handle the /donate command
bot.onText(/\/donate/, (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, CONST.DONATION_TEXT);
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

      switch(action) {
/*<!---------------------------------Ethereum Menu -------------------------------->*/
        case 'ethereum':
            text = CONST.ETH_MENU_TEXT;
            options = optionsFormat(CONST.ETH_MENU);
            break;
        case 'eth_snipe' :
            text = CONST.ETH_SNIPE_TEXT
            options = optionsFormat(CONST.ETH_SNIPE);
            break;
        case 'eth_scan' :
            text = CONST.ETH_SCAN_TEXT
            options = optionsFormat(CONST.ETH_SCAN)
            break;
        case 'eth_audit':
            text = CONST.ETH_AUDIT_TEXT;
            options = optionsFormat(CONST.ETH_AUDIT)
            break;
        case 'eth_honeypot':
            text = CONST.ETH_HONEYPOT_TEXT;
            options = optionsFormat(CONST.ETH_HONEYPOT)
            break;
        case 'eth_research':
            text = CONST.ETH_RESEARCH_TEXT;
            options = optionsFormat(CONST.ETH_RESEARCH)
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
            options = optionsFormat(CONST.BSC_AUDIT)
            break;
        case 'bsc_honeypot':
            text = CONST.BSC_HONEYPOT_TEXT;
            options = optionsFormat(CONST.BSC_HONEYPOT)
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
        case 'base_snipe' :
            text = CONST.BASE_SNIPE_TEXT
            options = optionsFormat(CONST.BASE_SNIPE);
            break;
        case 'base_scan' :
            text = CONST.BASE_SCAN_TEXT
            options = optionsFormat(CONST.BASE_SCAN)
            break;
        case 'base_audit':
            text = CONST.BASE_AUDIT_TEXT;
            options = optionsFormat(CONST.BASE_AUDIT)
            break;
        case 'base_honeypot':
            text = CONST.BASE_HONEYPOT_TEXT;
            options = optionsFormat(CONST.BASE_HONEYPOT)
            break;
        case 'base_research':
            text = CONST.BASE_RESEARCH_TEXT;
            options = optionsFormat(CONST.BASE_RESEARCH)
            break;

/*<!--------------------------------- Ton Menu -------------------------------->*/

        case 'ton':
            text = CONST.TON_MENU_TEXT;
            options = optionsFormat(CONST.TON_MENU);
            break;
        case 'ton_snipe' :
            text = CONST.TON_SNIPE_TEXT
            options = optionsFormat(CONST.TON_SNIPE);
            break;
        case 'ton_scan' :
            text = CONST.TON_SCAN_TEXT
            options = optionsFormat(CONST.TON_SCAN)
            break;
        case 'ton_research':
            text = CONST.TON_RESEARCH_TEXT;
            options = optionsFormat(CONST.TON_RESEARCH)
            break;

/*<!--------------------------------- ADD BOT Menu -------------------------------->*/
        case 'addBot':
            bot.sendMessage(chatId, 'Please send the URL of your bot.');
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
        bot.editMessageCaption(text, { chat_id: chatId, message_id: messageId, reply_markup: options.reply_markup })
            .catch((error) => {
                console.error('Error editing message text:', error);
            });
    }
});

function optionsFormat (opt){
    return {
        reply_markup: {
            inline_keyboard: opt
        }
    }
}

// Handle the user's response after clicking the "Add Bot" button
bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    const text = msg.text;


    // If the message is a URL, add it to the bot list
    if (text.startsWith('http://') || text.startsWith('https://')) {
        if (!botList[chatId]) {
            botList[chatId] = [];
        }
        botList[chatId].push(text);
        bot.sendMessage(chatId, CONST.ADD_BOT_TEXT);
    }

    // Track the bot's performance
    if (performanceTracker[chatId]) {
        performanceTracker[chatId]++;
    } else {
        performanceTracker[chatId] = 1;
    }
    console.log(performanceTracker);
});

setInterval(() => {
    console.log('Command usage:', performanceTracker);
    console.log('Link clicks:', linkClicks);
}, 60000);
