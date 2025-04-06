((m, a, z, e) => {
  let t;
  try {
    t = m.sessionStorage.getItem('maze-us');
  } catch (err) {}

  if (!t) {
    t = new Date().getTime();
    try {
      m.sessionStorage.setItem('maze-us', t);
    } catch (err) {}
  }

  const s = a.createElement('script');
  s.src = `${z}?apiKey=${e}`;
  s.async = true;
  a.getElementsByTagName('head')[0].appendChild(s);
  m.mazeUniversalSnippetApiKey = e;
})(window, document, 'https://snippet.maze.co/maze-universal-loader.js', '24c38619-ca44-4b0a-9f5b-14ca17f9af76'); 