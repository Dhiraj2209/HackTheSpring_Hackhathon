// Function to validate the form
function validateForm() {
    var name = document.getElementById('name').value;
    var address = document.getElementById('address').value;
    var phoneNumber = document.getElementById('phoneNumber').value;
    var email = document.getElementById('email').value;
    var education = document.getElementById('education').value;
    var personalId = document.getElementById('PersonalId').value;
    
    // Basic validation
    if (name === '' || address === '' || phoneNumber === '' || email === '' || personalId === ''  || PersonalId == '') {
        alert('Please fill in all fields');
        return false;
    }
    // Validate phone number format
    var phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(phoneNumber)) {
        alert('Please enter a valid 10-digit phone number');
        return false;
    }
    return true;
}
// Attach form submission validation to the form
document.getElementById('doctorForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission behavior
    if (validateForm()) {
        submitForm(); // Call the function to submit the form if validation passes
    }
});
// Function to submit the form
function submitForm() {
    // You can perform AJAX submission or any other action you want here
    // For demonstration, we'll just submit the form normally
    document.getElementById('doctorForm').submit();
}
function calculateAge() {

    // Update the age input field
    document.getElementById('age').value = age;
}
