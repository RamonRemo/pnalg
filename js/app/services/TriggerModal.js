(function () {
    var $body = $('body'),

        $modalTriggers = $('button.modalTrigger'),

        openModal = function (evt) {
            var $trigger = $(this),

                modalPath = $trigger.attr('url'),
                $newModal,

            if (!modalPath || modalPath.indexOf('#') === 0) {
                return;
            }

            removeModal = function (evt) {
                $newModal.off('hidden.bs.modal');
                $newModal.remove();
            },

                showModal = function (data) {
                    $body.append(data);
                    $newModal = $('.modal').last();
                    $newModal.modal('show');
                    $newModal.on('hidden.bs.modal', removeModal);
                };

            $.get(modalPath, showModal);
            evt.preventDefault();
        };

    $modalTriggers.on('click', openModal);
}());