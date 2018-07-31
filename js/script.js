
function getMapData() {
    $.ajax({
        url: "https://api.geonet.org.nz/quake/2018p572179",
        type: "GET",
        dataType: 'json',
        success: function (data) {
          console.log(data);
        },
        error: function(error){
          console.log("ERROR");
          console.log(error);
        }

    })
}
getMapData();

function getNewsData() {
    $.ajax({
        url: "https://api.geonet.org.nz/news/geonet",
        type: "GET",
        dataType: 'json',
        success: function (data) {
          console.log(data);
        },
        error: function(error){
          console.log("ERROR");
          console.log(error);
        }
    })
}

getNewsData()

//endpoints are important parts in API geonet
