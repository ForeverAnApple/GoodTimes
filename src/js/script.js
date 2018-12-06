const device_id = process.env.DEVICE_ID;
const access_t = process.env.ACCESS_TOKEN;

function fetch(){
  //getRec();
  let url = "https://api.particle.io/v1/devices/"+device_id+"/rec?access_token="+access_t;
  $.get(url, function(data, status){
    $('#rec').html('Most Recent: ' + data['result'])
  });

  //getMean();
  url = "https://api.particle.io/v1/devices/"+device_id+"/mean?access_token="+access_t;
  $.get(url, function(data, status){
    $('#mean').html('Mean Time: ' + data['result'])
  });

  //getRange();
  url = "https://api.particle.io/v1/devices/"+device_id+"/range?access_token="+access_t;
  $.get(url, function(data, status){
    $('#range').html('Range: ' + data['result'])
  });

  //getStddev();
  url = "https://api.particle.io/v1/devices/"+device_id+"/stddev?access_token="+access_t;
  $.get(url, function(data, status){
    $('#stddev').html('Standard Deviation: ' + data['result'])
  });
}

function reset(){
  const url = "https://api.particle.io/v1/devices/"+device_id+"/reset";
  const post_fields = {'access_token': access_t, 'args': 'message'};
  $.post(url, post_fields, function(data, status){
    console.log(data);
    fetch();
  });
}

function rollback(){
  const url = "https://api.particle.io/v1/devices/"+device_id+"/rollback";
  const post_fields = {'access_token': access_t, 'args': 'message'};
  $.post(url, post_fields, function(data, status){
    console.log(data);
    fetch();
  });
}