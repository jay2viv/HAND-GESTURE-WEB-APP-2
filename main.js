camera = document.getElementById("camera");
Webcam.set({

    width: 320,
    height: 240,
    image_format: 'jpeg',
    jpeg_quality: 90
     
 });
 Webcam.attach( '#camera' );

 function Save_Image()
{
    Webcam.snap( function(data_uri){
        // display results in page
        document.getElementById('picture').innerHTML = 
         '<img src="'+data_uri+'"/>';
    });
}