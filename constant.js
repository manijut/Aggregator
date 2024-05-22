/*<!--------------------------------- welcome Text -------------------------------->*/

export const WELCOME_TEXT = "Rawr!, Hey there! I'm here to help you access the most useful bots on Telegram! To use me, you’ll need to join <a href='https://t.me/BotAggregator'>@BotAggregator</a>  \n Hit /help to find out more about how to use me to my full potential."

/*<!--------------------------------- Menu Text -------------------------------->*/

export const MENU_TEXT = "What Chain would you like to explore?"

/*<!--------------------------------- ADD BOT Text -------------------------------->*/

export const ADD_BOT_TEXT= 'We have received your request. Our team will evaluate the bot and, if deemed beneficial, will classify it in the appropriate category.'

/*<!--------------------------------- Tutorial Text -------------------------------->*/

export const TUTORIAL_TEXT = 'Rawr! soon'

/*<!--------------------------------- Help Text -------------------------------->*/

export const HELP_MESSAGE = `
How to use this bot?
Start the bot, make sure you’re subscribed to @BotAggregator, choose your chain, pick a category and instantly get matched with the most useful bots for your needs.

For inquiries DM: @xNOONxx
`;

/*<!--------------------------------- DONATION Text -------------------------------->*/

export const DONATION_TEXT = `If we have helped you during your sniping/investing journey and you would love to support our team, we truly appreciate all your goodwill.

You may donate to us on ETH, SOL and TON 

ETH : 0x6454198aba1ee23c3491c520f26514449b08913c
SOL : FHPVaCCoUzBaKLoNHVyJyUCHjfDmAuMYGUMWYrvwJkwh
TON : UQDUhUAm8YSpoCNVL3q1PMvAufgAPZvu8ZSjiDelhd1q-9BE 

❤ ️ Please DM @xNOONxx if you have donated to us without obligations. We will record all donations for safekeeping purposes ❤️
`

/*<!--------------------------------- main menu -------------------------------->*/

export const MAIN_MENU = [
    [{ text: 'Ethereum', callback_data: 'ethereum' }, { text: 'Solana', callback_data: 'solana' }],
    [{ text: 'BSC', callback_data: 'bsc' }, { text: 'Base', callback_data: 'base' }],
    [{ text: 'TON', callback_data: 'ton' },{ text: 'Donate', callback_data: 'donate' }],
    [{ text: 'Add your bot', callback_data: 'addBot' }]
]

/*<!--------------------------------- ethereum menu -------------------------------->*/

export const ETH_MENU_TEXT = 'ETH it is! What do you want to do?'
export const ETH_MENU = [
    [{ text: 'Snipe', callback_data: 'eth_snipe' }, { text: 'Scan', callback_data: 'eth_scan' }, { text: 'Audit', callback_data: 'eth_audit' }],
    [{ text: 'Honey Pot', callback_data: 'eth_honeypot' }, { text: 'Research', callback_data: 'eth_research' }],
    [{ text: 'Back', callback_data: 'back' }]
]

// ethereum snipe

export const ETH_SNIPE_TEXT = 'Several Telegram bots facilitate automated trading. What are you going to ape today?'
export const ETH_SNIPE = [
    [{ text: 'Maestro', url: 'https://t.me/maestro?start=r-xnoonxx' }, { text: 'Unibot', url: 'https://t.me/unibotsniper_bot?start=0xe504428C310B1C4Cd70128DD422663Affd05097bt' }],
    [{ text: 'BananaGun', url: 'https://t.me/BananaGunSniper_bot' }, { text: 'Mizar', url: 'https://t.me/MizarTradingBot?start=ref=9a18c36a050' }],
    [{ text: 'Moonbot', url: 'https://t.me/MoonBotio_bot?start=tHpZql' }, { text: 'Looter', url: 'https://t.me/looter_ai_bot?start=use_5uROc4' }],
    [{ text: 'Magnum', url: 'https://t.me/magnum_trade_bot?start=ivdEHAyd' }, { text: 'Tutorials', callback_data: 'tutorials' }],
    [{ text: 'Back', callback_data: 'back' }]
]

