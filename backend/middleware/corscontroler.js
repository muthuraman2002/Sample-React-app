
const whiteList=
[
    'http://localhost:3000',
    'https://www.google.com',
    'http://127.0.0.1:5500'
];

const corsOption=
{
    origin:(origin,callback)=>
    {
        if(whiteList.indexOf(origin) !==-1 || !origin)
            {
                callback(null,true)
            }
        else
            {
                callback(new Error('Not Allowed by CROS'));
            }
    },
    optionSucessStatus:200
}
module.exports=corsOption;