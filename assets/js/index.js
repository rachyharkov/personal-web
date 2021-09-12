const lazy = function lazy() {
  document.addEventListener('lazyloaded', function (e)  {
    // e.target.parentNode.classList.add('image-loaded')
    // e.target.parentNode.classList.remove('loading')
    // e.target.parentNode.classList.add('loaded')
  })
}

lazy()

function loadPage(page) {
  $.ajax({
    url: `pages/${page}.html`,
    dataType: 'html',
    success: function(data) {
       //handle data object containing the html
       $('#box').html(data);
    },
    error: function(xhr, error){
        //generic error callback, you'll end up here when your file doesnt exist
      $('#box').html(error);  
    }

  });
}


$(document).ready(function(){
  loadPage('about')
})


$('.btn-nav-menu').click(function() {

  $('.btn-nav-menu').removeClass('nav-btn-active')
  $(this).addClass('nav-btn-active')
  console.log('work!')

  var page = $(this).attr('where');
  $('#box').html(`
    <div style="display: flex;
flex-direction: column;
text-align: center;
transition: all 900ms ease-in-out">
      <svg width="42" height="42" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" style="filter: invert(1);margin: auto;">
        <circle cx="0" cy="50" r="10" fill="#25282B" class="anim-0-0-17" style="animation-delay: 0s; animation-duration: 2.5s;"></circle>
        <circle cx="0" cy="50" r="10" fill="#25282B" class="anim-0-0-17" style="animation-delay: -0.625s; animation-duration: 2.5s;"></circle>
        <circle cx="0" cy="50" r="10" fill="#25282B" class="anim-0-0-17" style="animation-delay: -1.25s; animation-duration: 2.5s;"></circle>
        <circle cx="0" cy="50" r="10" fill="#25282B" class="anim-0-0-17" style="animation-delay: -1.875s; animation-duration: 2.5s;"></circle>
      </svg>
      <p>🐢</p>
    </div>
    `)

  loadPage(page)

})