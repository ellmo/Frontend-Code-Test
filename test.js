$(document).ready(function(){
  $('a[data-bind="sidebar_fn"]').on('click', onSidebarClick);
  $('a[data-bind="blue_fn"]').on('mouseenter', feelBlue).on('mouseleave', blueNoMore)
})

function onSidebarClick(event){
  window.setTimeout(toggleSidebar, 3000);
}

function toggleSidebar(event){
  sidebar = $('#sidebar');
  if(sidebar.data('showing')){
    sidebar.animate({'width' : '0px'}, 100, function(){
      sidebar.data('showing', false)
    });
  } else {
    sidebar.animate({'width' : '300px'}, 100, function(){
      sidebar.data('showing', true)
    });
  };
}

function feelBlue(event){
  $('a:not([data-bind="blue_fn"])').css({'color': 'blue'});
}

function blueNoMore(event){
  $('a:not([data-bind="blue_fn"])').css({'color': 'maroon'});
}