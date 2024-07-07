jQuery(document).ready(function($) {



    $('.tabgroup > div').hide();
        $('.tabgroup > div:first-of-type').show();
        $('.tabs a').click(function(e){
          e.preventDefault();
            var $this = $(this),
            tabgroup = '#'+$this.parents('.tabs').data('tabgroup'),
            others = $this.closest('li').siblings().children('a'),
            target = $this.attr('href');
        others.removeClass('active');
        $this.addClass('active');
        $(tabgroup).children('div').hide();
        $(target).show();
      
    })

    var mapModal = document.getElementById('mapModal');
    mapModal.addEventListener('show.bs.modal', function (event) {
        var button = event.relatedTarget; // Button that triggered the modal
        var mapSrc = button.getAttribute('data-map'); // Extract info from data-* attributes
        var modalBody = mapModal.querySelector('.modal-body iframe');
        modalBody.src = mapSrc;
    });

    mapModal.addEventListener('hidden.bs.modal', function () {
        var modalBody = mapModal.querySelector('.modal-body iframe');
        modalBody.src = ''; // Clear the iframe src to stop the map loading when the modal is hidden
    });


});
