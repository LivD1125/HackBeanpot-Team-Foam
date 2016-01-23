var URL = window.location.hostname + window.location.pathname;
console.log(URL);

$.post(
    'https://apiv2.indico.io/keywords?key=80d27da1ef84a0e43229a30692747ada&version=2',
    JSON.stringify({
        'data': "Some call the the the sunshine it the sunshine state"
    })
).then(function(res) { console.log(res) });


$.post(
     'https://apiv2.indico.io/sentiment?key=ac77d1c220266970c98f8f6ef9aaa5fe',
    JSON.stringify({
                       'data': "Some call the the the sunshine it the sunshine state"
                   })
).then(function(res) { console.log(res) });

$.post(
    'https://apiv2.indico.io/namedentities?key=ac77d1c220266970c98f8f6ef9aaa5fe',
    JSON.stringify({
                       'data': "Some call the the the sunshine it the sunshine state"
                   })
).then(function(res) { console.log(res) });