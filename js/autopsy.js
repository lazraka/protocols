$("#submit-btn").click(function(){
  $("#table2excel").table2excel({
    // exclude CSS class
    exclude: ".noExl",
    name: "Testing",
    filename: "TestFile" //do not include extension
  });
});
