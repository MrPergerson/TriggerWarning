$("#cover1-btn").click(() => {
    $("#cover1").addClass( "invisible" );
});

$("#cover2-btn").click(() => {
    $("#cover2").addClass( "invisible" );
});

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})
