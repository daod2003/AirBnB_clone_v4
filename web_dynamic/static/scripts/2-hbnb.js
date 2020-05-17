$(document).ready(function(){
    let amenity_dict = {};
    $('input[type="checkbox"]').click(function(){
        if($(this).is(":checked")){
            amenity_dict[$(this).data('id')] = $(this).data('name');
        } else {
            delete amenity_dict[$(this).data('id')];
        }
        let filter_list = Object.values(amenity_dict);
        if (filter_list.length > 0) {
            $('div.amenities > h4').text(Object.values(amenity_dict).join(', '));
        } else {
            $('div.amenities > h4').html('&nbsp;');
        }
    });
    console.log('Entro');
    
    $.get('http://0.0.0.0:5001/api/v1/status/', (data, textStatus) => {
    if (textStatus === 'success') {
      if (data.status === 'OK') {
        $('#api_status').addClass('available');
      } else {
        $('#api_status').removeClass('available');
      }
    }
  });
});
