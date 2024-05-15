const TelegramBot = require('node-telegram-bot-api');
const token = '7034470940:AAH1qkxg8ts9pv9Fe8Gll20c-msG4GBUUCY';

// Create a new bot instance
const bot = new TelegramBot(token, {polling: true});

// Initialize an object to track the bot's usage
let performanceTracker = {};
let linkClicks = {};
let botList = {};

const welcomeText = "Hey there! I'm here to help you access the most useful bots on Telegram! Hit /help to find out more about how to use me to my full potential. \nJoin my news channel (https://t.me/BotAggregator) to get information on all the latest updates."

const helpMessage = `Help Message

How to use this bot?
Start the bot, choose your category, and instantly get matched with the most useful bots for your needs.

How to add the bot to Group?
Add @XXX to your group and then give it admin rights. It is ready to use.

Official Channel (https://t.me/BotAggregator) 
Admin’s DM (XXXX)`;

// Define the main menu
const mainMenu = {
    reply_markup: {
        inline_keyboard: [
            [{ text: 'Sniping', callback_data: 'sniping' }],
            [{ text: 'Security', callback_data: 'security' }],
            [{ text: 'Research', callback_data: 'research' }],
            [{ text: 'Add your bot', callback_data: 'addBot' }]
        ]
    }
};

// Handle the /start command
bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, welcomeText, mainMenu);
});

// Handle the /help command
bot.onText(/\/help/, (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, helpMessage);
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
        case 'sniping':
            text = 'Several Telegram bots facilitate automated trading on various blockchains, including ETH, SOL, BSC, and Base. Here is a list of the top sniping bots';
            options = {
                reply_markup: {
            inline_keyboard: [
                        [{ text: 'Maestro', url: 'https://t.me/maestro?start=r-xnoonxx' }, { text: 'Unibot', url: 'https://t.me/unibotsniper_bot?start=0xe504428C310B1C4Cd70128DD422663Affd05097b' }],
                        [{ text: 'BananaGun', url: 'https://t.me/BananaGunSniper_bot' }, { text: 'Mizar', url: 'https://t.me/MizarTradingBot?start=ref=9a18c36a050' }],
                        [{ text: 'Moonbot', url: 'https://t.me/MoonBotio_bot?start=tHpZql' }, { text: 'Looter AI', url: 'https://t.me/looter_ai_bot?start=use_5uROc4.' }],
                        [{ text: 'Magnum Trade', url: 'https://t.me/magnum_trade_bot?start=ivdEHAyd' }, { text: 'Bonk', url: 'https://t.me/bonkbot_bot?start=ref_31uoc' }],
                        [{ text: 'SolTradingBot', url: 'https://t.me/SolTradingBot?start=C8wO7OSpF' }, { text: 'Trojan on Solana', url: 'https://t.me/solana_trojanbot?start=r-xnoonxx' }],
                        [{ text: 'Back', callback_data: 'back' }]
                    ]
                }
            };
            break;
            case 'security':
                text = 'While identifying high-growth crypto projects can be rewarding, thorough due diligence is crucial. Here are key bots to use before aping';
                options = {
                    reply_markup: {
                        inline_keyboard: [
                            [{ text: 'Scanners', callback_data: 'scanners' }],
                            [{ text: 'Audit', callback_data: 'audit' }],
                            [{ text: 'Honeypot', callback_data: 'honeypot' }],
                            [{ text: 'Back', callback_data: 'back' }]
                        ]
                    }
                };
                break;
                case 'scanners':
                    text = 'Scanners';
                    options = {
                        reply_markup: {
                    inline_keyboard: [
                                [{ text: 'TTF', url: 'https://t.me/ttfbotbot' }, { text: 'Otto Simulator', url: 'https://t.me/OttoSimBot' }],
                                [{ text: 'SAFE Analyzer', url: 'https://t.me/SafeAnalyzerbot' }, { text: 'Alpha Garden ', url: 'https://t.me/AlphaGardenersBot' }],
                                [{ text: 'Soul Scanner', url: 'https://t.me/soul_scanner_bot' }, { text: 'Ton Chain Scanner', url: 'https://t.me/TonChainScannerBot' }],
                                [{ text: 'Back', callback_data: 'back' }]
                            ]
                        }
                    };
                    break;
                    case 'audit':
                        text = 'Audit';
                        options = {
                            reply_markup: {
                        inline_keyboard: [
                                    [{ text: 'De.Fi Scanner', url: 'https://t.me/dedotfibot' }, { text: 'PaladinAI', url: 'https://t.me/PaladinAi_Bot' }],
                                    [{ text: 'OneAI', url: 'https://t.me/OneAISecurity_Bot' }, { text: '0xScans', url: 'https://t.me/ZeroXScanBot' }],
                                    [{ text: 'Back', callback_data: 'back' }]
                                ]
                            }
                        };
                        break;
                case 'honeypot':
                    text = 'Honeypot';
                    options = {
                        reply_markup: {
                    inline_keyboard: [
                                [{ text: 'Honeypot Bot', url: 'https://t.me/HoneypotChatBot' }, { text: 'ArkiTech Check', url: 'https://t.me/MEVFreeHoneypotBot' }],
                                [{ text: 'Quicki Intel', url: 'https://t.me/My_Quicki_Bot' }, { text: 'Tonk Analyser', url: 'https://t.me/TonkAnalyser_bot' }],
                                [{ text: 'Back', callback_data: 'back' }]
                            ]
                        }
                    };
                    break;
                case 'research':
                text = 'Explore established crypto research bots for in-depth analyses';
                options = {
                    reply_markup: {
                        inline_keyboard: [
                            [{ text: 'Proficy Price Bot', url: 'https://t.me/ProficyPriceBot' }, { text: 'EtherDrops Tracking Bot', url: 'https://t.me/EtherDROPS7_bot?start=promo_BUXF9S' }],
                            [{ text: 'Crypto Scanner Bot', url: 'https://t.me/eth_crypto_scanner_bot' }, { text: 'Tax Inspector', url: 'https://t.me/TaxInspector_Bot' }],
                            [{ text: 'ASecure.me', url: 'https://t.me/ASecureMeBot' }, { text: 'CoinTrendz', url: 'https://t.me/CoinTrendzBot' }],
                            [{ text: 'Back', callback_data: 'back' }]
                        ]
                    }
                };
                break;
                case 'addBot':
                bot.sendMessage(chatId, 'Please send the URL of your bot.');
                return;
                case 'back':
            text = welcomeText;
            options = mainMenu;
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

    bot.editMessageText(text, {chat_id: chatId, message_id: messageId, ...options});
});

// Track the bot's performance
// bot.on('message', (msg) => {
//     const chatId = msg.chat.id;
//     if (performanceTracker[chatId]) {
//         performanceTracker[chatId]++;
//     } else {
//         performanceTracker[chatId] = 1;
//     }
//     console.log(performanceTracker);
// });
// Handle the user's response after clicking the "Add Bot" button
bot.on('message', (msg) => {
    console.log(msg)

    const chatId = msg.chat.id;
    const text = msg.text;


    // If the message is a URL, add it to the bot list
    if (text.startsWith('http://') || text.startsWith('https://')) {
        if (!botList[chatId]) {
            botList[chatId] = [];
        }
        botList[chatId].push(text);
        bot.sendMessage(chatId, 'We have received your request. Our team will evaluate the bot and, if deemed beneficial, will classify it in the appropriate category');
    }
    // else{
    //     bot.sendMessage(chatId, 'Invalid Url.');
    // }

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
