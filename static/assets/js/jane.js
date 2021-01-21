$(document).ready(function() {
	/**  ************************************************************************************* */
	// This is the beginning of the contact page code.  It allows for contact to be populated and searched throught hte DOM
	/** *************************************************************************************** */

	// this gets the user id data passed to this field, which is just id of the player in memory.
	const user_id = $('#contact-list').data('user-id');

	console.log(user_id);

	/** call show_contacts withouth a search argument so show all contacts immediately.  */
	show_contacts(user_id);

	/** function for retrieving contacts from api through ajax. 
     * takes a search argument in case the results need to be filtered. 
     */
	async function get_contacts(id, search = undefined) {
		console.log('get contacts');
		const response = await axios.get('/api/contacts', {
			params : {
				search     : search,
				contact_id : id
			}
		});

		return response;
	}

	/** event handler for searching for contacts
     * retrieves fitered contacts through ajax and dsplays
     */

	$('#search-form').on('keyup', async function(e) {
		e.preventDefault();

		let search = $('#contact-search').val();

		show_contacts(user_id, search);

		console.log('whats happening');
	});

	/** This prevents the submission of the form if user hits enter */
	$('#search-form').on('submit', async function(e) {
		e.preventDefault();
	});

	/** function for displaying contacts. calls the get_contact fuction to retrieve data. 
     * Takes a search argument in case results need to be filtered.
    */

	async function show_contacts(id, search = undefined) {
		response = await get_contacts(id, search);

		console.log('show contacts');
		$('#contact-list').empty();

		for (contact of response.data.contacts) {
			$('#contact-list').append(
				`<div class="col mb-4">
                <div class="card h-100 profile_view d-flex flex-column justfify-content-between">
                    <div class="text-center">
                        <img
                            src=${contact.image_url}
                            class="rounded-circle w-50
                            shadow-sm"
                            alt="...">

                    </div>

                    <div class="card-body">
                        <h5 class="d-flex d-inline-flex
                            card-title">${contact.primary_first_name}
                        </h5>
                        <h5 class="d-flex d-inline-flex
                            card-title">${contact.primary_last_name}</h5>
                        <p class="card-text">

                            <b>Email:</b>
                            ${contact.primary_email}<br>
                            <b>Address:</b>
                            ${contact.get_address}<br>
                            <b>Phone Number:</b>
                            ${contact.primary_phone}
                        </p>

                    </div>
                    <div class="card-footer">
                        <div class="col-xs-12 col-sm-12 d-flex
                            justify-content-between">
                            <button type="button" class="btn
                                btn-outline-danger btn-xs" data-toggle="modal" data-target="#deleteModal" data-contact="${contact.id}">
                                <i class="fas fa-trash-alt"></i>
                                <small>delete</small>

                            </button>
                            <a href="/contacts/${contact.id}"
                                type="button" class="btn
                                btn-outline-primary btn-xs"><i
                                    class="fa fa-user"></i>
                                <small>details</small></a>
                        </div>
                    </div>
                </div>

            </div>`
			);
		}
	}

	/**  *************************** */
	// This is the beginning of the Contact modal code.  This is supposed to pass on the id of contact
	/** ************************** */

	$('#deleteModal').on('show.bs.modal', function(event) {
		let button = $(event.relatedTarget); // Button that triggered the modal
		let contact_id = button.data('contact'); // Extract info from data-* attributes
		// If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
		// Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.

		// html =
		// 	"<a href='{{url_for('delete_contact', contact_id=contact.id)}}' type='button' class='btn btn-danger'>Delete</a>";

		console.log(contact_id);

		$('#finalContactDelete').attr('action', `/contacts/${contact_id}/delete`);
		// var modal = $(this);
		// modal.find('.modal-title').text('New message to ' + recipient);
		// modal.find('.modal-body input').val(recipient);
	});

	/**  *************************** */
	// This is the beginning of the Profile page Code.  It allows for the form to toggle from read only to editable.
	/** ************************** */

	/** this hides the save button  */

	$('#profile-save').hide();

	/** this adds an Id to the profile form, and then uses that ID to disable all inputs in form when Dom is loaded. 
     * Note: one of the fields is used to identify the form as a parent and add the ID. It would be preferable to add and ID to form upon creation. 
    */
	$('#first_name').parents('form').attr('id', 'profile-form');
	$('#profile-form').find('input').prop('disabled', true);

	/** this event handler handles what happens when the save button is clicked. The save button is hidden, and the edit button is shown.  */
	$('#profile-save').on('click', async function(e) {
		$('#profile-edit').toggle();
		$(this).toggle();

		console.log('is this working');
	});

	/** this event handler handles what happens when the edit button is clicked. The edit button is hidden, and the save button is shown. The inputs in the form are enabled.   */
	$('#profile-edit').on('click', async function(e) {
		$('#profile-save').toggle();
		$(this).toggle();

		$('#profile-form').find('input').css('background-color', 'white').prop('disabled', false);

		console.log('is this working great');
	});
});