// async/await
const timePromise = (str, ms) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(typeof str === 'string' ) {
        console.log(str);
        resolve('성공');
      } else {
        reject(new Error (`실패`));
      }
    }, ms);
  });
}

// timePromise('A', 1000)
// .then(() => timePromise('B', 1000))
// .then(() => timePromise('C', 1000))
// .then(() => console.log('모든 작업 완료'));

async function test() {
  try {
    // const response = await axios.get(url);
    // response.data;

    await timePromise('A', 1000);
    await timePromise('B', 1000);
    await timePromise('C', 1000);
    await timePromise(1, 1000);
  } catch(error) {
    console.log(error);
  }
}

test();