const tor_axios       = require('tor-axios')
    , { join }        = require('path')
    , { spawn }       = require('child_process')
    , { tmpdir }      = require('os')
    , fs              = require('fs')
    , Readable        = require('stream').Readable

const torPath = join(tmpdir(), 'Tor')
const torBinaryPath = join(torPath, 'tor')

const langCodes = {
  russian: { yandex: 'ru_RU', google: 'ru' },
  english: { yandex: 'en_EN', google: 'en' }
}

var writeFileSync = function (path, buffer, permission) {
  permission = permission || 438; // 0666
  var fileDescriptor;

  try {
      fileDescriptor = fs.openSync(path, 'w', permission);
    } catch (e) {
      fs.chmodSync(path, permission);
      fileDescriptor = fs.openSync(path, 'w', permission);
    }
    
    if (fileDescriptor) {
      fs.writeSync(fileDescriptor, buffer, 0, buffer.length, 0);
      fs.closeSync(fileDescriptor);
  }
}

module.exports = async (path = null) => {
  const killTor = await new Promise((resolve, reject) => {
      const torProcess = spawn(path || torBinaryPath)
      const killed = () => torProcess.kill()
      torProcess.on('error', reject)
      torProcess.on('exit', code => resolve(code))
      torProcess.stderr.on('data', chunk => console.error(String(chunk)))
      torProcess.stdout.on('data', chunk => !!String(chunk).match(/100%/) && resolve(killed))
  })

  const tor = tor_axios.torSetup({
      ip: 'localhost',
      port: 9050,
  })

  return ({
    killTor,
    langCodes,
    saveFile: (base64 = null, path = null) => {
      try {
        const buffer = Buffer.from(base64.replace('data:audio/wav;base64,', ''), 'base64')
        writeFileSync(path, buffer);
        return true
      } catch (e) {
        console.log(e)
        return false
      }
    },
    google: ({
      text = 'test tor-speech module',
      langCode = langCodes.russian,
    } = {
      text: 'test tor-speech module',
      langCode: langCodes.russian
    }) =>
      new Promise((response, reject) =>
        tor.get(`https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&q=${encodeURIComponent(text)}&tl=${langCode.google}&total=1&idx=0&textlen=`+text.length, {
          responseType: 'arraybuffer'
        }).then(({ data }) =>
          response('data:audio/wav;base64,' + Buffer.from(data, 'binary').toString('base64'))
        ).catch(() =>
          response(null)
        )
      ),
    yandex: ({
      text = 'test tor-speech module',
      langCode = langCodes.russian,
    } = {
      text: 'test tor-speech module',
      langCode: langCodes.russian
    }) =>
      new Promise((response, reject) =>
        tor.get(`https://tts.voicetech.yandex.net/tts?text=${encodeURIComponent(text)}&lang=${langCode.yandex}&format=mp3`, {
          responseType: 'arraybuffer'
        }).then(({ data }) =>
          response('data:audio/wav;base64,' + Buffer.from(data, 'binary').toString('base64'))
        ).catch(() =>
          response(null)
        )
      )
  })
}
