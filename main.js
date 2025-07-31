let motor_status = 0;

function openLink(id_,pin_no) {
    link = "https://blr1.blynk.cloud/external/api/get?token=bSE2rpEtFas-drlW1ik1VwuUJln6KrNO&V"+pin_no;
    //console.log(link);
    fetch(link)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.text();
    })
    .then(data => {
      console.log("Response:", data);
      document.getElementById(id_).innerText = data;
    })
    .catch(error => {
      console.error("Error:", error);
      document.getElementById(id_).innerText = "Failed";
    });
}

setInterval(() => {
  openLink("V0","0");
  openLink("V1","1");
  openLink("V2","2");
  openLink("V3","3");
  openLink("V4","4");
  openLink("V5","5");
  openLink("V6","6");

}, 5000);
