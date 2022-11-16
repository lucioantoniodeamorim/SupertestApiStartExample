const request = require("supertest");
//Salva a UrlBase em uma variável
const ApiUrl = "http://pokeapi.azurewebsites.net/";

//Definição do conjunto de testes
describe("Teste get todos os pokemons", () => {
  //Definição do teste
  it("Deve retornar 200 e success = true", () => {
    //Define a UrlBase a ser utilizada
    return request(ApiUrl)
      //Define o endpoint a ser testado
      .get("/api/pokemon/list")
      //Define o status code esperado
      .expect(200)
      //Salva o retorno da chamada na varável response para validação
      .then(response => {
        //Valida se o campo success da requisição retornou 'true'
        expect(response.body.success).toEqual(true);
      });
  });
});

//Definição do conjunto de testes
describe("Teste get um pokemom", () => {
  //Definição do teste
  it("Deve retornar 200 e name = Bulbasaur'", () => {
    //Define a UrlBase a ser utilizada
    return request(ApiUrl)
      //Define o endpoint a ser testado
      .get("/api/pokemon/Bulbasaur")
      //Define o status code esperado
      .expect(200)
      //Salva o retorno da chamada na varável response para validação
      .then(response => {
        //Valida se o campo name da requisição retornou 'Bulbasaur'
        expect(response.body.data.name).toEqual("Bulbasaur");
      });
  });
});
