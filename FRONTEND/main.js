Moralis.initialize("YOUR_APP_ID");

Moralis.serverURL = 'https://YOUR_MORALIS_SERVER:1337/server'

init = async () => {
    window.web3 = await Moralis.Web3.enale();

}

initUser = async () => {
    if (await Moralis.User.current()) {
        hideElement(userConnectButton);
        showElement(userProfileButton);
    }else{
        showElement(userConnectButton);
        hideElement(userProfileButton);
    }
}

hideElement = (element) => element.style.display = 'none';
showElement = (element) => element.style.display = 'block';

const userConnectButton = document.getElementById("btnConnect");
const userProfileButton = document.getElementById("btnUserInfo");

init();