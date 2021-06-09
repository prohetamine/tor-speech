![enter image description here](/media/logo.png)

##### lang: [ru](#rulang) [en](#enlang)


# <a name="rulang">tor-speech</a>

> tor-speech - Синтезатор речи из текста.

### Почему ?
Когда у меня появилась задача преобразовать текст из чата в голос я задался вопросом как это сделать но ничего кроме платных сервисов или очень ресурсоемких скриптов я не нашел, в ходе экспериментов удалось получить доступ к платному API поисковых сервисов [yandex](https://yandex.ru) и [google](https://google.com) бесплатно. Надеюсь мой вклад облегчит кому-то [жизнь](https://www.patreon.com/prohetamine).

### С чего начать

Установим npm модуль  ```tor-speech```

```sh
$ npm install tor-speech
```

или

```sh
$ yarn add tor-speech
```

### Примеры и описание

Подключение модуля

```sh
const TorSpeech = require('tor-speech')
```

#### <a name="torspeechru">TorSpeech</a>

Функция [TorSpeech](#torspeechru) инициализирует подключение к сети Tor принимает единственным параметром путь к бинарному файлу tor и возвращает объект с ключами: killTor, [yandex](#yandexru), [google](#googleru), [langCodes](#langcodesru), [saveFile](#savefileru). Не забывайте убивать процесс Tor если не используете модуль с помощью killTor.

```sh
const TorSpeech = require('tor-speech')

;(async () => {
  const { killTor } = await TorSpeech()

  killTor()
})()
```

#### <a name="googleru">google</a>

Функция [google](#googleru) идентична функции [yandex](#yandexru) принимает объект среди ключей которого text и [langCodes](#langcodesru) возвращает null или аудиофайл в base64.

##### object

| ключ | значение | значение по-умолчанию | обязательный | информация |
| ------ | ------ | ------ | ------ | ------ |
| text | text | test tor-speech module | нет | сценарий |
| langCode | object | langCodes.russian | нет | язык сценария |

```sh
const TorSpeech = require('tor-speech')

;(async () => {
  const { killTor, google, langCodes } = await TorSpeech()

  const result = await google({
    text: 'Привет, как дела ?',
    langCode: langCodes.russian
  })

  console.log(result)

  killTor()
})()
```

#### <a name="yandexru">yandex</a>

Функция [yandex](#yandexru) идентична функции [google](#googleru) принимает объект среди ключей которого text и [langCodes](#langcodesru) возвращает null или аудиофайл в base64.

##### object

| ключ | значение | значение по-умолчанию | обязательный | информация |
| ------ | ------ | ------ | ------ | ------ |
| text | text | test tor-speech module | нет | сценарий |
| langCode | object | langCodes.russian | нет | язык сценария |

```sh
const TorSpeech = require('tor-speech')

;(async () => {
  const { killTor, yandex, langCodes } = await TorSpeech()

  const result = await yandex({
    text: 'Привет, как дела ?',
    langCode: langCodes.russian
  })

  console.log(result)

  killTor()
})()
```

#### <a name="langcodesru">langCodes</a>

Объект [langCode](#langcodesru) это набор языковых кодов для [yandex](#yandexru) и [google](#googleru) синтезаторов.

##### object

| ключ | yandex | google |
| ------ | ------ | ------ |
| russian | ru_RU | ru |
| english | en_EN | en |

```sh
const langCodes = {
  russian: { yandex: 'ru_RU', google: 'ru' },
  english: { yandex: 'en_EN', google: 'en' }
}
```

#### <a name="savefileru">saveFile</a>

Функция [saveFile](#savefileru) сохраняет base64 как аудиофайл.

| параметры | значение по-умолчанию | обязательный | информация |
| ------ | ------ | ------ | ------ |
| string | null | да | строка в base64 |
| string | null | да | путь сохранения аудиофайла |

```sh
const TorSpeech = require('tor-speech')

;(async () => {
  const { killTor, yandex, langCodes } = await TorSpeech()

  const base64 = await yandex({
    text: 'Привет, как дела ?',
    langCode: langCodes.russian
  })

  const isSave = await saveFile(base64, __dirname + '/yandex_privet_kak_dela_pizda.mp3')

  console.log(isSave)

  killTor()
})()
```

### Контакты

Мой Телеграм: [@prohetamine](https://t.me/prohetamine), [канал](https://t.me/prohetamine)

Почта: prohetamine@gmail.com

Донат денег: [patreon](https://www.patreon.com/prohetamine)

Если у вас есть какие-либо вопросы и/или предложения, пожалуйста, напишите мне в телеграмме, если вы найдете ошибки также дайте мне знать, я буду очень благодарен.

-------- OTHER WORLD --------

##### lang: [ru](#rulang) [en](#enlang)


# <a name="enlang">tor-speech</a>

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

```sh
const TorSpeech = require('tor-speech')
```

#### <a name="torspeechen">TorSpeech</a>

The function [TorSpeech](#torspeechen) initializes the connection to the Tor network takes the path to the tor binary file as a single parameter and returns an object with the keys: killTor, [yandex](#yandexen), [google](#googleen), [langCodes](#langcodesen), [saveFile](#savefileen). Don't forget to kill the Tor process if you don't use the module with killTor.

```sh
const TorSpeech = require('tor-speech')

;(async () => {
  const { killTor } = await TorSpeech()

  killTor()
})()
```

#### <a name="googleen">google</a>

The function [google](#googleen) is identical to the function [yandex](#yandexen) accepts an object whose keys include text and [langCodes](#langcodesen) returns null or an audio file in base64.

##### object

| key | value | default value | required | information|
| ------ | ------ | ------ | ------ | ------ |
| text | text | test tor-speech module | no | script |
| langCode | object | langCodes. russian | no | script language |

```sh
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

#### <a name="yandexen">yandex</a>

The function [yandex](#yandexen) is identical to the function [google](#googleen) accepts an object whose keys include text and [langCodes](#langcodesen) returns null or an audio file in base64.

##### object

| key | value | default value | required | information|
| ------ | ------ | ------ | ------ | ------ |
| text | text | test tor-speech module | no | script |
| langCode | object | langCodes.russian | no | script language

```sh
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

#### <a name="langcodesen">langCodes</a>

Object[langCode](#langcodesen) this is a set of language codes for [yandex](#yandexen) and [google](#googleen) synthesizers.

##### object

| key | yandex | google |
| ------ | ------ | ------ |
| russian | ru_RU | ru |
| english | en_EN | en |

```sh
const langCodes = {
  russian: { yandex: 'ru_RU', google: 'ru' },
  english: { yandex: 'en_EN', google: 'en' }
}
```

#### <a name="savefileen">saveFile</a>

The [saveFile](#savefileen) function saves base64 as an audio file.

| parameters | default value | required | information|
| ------ | ------ | ------ | ------ |
| string | null | yes | base64 string |
| string | null | yes | path to save the audio file |

```sh
const TorSpeech = require('tor-speech')

;(async () => {
  const { killTor, google, langCodes } = await TorSpeech()

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

My Telegram: [@prohetamine](https://t.me/prohetamine), [channel](https://t.me/prohetamine)

Email: prohetamine@gmail.com

Donat money: [patreon](https://www.patreon.com/prohetamine)

If you have any questions and/or suggestions, please email me in telegram, if you find any bugs also let me know, I will be very grateful.