// ethereum scan

export const ETH_SCAN_TEXT ='While identifying high-growth crypto projects can be rewarding, thorough due diligence is crucial. Here are key bots to use before aping'
export const ETH_SCAN = [
    [{ text: 'TTF', url: 'https://t.me/ttfbotbot' }, { text: 'OTTO', url: 'https://t.me/OttoSimBot' }],
    [{ text: 'Safe Analyzer', url: 'https://t.me/SafeAnalyzerbot' }, { text: 'Alpha Garden', url: 'https://t.me/AlphaGardenersBot' }],
    [{ text: 'Proficy Price', url: 'https://t.me/ProficyPriceBot' }, { text: 'Tutorials', callback_data: 'tutorials' }],
    [{ text: 'Back', callback_data: 'back' }]
]

// ethereum audit

export const ETH_AUDIT_TEXT = 'Analyze any smart contract for risks, vulnerabilities, and other useful information'
export const ETH_AUDIT = [
    [{ text: 'De.Fi', url: 'https://t.me/dedotfibot' }, { text: '0xScans', url: 'https://t.me/ZeroXScanBot' }],
    [{ text: 'PaladinAI', url: 'https://t.me/PaladinAi_Bot' }, { text: 'Tutorials', callback_data: 'tutorials' }],
    [{ text: 'Back', callback_data: 'back' }]
]

// ethereum honeypot

export const ETH_HONEYPOT_TEXT = 'Check if a token is a honeypot'
export const ETH_HONEYPOT =[
    [{ text: 'Honeypot Bot', url: 'https://t.me/HoneypotChatBot' }, { text: 'ArkiTech Check', url: 'https://t.me/MEVFreeHoneypotBot' }],
    [{ text: 'Quicki Intel', url: 'https://t.me/My_Quicki_Bot' }, { text: 'Tutorials', callback_data: 'tutorials' }],
    [{ text: 'Back', callback_data: 'back' }]
]

// ethereum research

export const ETH_RESEARCH_TEXT = 'Crypto Market Assistants on Telegram Get realtime Crypto Charts, Information & more.'
export const ETH_RESEARCH = [
    [{ text: 'EtherDrops Tracking Bot', url: 'https://t.me/EtherDROPS7_bot?start=promo_BUXF9S' }, { text: 'Crypto Scanner Bot', url: 'https://t.me/eth_crypto_scanner_bot' }],
    [{ text: 'ASecure.me', url: 'https://t.me/ASecureMeBot' }, { text: 'Tax Inspector', url: 'https://t.me/TaxInspector_Bot' }],
    [{ text: 'CoinTrendz', url: 'https://t.me/CoinTrendzBot' }, { text: 'Tutorials', callback_data: 'tutorials' }],
    [{ text: 'Back', callback_data: 'back' }]
]


/*<!--------------------------------- solana menu -------------------------------->*/

export const SOL_MENU_TEXT = 'Time for the memcoins mania! What do you want to do?'
export const SOL_MENU = [
    [{ text: 'Snipe', callback_data: 'sol_snipe' }],
    [{ text: 'Scan', callback_data: 'sol_scan' }],
    [{ text: 'Research', callback_data: 'sol_research' }],
    [{ text: 'Back', callback_data: 'back' }]
]

// solana snipe

export const SOL_SNIPE_TEXT = 'Several Telegram bots facilitate automated trading. What are you going to ape today?'
export const SOL_SNIPE = [
    [{ text: 'Maestro', url: 'https://t.me/maestro?start=r-xnoonxx' }, { text: 'Mizar', url: 'https://t.me/MizarTradingBot?start=ref=9a18c36a050' }],
    [{ text: 'Moonbot', url: 'https://t.me/MoonBotio_bot?start=tHpZql' }, { text: 'Looter', url: 'https://t.me/looter_ai_bot?start=use_5uROc4' }],
    [{ text: 'Magnum', url: 'https://t.me/magnum_trade_bot?start=ivdEHAyd' }, { text: 'Bonk', url: 'https://t.me/bonkbot_bot?start=ref_31uoc' }],
    [{ text: 'Sol Trading', url: 'https://t.me/SolTradingBot?start=C8wO7OSpF' }, { text: 'Trojan', url: 'https://t.me/solana_trojanbot?start=r-xnoonxx' }],
    [{ text: 'Tutorials', callback_data: 'tutorials' }],
    [{ text: 'Back', callback_data: 'back' }]
]

