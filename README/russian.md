![logo](https://github.com/prohetamine/tor-speech/blob/main/media/logo.png)

##### README доступен на языках: [Русский](https://github.com/prohetamine/tor-speech/blob/main/README/russian.md) | [Английский](https://github.com/prohetamine/tor-speech/blob/main/README.md)


# Tor Speech

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

```javascript
const TorSpeech = require('tor-speech')
```

#### <a name="torspeech">TorSpeech</a>

Функция [TorSpeech](#torspeech) инициализирует подключение к сети Tor принимает единственным параметром путь к бинарному файлу tor и возвращает объект с ключами: killTor, [yandex](#yandex), [google](#google), [langCodes](#langcodes), [saveFile](#savefile). Не забывайте убивать процесс Tor если не используете модуль с помощью killTor.

```javascript
const TorSpeech = require('tor-speech')

;(async () => {
  const { killTor } = await TorSpeech()

  killTor()
})()
```

#### <a name="google">google</a>

Функция [google](#google) идентична функции [yandex](#yandex) принимает объект среди ключей которого text и [langCodes](#langcodes) возвращает null или аудиофайл в base64.

##### object

| ключ | значение | значение по-умолчанию | обязательный | информация |
| ------ | ------ | ------ | ------ | ------ |
| text | text | test tor-speech module | нет | сценарий |
| langCode | object | langCodes.russian | нет | язык сценария |

```javascript
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

#### <a name="yandex">yandex</a>

Функция [yandex](#yandex) идентична функции [google](#google) принимает объект среди ключей которого text и [langCodes](#langcodes) возвращает null или аудиофайл в base64.

##### object

| ключ | значение | значение по-умолчанию | обязательный | информация |
| ------ | ------ | ------ | ------ | ------ |
| text | text | test tor-speech module | нет | сценарий |
| langCode | object | langCodes.russian | нет | язык сценария |

```javascript
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

#### <a name="langcodes">langCodes</a>

Объект [langCode](#langcodes) это набор языковых кодов для [yandex](#yandex) и [google](#google) синтезаторов.

##### object

| ключ | yandex | google |
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

Функция [saveFile](#savefile) сохраняет base64 как аудиофайл.

| параметры | значение по-умолчанию | обязательный | информация |
| ------ | ------ | ------ | ------ |
| string | null | да | строка в base64 |
| string | null | да | путь сохранения аудиофайла |

```javascript
const TorSpeech = require('tor-speech')

;(async () => {
  const { killTor, yandex, langCodes, saveFile } = await TorSpeech()

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

Мой Телеграм: [@prohetamine](https://t.me/prohetamine), [канал](https://t.me/prohetamines)

Почта: prohetamine@gmail.com

Донат денег: [patreon](https://www.patreon.com/prohetamine)

Если у вас есть какие-либо вопросы и/или предложения, пожалуйста, напишите мне в телеграмме, если вы найдете ошибки также дайте мне знать, я буду очень благодарен.
