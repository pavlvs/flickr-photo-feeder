$(document).ready(function () {
    $('button').click(function () {
        $('button').removeClass('selected');
        $(this).addClass('selected');
        let flickrAPI = "https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
        let animal = $(this).text();
        let flickrOptions = {
            tags: animal,
            format: 'json',
        };
        function disPlayPhotos(data) {
            let photoHTML = '<ul><div class="row d-flex justify-content-between">';
            $.each(data.items, function (i, photo) { 
                 photoHTML += '<li class="col-md-3">';
                 photoHTML += `<a href="${photo.link}" class="image" target="_blank">`;
                 photoHTML += `<img src="${photo.media.m}" class="img-fluid" alt=""></a></li>`;
            });
            photoHTML += '</ul>'
            $('.photos').html(photoHTML);
        }
        $.getJSON(flickrAPI, flickrOptions, disPlayPhotos);
      });
});