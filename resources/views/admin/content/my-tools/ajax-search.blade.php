<script type="text/javascript">
    // live search ajax
    
  const search = document.getElementById('searchZone');
  const tableBody = document.getElementById('tbody');
  function getContent(){
  
  const searchValue = search.value;
  
  
  const xhr = new XMLHttpRequest();
  const defaultContent = tableBody.innerHTML;
  const route_name='{{route($route_name)}}/?search='
  xhr.open('GET',route_name + searchValue ,true);
  xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
  xhr.onreadystatechange = function() {
  
  if(xhr.readyState == 4 && xhr.status == 200)
  {
    if(searchValue != ""){
       tableBody.innerHTML = xhr.responseText;
    }else if(searchValue == ""){
      window.location.reload()
    }
  }
  }
  xhr.send()
  }
  search.addEventListener('input',getContent);
    
    // end live search ajax
</script>