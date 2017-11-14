module.exports = function (context, req) {

    context.log('MS Sprint with DNB day HTTP trigger function processed a request.');

    if (req.query.day || (req.body && req.body.day)) {
        context.log(process.version);
        let dayTotal = 3;
        let currDay = req.query.day || (req.body && req.body.day);
        let toFinish = dayTotal - parseInt(currDay);
            
        context.res = {
            // status: 200, /* Defaults to 200 */
            body: "Hi this is the MS sprint with DNB the meeting will end in: "+toFinish
          //  body: "Hello " + (req.query.day || req.body.day)
        };
    }
    else {
        context.res = {
            status: 400,
            body: "Please pass a day on the query string or in the request body"
        };
    }
    context.done();
};
