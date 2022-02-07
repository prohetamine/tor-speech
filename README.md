![logo](https://github.com/prohetamine/tor-speech/blob/main/media/logo.png)

##### README is available in the following languages: [Russian](https://github.com/prohetamine/tor-speech/blob/main/README/russian.md) | [English](https://github.com/prohetamine/tor-speech/blob/main/README.md)


# Tor Speech

> tor-speech - Speech synthesizer from text.

### Why ?
When I had the task to convert text from chat to voice, I wondered how to do it, but I did not find anything other than paid services or very resource-intensive scripts, during the experiments I managed to get access to the paid API of search services [yandex](https://yandex.ru) and [google](https://google.com) free of charge. I hope my contribution will make it easier for someone [life](https://www.patreon.com/prohetamine).

### Get started

Install the npm module  ```tor-speech```

```sh
$ npm install tor-speech
```

or

```sh
$ yarn add tor-speech
```

### Examples and description

Connecting the module

```javascript
const TorSpeech = require('tor-speech')
```

#### <a name="torspeech">TorSpeech</a>

The function [TorSpeech](#torspeech) initializes the connection to the Tor network takes the path to the tor binary file as a single parameter and returns an object with the keys: killTor, [yandex](#yandex), [google](#google), [langCodes](#langcodes), [saveFile](#savefile). Don't forget to kill the Tor process if you don't use the module with killTor.

```javascript
const TorSpeech = require('tor-speech')

;(async () => {
  const { killTor } = await TorSpeech()

  killTor()
})()
```

#### <a name="google">google</a>

The function [google](#google) is identical to the function [yandex](#yandex) accepts an object whose keys include text and [langCodes](#langcodes) returns null or an audio file in base64.

##### object

| key | value | default value | required | information|
| ------ | ------ | ------ | ------ | ------ |
| text | text | test tor-speech module | no | script |
| langCode | object | langCodes. russian | no | script language |

```javascript
const TorSpeech = require('tor-speech')

;(async () => {
  const { killTor, google, langCodes } = await TorSpeech()

  const result = await google({
    text: 'Hi, how are you?',
    langCode: langCodes.english
  })

  console.log(result)

  killTor()
})()
```

#### <a name="yandex">yandex</a>

The function [yandex](#yandex) is identical to the function [google](#google) accepts an object whose keys include text and [langCodes](#langcodes) returns null or an audio file in base64.

##### object

| key | value | default value | required | information|
| ------ | ------ | ------ | ------ | ------ |
| text | text | test tor-speech module | no | script |
| langCode | object | langCodes.russian | no | script language

```javascript
const TorSpeech = require('tor-speech')

;(async () => {
  const { killTor, yandex, langCodes } = await TorSpeech()

  const result = await yandex({
    text: 'Hi, how are you?',
    langCode: langCodes.english
  })

  console.log(result)

  killTor()
})()
```

#### <a name="langcodes">langCodes</a>

Object[langCode](#langcodes) this is a set of language codes for [yandex](#yandex) and [google](#google) synthesizers.

##### object

| key | yandex | google |
| ------ | ------ | ------ |
| russian | ru_RU | ru |
| english | en_EN | en |

```javascript
const langCodes = {
  russian: { yandex: 'ru_RU', google: 'ru' },
  english: { yandex: 'en_EN', google: 'en' }
}
```

#### <a name="savefile">saveFile</a>

The [saveFile](#savefile) function saves base64 as an audio file.

| parameters | default value | required | information|
| ------ | ------ | ------ | ------ |
| string | null | yes | base64 string |
| string | null | yes | path to save the audio file |

```javascript
const TorSpeech = require('tor-speech')

;(async () => {
  const { killTor, google, langCodes, saveFile } = await TorSpeech()

  const base64 = await google({
    text: 'Hi, how are you?',
    langCode: langCodes.english
  })

  const isSave = await saveFile(base64, __dirname + '/google_hi_how_fuck_you.mp3')

  console.log(isSave)

  killTor()
})()
```

### Contacts

My Telegram: [@prohetamine](https://t.me/prohetamine), [channel](https://t.me/prohetamines)

Email: prohetamine@gmail.com

Donat money: [patreon](https://www.patreon.com/prohetamine)

If you have any questions and/or suggestions, please email me in telegram, if you find any bugs also let me know, I will be very grateful.
