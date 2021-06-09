const TorSpeech = require('./index.js')

;(async () => {
  const { killTor, google, yandex, langCodes, saveFile } = await TorSpeech(/* path */)

  const result1 = await yandex({
    text: 'Привет как дела ?',
    langCode: langCodes.russian
  })

  const result2 = await google({
    text: 'Привет как дела ?',
    langCode: langCodes.russian
  })

  console.log(result1) // base64
  console.log(result2) // base64

  const isSave1 = await saveFile(result1, './yandex_hello_kak_dela.mp3')
  const isSave2 = await saveFile(result2, './google_hello_kak_dela.mp3')

  killTor()
})()
