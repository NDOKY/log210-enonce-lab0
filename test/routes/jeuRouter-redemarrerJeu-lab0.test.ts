// Vous devez insérer les nouveaux tests ici
import { assert } from 'console';
import 'jest-extended';
import supertest from 'supertest';
import app from '../../src/app';

const request = supertest(app);

/*describe('redemarrerJeu.test.ts', () => {
  it("devrait implémenter test", async () => {
    throw new Error("Ce test n'a pas été défini")
  });
});*/


describe('GET /api/v1/jeu/redemarrerJeu', () =>{

     beforeAll(() =>{
      const joueur01 = "un nom";
      //const joueur02 = "un nom";
    });

    it('devrait répondre au succès de la connexion', async() =>{
        const response = await request.get('/api/v1/jeu/redemarrerJeu');
        expect(response.status).toBe(200);
        expect(response.type).toBe("application/json");
        expect(response.body.message).toBe("Le jeu s'est connecté avec succès.");


    });

    it('devrait vérifier qu\'il n\'y a plus de joueurs', async() =>{
        const response = await request.get('/api/v1/jeu/redemarrerJeu');
        expect(response.status).toBe(200);
        expect(response.body.joueur01).toEqual("");
    });


});
