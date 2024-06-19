import helloWorld from './helloWorld.js';

const messages = async () => {
    const msg = await helloWorld();
    console.log(msg);
};
messages();


import ambilDataUser from './ambilDataUser.js';
ambilDataUser();


import ambilDataUserAsync from './ambilDataUserAsync.js';
ambilDataUserAsync();