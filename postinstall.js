const { join }            = require('path')
    , { tmpdir }          = require('os')
    , { spawn }           = require('child_process')
    , { TorDownloader }   = require('@dreamed-atlas/tor-downloader')

;(async () => {
  try {
    const torPath = join(tmpdir(), 'Tor')
    const torDownloader = new TorDownloader()
    await torDownloader.retrieve(torPath)
    await torDownloader.addExecutionRigthsOnTorBinaryFile(torPath)
    const torBinaryPath = join(torPath, torDownloader.getTorBinaryFilename())
    await new Promise((resolve, reject) => {
      const torProcess = spawn(torBinaryPath)
      torProcess.on('error', reject)
      torProcess.on('exit', code => resolve(code))
      torProcess.stderr.on('data', chunk => console.error(String(chunk)))
      torProcess.stdout.on('data', chunk => {
        console.log(String(chunk))
        if (!!String(chunk).match(/100%/)) {
          torProcess.kill()
          return
        }
      })
    })
    console.log('Tor installed successfully!')
  } catch (e) {
    console.log(`
/*
 *
 * Install tor separately and use the path
 * just like in the following example below
 *
 */

const TorSpeech = require('tor-speech')
const { killTor } = await TorSpeech(/* path */)

`)
  }
})()
