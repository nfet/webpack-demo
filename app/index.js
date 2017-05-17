console.debug('loading...');
//var jquery = require('jquery')
var jQuery = $ = require('jquery/dist/jquery.min.js');
var version = jQuery.fn.jquery;
console.debug('jQuery version is', version);

$(document).ready(function ()
{
    $('#jqueryVersion').html(version);
});