// solana scan

export const SOL_SCAN_TEXT = 'While identifying high-growth crypto projects can be rewarding, thorough due diligence is crucial. Here are key bots to use before aping'
export const SOL_SCAN = [
    [{ text: 'Soul scanner', url: 'https://t.me/ProficyPriceBot' }, { text: 'Alpha Garden', url: 'https://t.me/EtherDROPS7_bot?start=promo_BUXF9S' }],
    [{ text: 'Safe Analyzer', url: 'https://t.me/eth_crypto_scanner_bot' }, { text: 'Proficy Price', url: 'https://t.me/TaxInspector_Bot' }],
    [{ text: 'PaladinAI', url: 'https://t.me/ASecureMeBot' }, { text: 'Tutorials', callback_data: 'tutorials' }],
    [{ text: 'Back', callback_data: 'back' }]
]

// solana research

export const SOL_RESEARCH_TEXT = 'Crypto Market Assistants on Telegram Get realtime Crypto Charts, Information & more.'
export const SOL_RESEARCH = [
    [{ text: 'EtherDrops', url: 'https://t.me/EtherDROPS7_bot?start=promo_BUXF9S' }, { text: 'Coin Trendz', url: 'https://t.me/CoinTrendzBot' }],
    [{ text: 'Tutorials', callback_data: 'tutorials' }],
    [{ text: 'Back', callback_data: 'back' }]
]

/*<!--------------------------------- bsc menu -------------------------------->*/

export const BSC_MENU_TEXT = 'seriously mate! What do you want to do?'
export const BSC_MENU = [
    [{ text: 'Snipe', callback_data: 'bsc_snipe' }, { text: 'Scan', callback_data: 'bsc_scan' }, { text: 'Audit', callback_data: 'bsc_audit' }],
    [{ text: 'honeypot', callback_data: 'bsc_honeypot' }, { text: 'Research', callback_data: 'bsc_research' }],
    [{ text: 'Back', callback_data: 'back' }]
]

// bsc snipe

export const BSC_SNIPE_TEXT = 'Several Telegram bots facilitate automated trading. What are you going to ape today?'
export const BSC_SNIPE = [
    [{ text: 'Maestro', url: 'https://t.me/maestro?start=r-xnoonxx' }, { text: 'Moonbot', url: 'https://t.me/MoonBotio_bot?start=tHpZql' }],
    [{ text: 'Magnum', url: 'https://t.me/magnum_trade_bot?start=ivdEHAyd' }, { text: 'Tutorials', callback_data: 'tutorials' }],
    [{ text: 'Back', callback_data: 'back' }]
]

// bsc scan

export const BSC_SCAN_TEXT = 'While identifying high-growth crypto projects can be rewarding, thorough due diligence is crucial. Here are key bots to use before aping'
export const BSC_SCAN = [
    [{ text: 'TTF', url: 'https://t.me/ttfbotbot' },{ text: 'OTTO', url: 'https://t.me/OttoSimBot' }],
    [{ text: 'Safe Analyzer', url: 'https://t.me/SafeAnalyzerbot' },{ text: 'Alpha Garden', url: 'https://t.me/AlphaGardenersBot' }],
    [{ text: 'Proficy Price', url: 'https://t.me/ProficyPriceBot' }, { text: 'Tutorials', callback_data: 'tutorials' }],
    [{ text: 'Back', callback_data: 'back' }]
]

// bsc audit

