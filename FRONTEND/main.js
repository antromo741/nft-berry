Moralis.initialize("YOUR_APP_ID");

Moralis.serverURL = 'https://YOUR_MORALIS_SERVER:1337/server'

init = async () => {
    window.web3 = await Moralis.Web3.enale();

}
hideElement = (element) => element.style.display = 'none';
showElement = (element) => element.style.display = 'block';


init();