export default class ConversionService {

  static async getConversion() {
    try {
      const response = await fetch(`https://v6.exchangerate-api.com/v6/8d3dfdae23f7737e370899ad/latest/USD`);
      const jsonifiedResponse = await response.json();
      if (!response.ok) {
        const errorMessage = `${response.status} ${response.statusText} ${jsonifiedResponse['error-type']} ${jsonifiedResponse['extra-info']}`;
        throw new Error(errorMessage);
      }
      // this.conversionRates = jsonifiedResponse.conversion_rates;
      // console.log(this.conversionRates);
      return jsonifiedResponse;
    } catch(error) {
      return error;
    }
  }
}