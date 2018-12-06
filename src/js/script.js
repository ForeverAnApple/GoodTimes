const device_id = "400052000d51353532343635";
const access_t = "4938386ce157fb73505b2623c6c421cb3712ab1d";

let json = [];
let rec, mean, range, stddev;

function fetch(){
  json = [];

  //getRec();
  let url = "https://api.particle.io/v1/devices/"+device_id+"/rec?access_token="+access_t;
  $.get(url, function(data, status){
    $('#rec').html('Most Recent: ' + data['result'])
    json.push("{\"rec\":");
    rec = data['result'];
    json.push(rec);
  });

  //getMean();
  url = "https://api.particle.io/v1/devices/"+device_id+"/mean?access_token="+access_t;
  $.get(url, function(data, status){
    $('#mean').html('Mean Time: ' + data['result'])
    json.push(", \"mean\":");
    mean = data['result'];
    json.push(mean);
  });

  //getRange();
  url = "https://api.particle.io/v1/devices/"+device_id+"/range?access_token="+access_t;
  $.get(url, function(data, status){
    $('#range').html('Range: ' + data['result'])
    json.push(", \"range\":")
    range = data['result'];
    json.push(range);
  });

  //getStddev();
  url = "https://api.particle.io/v1/devices/"+device_id+"/stddev?access_token="+access_t;
  $.get(url, function(data, status){
    $('#stddev').html('Standard Deviation: ' + data['result'])
    json.push(", \"stdev\":");
    stddev = data['result'];
    json.push(stddev);
    json.push("}");
  });
}

function getJson(){
  console.log("GetJson called")
  url = "https://api.particle.io/v1/devices/"+device_id+"/json?access_token="+access_t;
  $.get(url, function(data, status){
    console.log(data);
    $('#json').html('Json Data: ' + data['result'])
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