const { DebugBear } = require('debugbear')
// TypeScript: import { DebugBear } from "debugbear"
const debugbear = new DebugBear(process.env.DEBUGBEAR_API_KEY)

const pageId = 107034
debugbear.pages.analyze(pageId).then((analysis) => {
  analysis.waitForResult().then(() => {
    console.log('Test complete, view results here: ' + analysis.url)
  })
})
