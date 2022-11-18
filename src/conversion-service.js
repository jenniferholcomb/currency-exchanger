export default class ConversionService {
  static async getConversion() {
    const response = await fetch(`https://v6.exchangerate-api.com/v6/8d3dfdae23f7737e370899ad/latest/`);
    const jsonifiedResponse = await response.json();
    console.log(response);
    if (!response.ok) {
      console.log("here");
      const errorMessage = `Error ${response.status} ${response.statusText} ${jsonifiedResponse['error-type']} ${jsonifiedResponse['extra-info']}`;
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