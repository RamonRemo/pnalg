(function () {
    // Create jQuery body object
    var $body = $('body'),

        // Use a tags with 'class="modalTrigger"' as the triggers
        $modalTriggers = $('a.modalTrigger'),

        // Trigger event handler
        openModal = function (evt) {
            var $trigger = $(this),                  // Trigger jQuery object

                modalPath = $trigger.attr('href'),       // Modal path is href of trigger

                $newModal,                               // Declare modal variable

                removeModal = function (evt) {            // Remove modal handler
                    $newModal.off('hidden.bs.modal');  // Turn off 'hide' event
                    $newModal.remove();                // Remove modal from DOM
                },

                showModal = function (data) {             // Ajax complete event handler
                    $body.append(data);                // Add to DOM
                    $newModal = $('.modal').last();    // Modal jQuery object
                    $newModal.modal('show');           // Showtime!
                    $newModal.on('hidden.bs.modal', removeModal); // Remove modal from DOM on hide
                };

            $.get(modalPath, showModal);             // Ajax request

            evt.preventDefault();                   // Prevent default a tag behavior
        };

    $modalTriggers.on('click', openModal);         // Add event handlers
}());