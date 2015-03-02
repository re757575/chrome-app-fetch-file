document.addEventListener('DOMContentLoaded', function() {

    $('#fetch').click(function(){
        var fileURL = $('#fileURL').val();

        if (fileURL !== '') {
            var request = $.ajax({
                url: "https://script.google.com/macros/s/AKfycbyiSP6qbiAwX1K_-9m_iG8DwjM0AxHRHtZD0lQJ9ysF/dev",
                type: "POST",
                data: { 'fileURL' : fileURL },
                dataType: "json",
                beforeSend: function( xhr ) {
                   $( "#fetch" ).prop('disabled', true);
                }
            });

            request.done(function( result ) {
                $( "#result" ).html( result.msg );
                $( "#fetch" ).prop('disabled', false);
            });

            request.fail(function( jqXHR, textStatus ) {
                alert( "Request failed: " + textStatus );
            });
        }
    });
});