export const BSC_AUDIT_TEXT = 'Analyze any smart contract for risks, vulnerabilities and other useful information'
export const BSC_AUDIT = [
    [{ text: 'De.Fi', url: 'https://t.me/dedotfibot' }, { text: '0xScans', url: 'https://t.me/ZeroXScanBot' }],
    [{ text: 'PaladinAI', url: 'https://t.me/PaladinAi_Bot' }, { text: 'Tutorials', callback_data: 'tutorials' }],
    [{ text: 'Back', callback_data: 'back' }]
]

// bsc honeypot

export const BSC_HONEYPOT_TEXT = 'Check if a token is a honeypot'
export const BSC_HONEYPOT = [
    [{ text: 'Honeypot bot', url: 'https://t.me/HoneypotChatBot' }],
    [{ text: 'Quicki Intel', url: 'https://t.me/My_Quicki_Bot' }],
    [{ text: 'Tutorials', callback_data: 'tutorials' }],
    [{ text: 'Back', callback_data: 'back' }]
]

// bsc research

export const BSC_RESEARCH_TEXT = 'Crypto Market Assistants on Telegram Get realtime Crypto Charts, Information & more.'
export const BSC_RESEARCH = [
    [{ text: 'EtherDrops', url: 'https://t.me/EtherDROPS7_bot?start=promo_BUXF9S' }, { text: 'A.secure Me', url: 'https://t.me/ASecureMeBot' }],
    [{ text: 'Tax inspector', url: 'https://t.me/TaxInspector_Bot' }, { text: 'Coin Trendz', url: 'https://t.me/CoinTrendzBot' }],
    [{ text: 'Tutorials', callback_data: 'tutorials' }],
    [{ text: 'Back', callback_data: 'back' }]
]

/*<!--------------------------------- base menu -------------------------------->*/

export const BASE_MENU_TEXT = 'The Armstrong Chain! LFG'
export const BASE_MENU = [
    [{ text: 'Snipe', callback_data: 'base_snipe' }, { text: 'Scan', callback_data: 'base_scan' }, { text: 'Audit', callback_data: 'base_audit' }],
    [{ text: 'honeypot', callback_data: 'base_honeypot' }, { text: 'Research', callback_data: 'base_research' }],
    [{ text: 'Back', callback_data: 'back' }]
]

// base snipe

export const BASE_SNIPE_TEXT = 'Several Telegram bots facilitate automated trading. What are you going to ape today?'
export const BASE_SNIPE = [
    [{ text: 'Maestro', url: 'https://t.me/maestro?start=r-xnoonxx' }, { text: 'Unibot', url: 'https://t.me/unibotsniper_bot?start=0xe504428C310B1C4Cd70128DD422663Affd05097b' }],
    [{ text: 'BananaGun', url: 'https://t.me/BananaGunSniper_bot' }, { text: 'Moonbot', url: 'https://t.me/MoonBotio_bot?start=tHpZql' }],
    [{ text: 'Looter', url: 'https://t.me/looter_ai_bot?start=use_5uROc4' }, { text: 'Magnum', url: 'https://t.me/magnum_trade_bot?start=ivdEHAyd' }],
    [{ text: 'Tutorials', callback_data: 'tutorials' }],
    [{ text: 'Back', callback_data: 'back' }]
]

// base scan

export const BASE_SCAN_TEXT = 'While identifying high-growth crypto projects can be rewarding, thorough due diligence is crucial. Here are key bots to use before aping'
export const BASE_SCAN = [
    [{ text: 'OTTO', url: 'https://t.me/OttoSimBot' },{ text: 'Safe Analyzer', url: 'https://t.me/SafeAnalyzerbot' }],
    [{ text: 'Alpha Garden', url: 'https://t.me/AlphaGardenersBot' }, { text: 'Proficy Price', url: 'https://t.me/ProficyPriceBot' }],
    [{ text: 'Tutorials', callback_data: 'tutorials' }],
    [{ text: 'Back', callback_data: 'back' }]
]

// base audit

