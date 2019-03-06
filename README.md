# ReDigitalWebSerCallEric
Using Node.js to make Web Service Call using Get Request Method

# How to use

Make sure you have new version of Node.JS and npm, also you can install Nodemon package. Check the website for more information:https://www.npmjs.com/package/nodemon

# How to start

Inside the project, run 'nodemon' (if you install package "Nodemon") or using command "npm start" (if you have Node.js). Then, when it runs, it show the terminal log:
(Note: I use nodemon to run)
[nodemon] 1.18.10
[nodemon] to restart at any time, enter `rs`
[nodemon] watching: *.*
[nodemon] starting `node index.js`
Example app listening at http://127.0.0.1:3000

When you type "http://127.0.0.1:3000/list" on web browser, it will show JSON result like this:
"{\"templates\":[{\"name\":\"Quote\",\"interactive\":false},{\"name\":\"CancellationCertificate\",\"interactive\":false},{\"name\":\"CertificateOfCurrency\",\"interactive\":false},{\"name\":\"CertificateOfInsurance\",\"interactive\":false},{\"name\":\"AmendmentCoverLetter\",\"interactive\":false},{\"name\":\"CancellationCoverLetter\",\"interactive\":false},{\"name\":\"QuoteProposalCoverLetter\",\"interactive\":false},{\"name\":\"RenewalCoverLetter\",\"interactive\":false},{\"name\":\"CoverLetter\",\"interactive\":false},{\"name\":\"AcceptanceForm\",\"interactive\":false},{\"name\":\"RefundAdvice\",\"interactive\":false},{\"name\":\"TaxInvoice\",\"interactive\":false}]}\r\n"
