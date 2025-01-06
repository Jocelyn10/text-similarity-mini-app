Page({
  handleTextSimilarityChecker(){
    const {
      BASE_URL,
      API_KEY
    } = getApp()

    const text1 = 'This is an example sentence.'
    const text2 = 'This is just another example sentence.'

    const URL = `${BASE_URL}/textsimilarity`

    my.request({
      url: URL,
      method: 'POST',
      headers: {
        'X-Api-Key': API_KEY
      },
      data: JSON.stringify({ "text_1": text1, "text_2": text2 }),

      success: function(response){
        console.log('Response : ', response);
      },
      fail: function(response){
        console.log('Echec de la requête');
      }
    });
  }
});
