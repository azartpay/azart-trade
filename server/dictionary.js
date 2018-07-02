'use strict';

exports.object = {
    c : function(strCoin) {
        try {
            return exports.object[strCoin][exports.object.coin];
        }
        catch(e) {
            return strCoin;
        }
    },
    l : function(str) {
        try {
            return this.dict['_words_'][str][this.dict.lang];
        }
        catch(e) {
            return str;
        }
    },
    setLanguage : function(lang) {
        if (lang == 'en')
            this.lang = 0;
        if (lang == 'ru')
            this.lang = 1;
    },
    'lang' : 0,
    '_words_' : {
        'Buy' : ['Buy', 'Купить'],
        'Sell' : ['Sell', 'Продать'],
        'buy' : ['buy', 'купить'],
        'Faucet' : ['Faucet', 'Кран'],
        'Forum' : ['Forum', 'Форум'],
        'sell' : ['sell', 'продать'],
        'Buying' : ['Buying', 'Покупка'],
        'Selling' : ['Selling', 'Продажа'],
        'Help' : ['Help', 'Помощь'],
        'Wallet' : ['Wallet', 'Кошелек'],
        'Exchange' : ['Exchange', 'Обменник'],
        'Trade' : ['Trade', 'Биржа'],
        'Support' : ['Support', 'Поддержка'],
        'Fees' : ['Fees', 'Комиссии'],
        'Login' : ['Login', 'Вход'],
        'Your active orders' : ['Your active orders', 'Ваши активные заявки'],
        'Your history' : ['Your history', 'Ваши исполненные заявки'],
        'Trade history' : ['Trade history', 'История торгов'],
        'Forgot your password?' : ['Forgot your password?', 'Забыли пароль?'],
        'New to Azart Trade?' : ['New to Azart Trade?', 'Еще не зарегистрированы на Azart Trade?'],
        'Sign up now!' : ['Sign up now!', 'Зарегистрироваться сейчас!'],
        'Azart Trade - Open source cryptocurrency exchange for Azart' : ['Azart Trade - Open source cryptocurrency exchange for Azart', 'Azart Trade - Биржа криптовалют с открытым кодом для Azart']
    }
};
