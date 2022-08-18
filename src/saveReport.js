const fs = require('fs/promises')

export default function saveReport(global) {
  const report = global.reduxReport.generate()
  if (!fs || !report) throw new Error('Could not save redux use report')

  const reportTypes = ['used', 'unused'];

  return Promise.all(reportTypes.map(descriptor => {
    fs.writeFile(`./redux_report--${descriptor}.json`, JSON.stringify(report[descriptor]), err => {
      if (err) throw err
      console.log(`The ${descriptor} redux report has been saved!`)
    })
  }))
}
