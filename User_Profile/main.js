function profileDelete(id) {
    sessionStorage.setItem("profileId", id);
    window.location.href = "view_details.html" +'?'+"name=" +id;
    
}

// var profileId = "abc";
// login = "abcd";
// location.href = '@Url.Action("Display", "profileId")?uname=' + profileId + '&name=' +login;
// if(location.href.indexOf('?') !== -1 && location.href.indexof('?page=') === -1)
// {
//     var urlArray = location.href.split('?');
//     var newURL = urlArray[0] + "?page=" + urlArray[1];
//     location.href = newURL;
// }