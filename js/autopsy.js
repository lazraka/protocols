$("#submit-btn").click(function(){
  $("#table").table2excel({
    // exclude CSS class
    exclude: ".noExl",
    name: "Testing",
    filename: "TestFile" //do not include extension
  });
});

//this does not work on its own, it needs a downloaded plugin to function