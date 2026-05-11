const form = document.getElementById('appForm');

form.addEventListener('submit', function(event) {

	    event.preventDefault();

	    const name = document.getElementById('name').value;
	    const email = document.getElementById('email').value;

	    if(name === "" || email === "") {

		            alert("Please fill all fields!");

		        } else {

				        document.getElementById('message').innerText =
					        "Form submitted successfully, " + name + "!";

				        console.log("Name:", name);
				        console.log("Email:", email);

				        form.reset();
				    }
});
