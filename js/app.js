'use strict';

document.getElementById('shareBtn').addEventListener("click", function(){
  var bodyfirst = Array.from(document.getElementById('main-text').getElementsByTagName('p')).map(p => p.textContent).join('\n');
  var bodysecond = Array.from(document.getElementById('recipe').getElementsByTagName('li')).map(p => p.textContent).join('\n');
  var subject = 'Chocolate Pizza Recipe';

  location.href=`mailto:?subject=${subject}&body=${bodyfirst} - ${bodysecond}`;
});
