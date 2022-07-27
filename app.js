// First Event Listener
document.getElementById('button1').addEventListener('click', getText);

// Second Event Listener for JSON file
document.getElementById('button2').addEventListener('click', getJson);

// Third Event Listener for JSON file
document.getElementById('button3').addEventListener('click', getExternal);

// First Callback function for button1: getText
function getText(){
  fetch('text.txt')
  .then(function(res){
    //console.log(res);
    //console.log(res.text());
    return res.text();
  })
  .then(function(data){
    console.log(data);
    document.getElementById('output').innerHTML = data;
    // Data is supposed to appear on the page 
  })
  // TO get the error we use catch
  .catch(function(err){
    console.log(err);
  });
}

// ************************ //

// Second Call back function: getJson:
function getJson(){
  fetch('posts.json')
  .then(function(res){
    //console.log(res);
    //console.log(res.text());
    return res.json();
  })
  .then(function(data){
    console.log(data); 
    let output = '';
    data.forEach(function(post){
      output += `<li>${post.title}</li>`;
    });
    document.getElementById('output').innerHTML = output;
  })
  .catch(function(err){
    console.log(err);
  });
}
// Third Call back function: getExternal
// Get from https://api.github.com/users
function getExternal(){
  fetch('https://api.github.com/users')
  .then(function(res){
    //console.log(res);
    //console.log(res.text());
    return res.json();
  })
  .then(function(data){
    console.log(data); 
    let output = '';
    data.forEach(function(user){
      output += `<li>${user.login}</li>`;
    });
    document.getElementById('output').innerHTML = output;
  })
  .catch(function(err){
    console.log(err);
  });
}
