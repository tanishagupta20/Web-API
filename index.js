function pullData() {
    let myObj = {};
    let repoObj = [];
  
    let obj = new XMLHttpRequest();
    let obj2 = new XMLHttpRequest();
  
    let username = document.getElementById("usn").value;
    let nameUser = document.getElementById("name-user");
    let imgUser = document.getElementById("img-user");
    let actUser = document.getElementById("act-user");
    let repoList = document.getElementById("repos-list");
    let repoHead = document.getElementById("repoHeading");
  
    obj.open("GET", `https://api.github.com/users/${username}`, true);
  
    obj.addEventListener("load", function () {
      myObj = JSON.parse(obj.responseText);
      nameUser.innerHTML = ` <span id = "nameSpan">${myObj.name}</span> <span class = "atTheRate">(@</span><a href = "${myObj.html_url}" target = "_blank" id = "usnLink">${username}</a><span class = "atTheRate">)</span>`;
      imgUser.innerHTML = `
      <div id = "userImage"><img src = "${myObj.avatar_url} height = "60px" width = "60px"/></div>
      `
      actUser.innerHTML = `Followers: ${myObj.followers} - Following: ${myObj.following}<br>
      Repos: ${myObj.public_repos}
      `
      console.log(myObj);
    })
  
    obj2.open("GET", `https://api.github.com/users/${username}/repos`, true);
  
    obj2.addEventListener("load", function(){
      repoObj = JSON.parse(obj2.responseText);
      repoHead.innerHTML = `<h4>Repo List:</h4>`;
      repoList.innerHTML = "";
      repoObj.forEach(function(data){
        repoList.innerHTML += `
        <a href = "${data.svn_url}" class = "repoLinks" target = "_blank"><div class = "repoName">${data.name}</div></a>
      `
      })
      
      console.log(repoObj);
    })
  
  
    obj.send();
    obj2.send();
  }