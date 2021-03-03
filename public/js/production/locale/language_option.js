var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function LanguageOptions(props) {
    const options = [{ value: "aa", text: "Afar" }, { value: "ab", text: "Abkhazian" }, { value: "ae", text: "Avestan" }, { value: "af", text: "Afrikaans" }, { value: "ak", text: "Akan" }, { value: "am", text: "Amharic" }, { value: "an", text: "Aragonese" }, { value: "ar", text: "Arabic" }, { value: "as", text: "Assamese" }, { value: "av", text: "Avaric" }, { value: "ay", text: "Aymara" }, { value: "az", text: "Azerbaijani" }, { value: "ba", text: "Bashkir" }, { value: "be", text: "Belarusian" }, { value: "bg", text: "Bulgarian" }, { value: "bh", text: "Bihari languages" }, { value: "bi", text: "Bislama" }, { value: "bm", text: "Bambara" }, { value: "bn", text: "Bengali" }, { value: "bo", text: "Tibetan" }, { value: "br", text: "Breton" }, { value: "bs", text: "Bosnian" }, { value: "ca", text: "Catalan; Valencian" }, { value: "ce", text: "Chechen" }, { value: "ch", text: "Chamorro" }, { value: "co", text: "Corsican" }, { value: "cr", text: "Cree" }, { value: "cs", text: "Czech" }, { value: "cu", text: "Church Slavic; Old Slavonic; Church Slavonic; Old Bulgarian; Old Church Slavonic" }, { value: "cv", text: "Chuvash" }, { value: "cy", text: "Welsh" }, { value: "da", text: "Danish" }, { value: "de", text: "German" }, { value: "dv", text: "Divehi; Dhivehi; Maldivian" }, { value: "dz", text: "Dzongkha" }, { value: "ee", text: "Ewe" }, { value: "el", text: "Greek, Modern (1453-)" }, { value: "en", text: "English" }, { value: "eo", text: "Esperanto" }, { value: "es", text: "Spanish; Castilian" }, { value: "et", text: "Estonian" }, { value: "eu", text: "Basque" }, { value: "fa", text: "Persian" }, { value: "ff", text: "Fulah" }, { value: "fi", text: "Finnish" }, { value: "fj", text: "Fijian" }, { value: "fo", text: "Faroese" }, { value: "fr", text: "French" }, { value: "fy", text: "Western Frisian" }, { value: "ga", text: "Irish" }, { value: "gd", text: "Gaelic; Scottish Gaelic" }, { value: "gl", text: "Galician" }, { value: "gn", text: "Guarani" }, { value: "gu", text: "Gujarati" }, { value: "gv", text: "Manx" }, { value: "ha", text: "Hausa" }, { value: "he", text: "Hebrew" }, { value: "hi", text: "Hindi" }, { value: "ho", text: "Hiri Motu" }, { value: "hr", text: "Croatian" }, { value: "ht", text: "Haitian; Haitian Creole" }, { value: "hu", text: "Hungarian" }, { value: "hy", text: "Armenian" }, { value: "hz", text: "Herero" }, { value: "ia", text: "Interlingua (International Auxiliary Language Association)" }, { value: "id", text: "Indonesian" }, { value: "ie", text: "Interlingue; Occidental" }, { value: "ig", text: "Igbo" }, { value: "ii", text: "Sichuan Yi; Nuosu" }, { value: "ik", text: "Inupiaq" }, { value: "io", text: "Ido" }, { value: "is", text: "Icelandic" }, { value: "it", text: "Italian" }, { value: "iu", text: "Inuktitut" }, { value: "ja", text: "Japanese" }, { value: "jv", text: "Javanese" }, { value: "ka", text: "Georgian" }, { value: "kg", text: "Kongo" }, { value: "ki", text: "Kikuyu; Gikuyu" }, { value: "kj", text: "Kuanyama; Kwanyama" }, { value: "kk", text: "Kazakh" }, { value: "kl", text: "Kalaallisut; Greenlandic" }, { value: "km", text: "Central Khmer" }, { value: "kn", text: "Kannada" }, { value: "ko", text: "Korean" }, { value: "kr", text: "Kanuri" }, { value: "ks", text: "Kashmiri" }, { value: "ku", text: "Kurdish" }, { value: "kv", text: "Komi" }, { value: "kw", text: "Cornish" }, { value: "ky", text: "Kirghiz; Kyrgyz" }, { value: "la", text: "Latin" }, { value: "lb", text: "Luxembourgish; Letzeburgesch" }, { value: "lg", text: "Ganda" }, { value: "li", text: "Limburgan; Limburger; Limburgish" }, { value: "ln", text: "Lingala" }, { value: "lo", text: "Lao" }, { value: "lt", text: "Lithuanian" }, { value: "lu", text: "Luba-Katanga" }, { value: "lv", text: "Latvian" }, { value: "mg", text: "Malagasy" }, { value: "mh", text: "Marshallese" }, { value: "mi", text: "Maori" }, { value: "mk", text: "Macedonian" }, { value: "ml", text: "Malayalam" }, { value: "mn", text: "Mongolian" }, { value: "mr", text: "Marathi" }, { value: "ms", text: "Malay" }, { value: "mt", text: "Maltese" }, { value: "my", text: "Burmese" }, { value: "na", text: "Nauru" }, { value: "nb", text: "Bokmål, Norwegian; Norwegian Bokmål" }, { value: "nd", text: "Ndebele, North; North Ndebele" }, { value: "ne", text: "Nepali" }, { value: "ng", text: "Ndonga" }, { value: "nl", text: "Dutch; Flemish" }, { value: "nn", text: "Norwegian Nynorsk; Nynorsk, Norwegian" }, { value: "no", text: "Norwegian" }, { value: "nr", text: "Ndebele, South; South Ndebele" }, { value: "nv", text: "Navajo; Navaho" }, { value: "ny", text: "Chichewa; Chewa; Nyanja" }, { value: "oc", text: "Occitan (post 1500)" }, { value: "oj", text: "Ojibwa" }, { value: "om", text: "Oromo" }, { value: "or", text: "Oriya" }, { value: "os", text: "Ossetian; Ossetic" }, { value: "pa", text: "Panjabi; Punjabi" }, { value: "pi", text: "Pali" }, { value: "pl", text: "Polish" }, { value: "ps", text: "Pushto; Pashto" }, { value: "pt", text: "Portuguese" }, { value: "qu", text: "Quechua" }, { value: "rm", text: "Romansh" }, { value: "rn", text: "Rundi" }, { value: "ro", text: "Romanian; Moldavian; Moldovan" }, { value: "ru", text: "Russian" }, { value: "rw", text: "Kinyarwanda" }, { value: "sa", text: "Sanskrit" }, { value: "sc", text: "Sardinian" }, { value: "sd", text: "Sindhi" }, { value: "se", text: "Northern Sami" }, { value: "sg", text: "Sango" }, { value: "si", text: "Sinhala; Sinhalese" }, { value: "sk", text: "Slovak" }, { value: "sl", text: "Slovenian" }, { value: "sm", text: "Samoan" }, { value: "sn", text: "Shona" }, { value: "so", text: "Somali" }, { value: "sq", text: "Albanian" }, { value: "sr", text: "Serbian" }, { value: "ss", text: "Swati" }, { value: "st", text: "Sotho, Southern" }, { value: "su", text: "Sundanese" }, { value: "sv", text: "Swedish" }, { value: "sw", text: "Swahili" }, { value: "ta", text: "Tamil" }, { value: "te", text: "Telugu" }, { value: "tg", text: "Tajik" }, { value: "th", text: "Thai" }, { value: "ti", text: "Tigrinya" }, { value: "tk", text: "Turkmen" }, { value: "tl", text: "Tagalog" }, { value: "tn", text: "Tswana" }, { value: "to", text: "Tonga (Tonga Islands)" }, { value: "tr", text: "Turkish" }, { value: "ts", text: "Tsonga" }, { value: "tt", text: "Tatar" }, { value: "tw", text: "Twi" }, { value: "ty", text: "Tahitian" }, { value: "ug", text: "Uighur; Uyghur" }, { value: "uk", text: "Ukrainian" }, { value: "ur", text: "Urdu" }, { value: "uz", text: "Uzbek" }, { value: "ve", text: "Venda" }, { value: "vi", text: "Vietnamese" }, { value: "vo", text: "Volapük" }, { value: "wa", text: "Walloon" }, { value: "wo", text: "Wolof" }, { value: "xh", text: "Xhosa" }, { value: "yi", text: "Yiddish" }, { value: "yo", text: "Yoruba" }, { value: "za", text: "Zhuang; Chuang" }, { value: "zh", text: "Chinese" }, { value: "zu", text: "Zulu" }].filter(l => {
        if (props.languages) return props.languages.indexOf(l.value) !== -1;else return true;
    });
    const childrenWithProps = React.Children.map(props.children, child => React.cloneElement(child, _extends({ options }, props)));

    return React.createElement(
        "div",
        null,
        childrenWithProps
    );
}

export { LanguageOptions };