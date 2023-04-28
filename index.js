const btn = document.querySelector('#btn');
const range_r1 = document.querySelector('#range-1');
const range_r2 = document.querySelector('#range-2');
const text = document.querySelector('#text-range');
const btn_consultar = document.querySelector('#consultar');

const getResultados = () => {
  uno = Math.round(range_r1.value);
  equis = Math.round(((100 - range_r1.value) * range_r2.value) / 100) + uno;
  num = Math.round(Math.random() * 99) + 1;
  if (num >= 0 && num <= uno) {
    return '1';
  } else if (num > uno && num <= equis) {
    return 'X';
  } else {
    return '2';
  }
};

const putResultados = () => {
  for (let i = 0; i < 15; i++) {
    document.querySelector(`#i-${i}`).value = getResultados();
  }
};

range_r1.oninput = () => {
  const uno = Math.round(range_r1.value);
  const equis = Math.round(((100 - range_r1.value) * range_r2.value) / 100);
  const dos = Math.round(100 - uno - equis);
  text.innerHTML = `${uno}% de resultados "1", ${equis}% de resultados "X" y ${dos}% de resultados "2"`;
};

range_r2.oninput = () => {
  const uno = Math.round(range_r1.value);
  const equis = Math.round(((100 - range_r1.value) * range_r2.value) / 100);
  const dos = Math.round(100 - uno - equis);
  text.innerHTML = `${uno}% de resultados "1", ${equis}% de resultados "X" y ${dos}% de resultados "2"`;
};

btn.addEventListener('click', () => {
  putResultados();
});
