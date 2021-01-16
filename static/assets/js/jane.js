$(document).ready(function() {
	/** call show_contacts withouth a search argument so show all contacts immediately.  */
	show_contacts();

	/** function for retrieving contacts from api through ajax. 
     * takes a search argument in case the results need to be filtered. 
     */
	async function get_contacts(search = undefined) {
		console.log('please come');
		const response = await axios.get('/api/contacts', {
			params : {
				search : search
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

		show_contacts(search);

		console.log('whats happening');
	});

	/** This prevents the submission of the form if user hits enter */
	$('#search-form').on('submit', async function(e) {
		e.preventDefault();
	});

	/** function for displaying contacts. calls the get_contact fuction to retrieve data. 
     * Takes a search argument in case results need to be filtered.
    */

	async function show_contacts(search = undefined) {
		response = await get_contacts(search);

		console.log(response);
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
});
