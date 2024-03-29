const clearText = () => {
  setTimeout(function(){
    document.getElementById('txt').value = '';
    document.getElementById('blend').value = '';
  },0);
  
}

const clearURL = () => {
  window.history.replaceState(null, null, window.location.pathname);

}

const urlParams = () => {
  getTxt();
  getBlend();
}

const getTxt = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const txtParam = urlParams.get('txt');
  document.getElementById('text-overlay').innerHTML = txtParam;
}

const getBlend = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const blendParam = urlParams.get('blend');
  const wrap = document.getElementById('wrap');
  wrap.style.setProperty('--color', '#'+blendParam)  ;
}
