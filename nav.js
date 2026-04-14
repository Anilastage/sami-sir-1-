/* ================================================
   Mahim Project — Projects Filter
   ================================================ */
document.addEventListener('DOMContentLoaded', function () {

  const pills = document.querySelectorAll('.filter-pill');
  const cards = document.querySelectorAll('.project-card');
  if (!pills.length) return;

  pills.forEach(pill => {
    pill.addEventListener('click', function () {
      pills.forEach(p => p.classList.remove('active'));
      this.classList.add('active');
      const f = this.dataset.filter;
      cards.forEach(c => {
        c.style.display = (f === 'all' || c.dataset.type === f) ? '' : 'none';
      });
    });
  });

});
