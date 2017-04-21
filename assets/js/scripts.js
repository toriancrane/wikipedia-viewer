$(document).ready(function(){
  //When search is clicked run code
  $('#search').click(function(){
    //Retrieves search input
    var searchTerm = $('#searchTerm').val();
    //API url with searchTerm
    var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search="+ searchTerm +"&format=json&callback=?";
    
    $.ajax({
      type: "GET",
      url: url,
      async: false,
      dataType: "json",
      success: function(data){
        //console.log(data[1][0]); Get Heading
        //console.log(data[2][0]); Get description
        //console.log(data[3][0]); Get link
        $('#output').html('');
        for(var x = 0; x < data[1].length; ++x){
          $('#output').prepend("<li><a href= "+data[3][x]+">"+data[1][x] +"</a><p>"+data[2][x]+"</p></li><hr>");
        }
        $('#searchTerm').val('');
      },
      error: function(errorMessage){
       console.log(errorMessage);
      }
    });
  });
      $("#searchTerm").keypress(function(e){
      if(e.which == 13){
        $("#search").click();
      }
    });
});