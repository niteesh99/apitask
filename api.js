
var request = new XMLHttpRequest();
request.open('GET', 'https://api.github.com/users/VenkateshMogili', true)
request.onload = function () 
{
  var data = JSON.parse(this.response);
  document.getElementById("name").innerHTML=data.login;
  document.getElementById("node_id").innerHTML=data.node_id;
  document.getElementById("avatar_url").innerHTML=data.avatar_url;
  document.getElementById("Followers").innerHTML=data.followers;
  document.getElementById("created_at").innerHTML=data.avatar_url;
  document.getElementById("site_admin").innerHTML=data.avatar_url;
 
}
request.send();
