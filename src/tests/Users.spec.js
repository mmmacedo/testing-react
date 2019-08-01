import React from "react";
import Users from "../users/Users";
import {create} from "react-test-renderer";
import axios from "axios";

//precisa estar fora do describe
jest.mock("axios");

//Fifth test -> MOCKING AJAX request
describe("Users component", () => {
    it("shows a list of users", async () => {
        //inicio bloco do mock
        //caso queira usar a api, comentar esse bloco e mais o JEST acima        
        const response = {
            data: [ 
                {
                "id": 666,
                "name": "Mrs. Mephistopholes",
                "username": "demonho",
                "email": "demonho@jasper.info",
                "address": {
                  "street": "Norberto Crossing",
                  "suite": "Apt. 950",
                  "city": "South Christy",
                  "zipcode": "23505-1337",
                  "geo": {
                        "lat": "-71.4197",
                        "lng": "71.7478"                  
                        }
                    }
                }]
          };
        axios.get.mockResolvedValue(response);
        //fim bloco do mock
        const component = create( <Users /> );
        const instance = component.getInstance();
        await instance.componentDidMount();
        console.log(instance.state) // << Imprime na tela os Usuarios carregador
    });
});