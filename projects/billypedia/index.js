/* global $ _ opspark */
$(document).ready(function() {
    $.getJSON('data.json', function (data) {
        // YOUR CODE BELOW HERE //
        
        // uncomment this to inspect all available data; delete when done //
        // console.log(data);
     $('#section-quotes').css('background-color', 'grey').css('border-radius', '4px');
     $('.quote').css('color', 'white').css('font-style', 'italic');
     $('#quotes').css('padding-right', '10px').css('padding-left', '10px');
    $('#quotes:last-child').css('padding-bottom', '4px');
    $('riderTable').css('background-color', 'green');
    // $('#General Recordings').append()    
                       
                        // Top Rated //
 let topRated = data.discography.topRated;
    _.map(topRated, function(recording){
        $('#list-top-rated').append($('<li>').text(recording.title).click(function(event){
            $('#top-rated-image').attr('src', recording.art);
        }));
    });
                        // create new section //

$('<section>').attr('id', 'section-recordings').append($('<h3>').text('Recordings')).appendTo($('#sidebar'));
$('#section-recordings').append($('<ul>').attr('id', 'list-recordings'));
let recordings = data.discography.recordings;
    _.map(recordings, function(recordings){
        var $listItem = $('<li>').addClass('recordings').click(function(event){
            $('#list-recordings').attr('src', recordings.art);
            $('#image-recording').attr('src', recordings.art);
        });;
        var $title = $('<div>').text(recordings.title).addClass('title');
        var $artist = $('<div>').text(recordings.artist);
        
        
    // var $artist =
            $listItem.append($title);
            $('#list-recordings').append($listItem);
        });

                        // images for recording lists //
//above top rated//
$('#section-top-rated').prepend($('<img>').attr('id', 'top-rated-image').attr('src', topRated[0].art));

//above recordings//
$('#section-recordings').prepend($('<img>').attr('id', 'image-recording').attr('src', recordings[0].art));


                        //Swap Billy Images//
// can I just use each for this?
var billyImages = data.images.billy;
$('#image-billy').click(function(){
    var billyPic = $('#image-billy').attr('src');
    var index = _.indexOf(billyImages, billyPic);
    console.log(billyPic, index);
     if(index < billyImages.length - 1) {
                billyPic = billyImages[index + 1];
            } else {
                billyPic = billyImages[0];
            }
            console.log(billyPic, index);
            $('#image-billy').attr('src', billyPic);
});

                        //Dynamically Swap Discography Art//
//for Top Rated//
// var discographyTop = _.pluck(data.discography.topRated, 'art');
// $('#top-rated-image').click(function(){
//     var topRatedPic = $('#top-rated-image').attr('src');
//     var topIndex = _.indexOf(discographyTop,topRatedPic);
//     console.log(discographyTop, topRatedPic);
//         if(topIndex < discographyTop.length - 1){
//             topRatedPic = discographyTop[topIndex + 1];
//         }else {
//             topRatedPic = discographyTop[0];
//         }
//         console.log(discographyTop, topRatedPic);
//         $('#top-rated-image').attr('src', topRatedPic);
// });
// console.log(discographyTop);



//for Recordings //
// var records = _.pluck(data.discography.recordings, 'art');
// $('#image-recording').click(function(){
//     var recordingsPic = $('#image-recording').attr('src');
//     var recordingsIndex = _.indexOf(records,recordingsPic);
//         if(recordingsIndex < records.length - 1){
//             recordingsPic = records[recordingsIndex + 1];
//         } else {
//             recordingsPic = records[0];
//         } $('#image-recording').attr('src', recordingsPic);
// });

// $('li').click(function(event){
//           var currentImg = $(event.currentTarget);
//           var newImg = currentImg.attr('src');
//           if (currentImg.attr('class') === 'recordings'){
//               $('image-recording').attr('src', newImg);
//               console.log(newImg);
//           } else {
//               $('#top-rated-image').attr('src', newImg);
//           }
//       });
                            //Build Table for Rider//

var riderTable = function(riderTable){
     var newRow = function(rider){
        var $row = $('<tr>')
        var $type = $('<td>').text(rider.type);
        var $desc = $('<td>').text(rider.desc);
        $row.append($type);
        $row.append($desc);
        return $row;
    };
    var $table = $('<table>');
    var $rows = riderTable.map(newRow);
    $table.append($rows);
    return $table;
};
var riderData = data.rider;
riderTable(riderData).appendTo('.content');
        // YOUR CODE ABOVE HERE //
    })
    .fail(function() { console.log('getJSON on discography failed!'); });
});


