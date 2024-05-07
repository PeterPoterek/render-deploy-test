const url = "https://render-deploy-test-q07k.onrender.com/random-data";

const fetchData = async () => {
  const res = await fetch(url);
  const json = await res.json();

  console.log(json);
};
fetchData();
