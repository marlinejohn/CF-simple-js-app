let pokemonRepository = (function () {
  let e = [];
  function t() {
    return e;
  }
  function i(t) {
    e.push(t);
  }
  let n = document.querySelector('.modal');
  function l() {
    n.classList.remove('is-visible');
  }
  return (
    window.addEventListener('keydown', (e) => {
      'Escape' === e.key && n.classList.contains('is-visible') && l();
    }),
    n.addEventListener('click', (e) => {
      e.target === n && l();
    }),
    {
      getAll: t,
      add: i,
      addListItem: function e(t) {
        let i = document.querySelector('.list-group'),
          l = document.createElement('li');
        l.classList.add('list-group-item'), i.appendChild(l);
        let a = document.createElement('button');
        (a.innerHTML = t.name),
        l.appendChild(a),
        a.classList.add('btn', 'btn-success'),
        a.setAttribute('data-target', '#exampleModal'),
        a.setAttribute('data-toggle', 'modal'),
        (function e(t, i) {
          t.addEventListener('click', function () {
            (function e(t) {
              pokemonRepository.loadDetails(t).then(function () {
                (function e(t) {
                  let i = document.querySelector('.modal-content'),
                    l = document.querySelector('.modal-body'),
                    a = document.querySelector('.modal-title'),
                    o = document.querySelector('.modal-header'),
                    r = document.querySelector('.modal-footer');
                  (a.innerHTML = ''), (l.innerHTML = '');
                  let s = document.createElement('h1');
                  var d = t.name
                    .split(' ')
                    .map((e) => e.charAt(0).toUpperCase() + e.slice(1))
                    .join(' ');
                  s.innerHTML = 'Name: ' + d;
                  let c = document.querySelector('.close'),
                    p = document.createElement('img');
                  p.classList.add('modal-img'),
                  (p.src = t.imageUrlFront),
                  (p.alt = 'Front image of ' + t.name);
                  let m = document.createElement('img');
                  m.classList.add('modal-img'),
                  (m.src = t.imageUrlBack),
                  (m.alt = 'Back image of ' + t.name);
                  let u = document.createElement('p'),
                    h = [t.types[0].type.name];
                  for (let f = 1; f < t.types.length; f++)
                    h.push(', ' + t.types[f].type.name);
                  u.innerHTML = 'Types: ' + h.join('');
                  let g = document.createElement('p');
                  g.innerHTML = 'Height: ' + t.height;
                  let y = document.createElement('p');
                  y.innerHTML = 'Weigth: ' + t.weight;
                  let L = document.createElement('p'),
                    b = [t.abilities[0].ability.name];
                  for (let C = 1; C < t.abilities.length; C++)
                    b.push(', ' + t.abilities[C].ability.name);
                  (L.innerHTML = 'Abilities: ' + b.join('')),
                  o.appendChild(a),
                  a.appendChild(s),
                  o.appendChild(c),
                  l.appendChild(p),
                  l.appendChild(m),
                  l.appendChild(u),
                  l.appendChild(g),
                  l.appendChild(y),
                  l.appendChild(L),
                  i.appendChild(o),
                  i.appendChild(l),
                  i.appendChild(r),
                  n.appendChild(i),
                  n.classList.add('is-visible');
                })(t);
              });
            })(i);
          });
        })(a, t);
      },
      loadList: function e() {
        return fetch('https://pokeapi.co/api/v2/pokemon/?limit=150')
          .then(function (e) {
            return e.json();
          })
          .then(function (e) {
            e.results.forEach(function (e) {
              i({ name: e.name, detailsUrl: e.url });
            });
          })
          .catch(function (e) {
            console.error(e);
          });
      },
      loadDetails: function e(t) {
        return fetch(t.detailsUrl)
          .then(function (e) {
            return e.json();
          })
          .then(function (e) {
            (t.imageUrlFront = e.sprites.front_default),
            (t.imageUrlBack = e.sprites.back_default),
            (t.types = e.types),
            (t.height = e.height),
            (t.weight = e.weight),
            (t.abilities = e.abilities);
          })
          .catch(function (e) {
            console.error(e);
          });
      },
    }
  );
})();
pokemonRepository.loadList().then(function () {
  pokemonRepository.getAll().forEach(function (e) {
    pokemonRepository.addListItem(e);
  });
});
