let projectPage = false

const lazy = function lazy() {
  document.addEventListener('lazyloaded', function (e)  {

  })
}

lazy()

function loadPage(page) {
  $('.btn-nav-menu').removeClass('nav-btn-active')
  console.log(page)
  $('.' + page).addClass('nav-btn-active')
  $.ajax({
    url: `pages/${page}.php`,
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

function detectBackgroundBehavior() {
  if (projectPage == true) {
    projectPage = false
    $('#background-body').html('').css('filter', 'brightness(100%)');
  }
}

function navigateTo() {
  var url = document.location.href;
  var split_url = url.split('/');
  console.log(split_url)
  if (split_url[4] === "") {
      // URL is like www.whatever.com/something/pagename...
      loadPage('about')
  } else {
      // URL is just www.whatever.com or www.whatever.com/something
      loadPage(split_url[4])
  }
}

// function navigateTo() {
//   var url = document.location.href;
//   var split_url = url.split('/');
//   if (split_url[4] === "") {
//       // URL is like www.whatever.com/something/pagename...
//       loadPage('about')
//   } else {
//       // URL is just www.whatever.com or www.whatever.com/something
//       loadPage(split_url[4])
//   }
//   console.log('test')
// }

$(window).on('popstate', function (e) {
  showLoadingPage()
  const urlParams = new URLSearchParams(window.location.search)
  const myParam = urlParams.get('pid')
  if (myParam) {
    console.log('oohh i seee something!')
    $('#box').html('Oh no, halaman ini rusak. Coba Refresh atau kembali ke menu sebelumnya lalu klik link yang mengarah kesini 🤦‍♂️');
  } else {
    navigateTo()
    detectBackgroundBehavior()
  }



});

$(document).ready(function(){
  navigateTo()
})

function showLoadingPage() {
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
}

$('.btn-nav-menu').click(function(e) {

  e.preventDefault()

  var page = $(this).attr('href').split('/')[1];
  console.log(page)
  window.history.pushState({}, `Rachmad Nur Hayat | ${page}`, '#/' + page);
  showLoadingPage()
  loadPage(page)
  detectBackgroundBehavior()

  if (window.screen.availWidth < 760) {
    $('#nav-mobile').removeClass('nav-m-active')  
  }

})

$('.nav-mobile-init').click(function() {
  $('#nav-mobile').addClass('nav-m-active')
})


$(document).on('click','.link-href',function(e) {
  e.preventDefault()
  var page = $(this).attr('id');

  var type = $(this).attr('type');

  let urlnya = '';

  if (type === 'project') {
    var pageproject = $(this).attr('page');
    urlnya = 'pages/project/' + pageproject + '.php'
    var image = $(this).attr('image')

    $('#background-body').html(`
      <img class="bg-transition-running" style="height: 100%;
        width: 100%;
        object-fit: cover;filter:blur(7px);" src="${image}">
      `)

    $('#background-body').css('filter', 'brightness(50%)');

    window.history.pushState({}, `${type} | ${page}`, '#/' +  type + '?pid=' + page);
    projectPage = true
  }

  if (type === 'achievment') {
    urlnya = 'pages/achievment/detail.php'
    window.history.pushState({}, `${type} | ${page}`, '#/' + type + '?id=' + page);
  }

  if (type === 'blog') {
    urlnya = 'pages/blog/read.php'
    window.history.pushState({}, `${type} | ${page}`, '#/' + type + '?id=' + page);
  }

  showLoadingPage()
  $.ajax({
    url: urlnya,
    type: 'POST',
    data: {
      id: page,
    },
    success: function(data) {
       //handle data object containing the html
       $('#box').html(data);
    },
    error: function(xhr, error){
        //generic error callback, you'll end up here when your file doesnt exist
      $('#box').html(error + '/' + xhr);  
    }

  });
})

const colorschemeone = ["#ff0844", "#4481eb", "#b721ff", "#434343"];
const colorschemetwo = ["#ffb199", "#04befe", "#21d4fd", "#000000"];
let scheme = 0

$("#btn-color-scheme-changer").click(function() {
  
  scheme += 1
  if (scheme > 3) {
    scheme = 0
  }


  $(":root").get(0).style.setProperty("--colorone", colorschemeone[scheme]);
  $(":root").get(0).style.setProperty("--colortwo", colorschemetwo[scheme]);
  
});
