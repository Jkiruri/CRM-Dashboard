(function(){dragula([document.querySelector("#leads-discovered"),document.querySelector("#leads-qualified"),document.querySelector("#contact-initiated"),document.querySelector("#needs-identified"),document.querySelector("#negotiation"),document.querySelector("#deal-finalized")]),flatpickr("#targetDate",{enableTime:!0,dateFormat:"Y-m-d H:i"});let a=function(e){var t=new FileReader;t.onload=function(){var r=document.getElementById("profile-img");e.target.files[0].type.match("image.*")?r.src=t.result:(e.target.value="",alert("please select a valid image"))},e.target.files[0]&&t.readAsDataURL(e.target.files[0])};document.querySelector("#profile-change").addEventListener("change",a)})();
