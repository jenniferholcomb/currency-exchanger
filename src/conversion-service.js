export default class ConversionService {
  static async getConversion() {
    try {
      const response = await fetch(`https://v6.exchangerate-api.com/v6/8d3dfdae23f7737e37089ad/latest/USD`);
      const jsonifiedResponse = await response.json();
      console.log(response);
      if (!response.ok) {
        const errorMessage = `${response.status} ${response.statusText} ${jsonifiedResponse['error-type']} ${jsonifiedResponse['extra-info']}`;
        console.log(response.status);
        console.log(response.statusText);
        console.log(errorMessage);
        throw new Error(errorMessage);
      }
      return jsonifiedResponse;
    } catch(error) {
      return error;
    }
  }
}