Page({
  handleTextSimilarityChecker(){
    const {
      BASE_URL,
      API_KEY
    } = getApp()

    const phoneNumber = '+243814449163'

    const URL = `${BASE_URL}/validatephone?number=${phoneNumber}`

    my.request({
      url: URL,
      method: 'GET',
      headers: {
        'X-Api-Key': API_KEY
      },
      contentType: 'application/json',

      success: function(response){
        console.log('Response : ', response);
      },
      fail: function(response){
        console.log('Echec de la requête');
      }
    });
  }
});