export const BASE_AUDIT_TEXT = 'Analyze any smart contract for risks, vulnerabilities and other useful information'
export const BASE_AUDIT = [
    [{ text: 'De.Fi', url: 'https://t.me/dedotfibot' }],
    [{ text: '0xScans', url: 'https://t.me/ZeroXScanBot' }],
    [{ text: 'Tutorials', callback_data: 'tutorials' }],
    [{ text: 'Back', callback_data: 'back' }]
]

// base honeypot

export const BASE_HONEYPOT_TEXT = 'Check if a token is a honeypot'
export const BASE_HONEYPOT = [
    [{ text: 'Honeypot bot', url: 'https://t.me/HoneypotChatBot' }],
    [{ text: 'Quicki Intel', url: 'https://t.me/My_Quicki_Bot' }],
    [{ text: 'Tutorials', callback_data: 'tutorials' }],
    [{ text: 'Back', callback_data: 'back' }]
]

// base research

export const BASE_RESEARCH_TEXT = 'Crypto Market Assistants on Telegram Get realtime Crypto Charts, Information & more.'
export const BASE_RESEARCH = [
    [{ text: 'EtherDrops', url: 'https://t.me/EtherDROPS7_bot?start=promo_BUXF9S' }],
    [{ text: 'Coin Trendz', url: 'https://t.me/CoinTrendzBot' }],
    [{ text: 'Tutorials', callback_data: 'tutorials' }],
    [{ text: 'Back', callback_data: 'back' }]
]

/*<!--------------------------------- ton menu -------------------------------->*/

export const TON_MENU_TEXT = 'The new kid in town, TON is the native blockchain for Telegram. What do you want to ape today?'
export const TON_MENU = [
    [{ text: 'Snipe', callback_data: 'ton_snipe' }],
    [{ text: 'Scan', callback_data: 'ton_scan' }],
    [{ text: 'Research', callback_data: 'ton_research' }],
    [{ text: 'Back', callback_data: 'back' }]
]

// ton snipe

export const TON_SNIPE_TEXT = 'Several Telegram bots facilitate automated trading. What are you going to ape today?'
export const TON_SNIPE = [
    [{ text: 'Dragunova', url: 'https://t.me/DragunovaBot?start=comrade_6841171966' }, { text: 'Crypton Super', url: 'https://t.me/CryptonSuperBot?start=JBPST5' }],
    [{ text: 'Stonk', url: 'https://t.me/stonks_sniper_bot?start=3b121f6c690d21f0760b75227b7c771f' }, { text: 'Tutorials', callback_data: 'tutorials' }],
    [{ text: 'Back', callback_data: 'back' }]
]

// ton scan

export const TON_SCAN_TEXT = 'While identifying high-growth crypto projects can be rewarding, thorough due diligence is crucial. Here are key bots to use before aping'
export const TON_SCAN = [
    [{ text: 'Cryptonite', url: 'https://t.me/CryptoniteScannerBot' }, { text: 'Tonk Analyser', url: 'https://t.me/TonkAnalyser_bot' }], 
    [{ text: 'TON Chain Scanner', url: 'https://t.me/TonChainScannerBot' }, { text: 'Tutorials', callback_data: 'tutorials' }],
    [{ text: 'Back', callback_data: 'back' }]
]

// ton research

export const TON_RESEARCH_TEXT = 'Crypto Market Assistants on Telegram Get realtime Crypto Charts, Information & more.'
export const TON_RESEARCH = [
    [{ text: 'DYOR Ninja', url: 'https://t.me/DYORNinjaBot' },{ text: 'TON Tracker', url: 'https://t.me/sbabet_tools_bot' }],
    [{ text: 'EtherDrops', url: 'https://t.me/EtherDROPS7_bot?start=promo_BUXF9S' },{ text: 'A.secure Me', url: 'https://t.me/ASecureMeBot' }],
    [{ text: 'Coin Trendz', url: 'https://t.me/CoinTrendzBot' },{ text: 'Tutorials', callback_data: 'tutorials' }],
    [{ text: 'Back', callback_data: 'back' }]
]
