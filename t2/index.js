$(document).ready(function() {

    setEventHandlers();

});

function setEventHandlers() {
    const getButton = $(`#cookie-button`);
    const parent = $(`#cookie-jar`);
    $(getButton).click(() => {
      alert("Button has been clicked!");
    });

}
