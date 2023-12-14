const axios = require('axios');

const verificarEmail = async (email) => {
  try {
    const accessKey = '2b01b0b7f0ec995ba6f01018a27df45c';
    const apiUrl = `http://apilayer.net/api/check?access_key=${accessKey}&email=${email}&smtp=1&format=1`;
    const response = await axios.get(apiUrl);

    if( response.data.format_valid === true){
        return true;
    }else{
        return false
    }
    
  } catch (error) {
    throw new Error(`Erro na verificação de e-mail: ${error.message}`);
  }
};

module.exports = { verificarEmail };
