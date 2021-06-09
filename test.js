const TorSpeech = require('./index.js')

;(async () => {
  const { killTor, google, yandex, langCodes, saveFile } = await TorSpeech(/* path */)

  const rYandex = await yandex({
    text: 'Привет, как дела ?',
    langCode: langCodes.russian
  })

  const rGoogle = await google({
    text: 'Hi, how are you ?',
    langCode: langCodes.russian
  })

  console.log(rYandex) // base64
  console.log(rGoogle) // base64

  const isSaveYandex = await saveFile(rYandex, './yandex_privet_kek_dela.mp3')
  const isSaveGoogle = await saveFile(rGoogle, './google_hello_how_are_you.mp3')

  console.log(isSaveYandex)
  console.log(isSaveGoogle)

  killTor()
})()
